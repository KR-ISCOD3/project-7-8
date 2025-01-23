import { createContext, useEffect, useState } from "react";
import Product from "../pages/Product";
import axios from "axios";
import { toast } from "react-toastify";


const ProductContext = createContext();

export const ProductProdiver = ({children}) =>{
    const [product, setProduct]=useState([])
    const [loading,setLoading] = useState(false);

    const FetchAPI = async() =>{
        try{
            setLoading(true);
            const res = await axios.get('https://product-server-json.onrender.com/products');
            setProduct(res.data)
        }catch(e){

        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        FetchAPI();
    },[])

    const notify = (msg) =>{
        toast(msg,{
            theme: "dark",
            position: 'bottom-right',
            // draggable: true,
        })
    }
    
    return(
        <ProductContext.Provider value={{product,loading,notify}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;