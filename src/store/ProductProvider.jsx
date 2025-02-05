import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductContext = createContext();

export const ProductProdiver = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const FetchAPI = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://product-server-json.onrender.com/products"
      );
      setProduct(res.data);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchAPI();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const notify = (msg) => {
    toast(msg, {
      theme: "dark",
      position: "bottom-right",
      // draggable: true,
    });
  };

  const addToCart = (productId) => {
    const productAdd = product.find((e) => e.id === productId);
    if (productAdd) {
      const isExist = cart.find((e) => e.id === productId);
      if (isExist) {
        toast("Product has been added please check", {
          theme: "dark",
          position: "bottom-right",
          // draggable: true,
        });
        // notify('Product has been added please check');
      } else {
        // notify('Product already added..');
        toast.success("Product already added..", {
          position: "bottom-right",
          // draggable: true,
        });
      }

      setCart((prev) => {
        const isProduct = prev.some((e) => e.id === productId);
        if (isProduct) {
          return prev.map((e) =>
            e.id === productId ? { ...e, qty: e.qty + 1, subtotal: (e.qty + 1) * e.price } : e
          );
        } else {
          return [...prev, { ...productAdd, qty: 1,subtotal:productAdd.price }];
        }
      });
    }
  };

  const handleQty = (productId, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, qty: Number(newQty), subtotal: item.price * Number(newQty) }
          : item
      )
    );
  };

  const DeleteCart = (productId)=>{
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  return (
    <ProductContext.Provider
      value={{ product, loading, addToCart, cart, handleQty,DeleteCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
