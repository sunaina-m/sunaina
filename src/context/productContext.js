import { createContext, useContext, useEffect, useReducer,useState } from "react";
import reducer from '../reducer/ProductReducer';


const AppContext = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  product: [],
  featureProduct: [],
  isSingleLoading:false,
  singleProduct:{},
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
 const [allProd , setAllProd] = useState([])
  const getProducts = () => {
   dispatch({type: "SET_LOADING"})
    fetch("https://api.pujakaitem.com/api/products").then((getdata) => {
      getdata.json().then((result) => {
        const product = result
        dispatch({ type: "SET_API_DATA", payload: product })
       
        setAllProd(product)
        return product;
      })
    })
      .catch((error) => {
        dispatch({ type: 'API_error' })
      })
  }
  // console.log("22222222222222222",allProd)
  const getSingleProduct =(id)=>{
    dispatch({type: "SET_SINGLE_LOADING"})
    fetch(`https://api.pujakaitem.com/api/products/${id}`).then((getdata) => {
      getdata.json().then((result) => {
        // console.log("55555555555",result)
        const singleProduct = result
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
        
      })
    })
      .catch((error) => {
        dispatch({ type: 'SET_SINGLE_ERROR' })
      })

  }


  useEffect(() => {
    getProducts();
  }, [])

  return (
    <AppContext.Provider value={{ ...state ,getSingleProduct,getProducts , allProd }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };