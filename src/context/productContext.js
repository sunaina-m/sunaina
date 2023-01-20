import { createContext, useContext, useEffect, useReducer } from "react";
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
 
  const getProducts = () => {
   dispatch({type: "SET_LOADING"})
    fetch("https://api.pujakaitem.com/api/products").then((getdata) => {
      getdata.json().then((result) => {
        const product = result
        dispatch({ type: "SET_API_DATA", payload: product })
        console.log(product,"allproduct")
      })
    })
      .catch((error) => {
        dispatch({ type: 'API_error' })
      })
  }
  const getSingleProduct =(id)=>{
    dispatch({type: "SET_SINGLE_LOADING"})
    fetch(`https://api.pujakaitem.com/api/products/${id}`).then((getdata) => {
      getdata.json().then((result) => {
        console.log("55555555555",result)
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
    <AppContext.Provider value={{ ...state ,getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };