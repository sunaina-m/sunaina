import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer';

const AppContext = createContext();
const initialState={
  isLoading:false,
  isError:false,
  product:[],
  featureProduct:[],
}

const AppProvider = ({ children }) => {

  const[state, dispatch]= useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({type:"SET_LOADING"})
    const fetchingData = fetch("https://api.pujakaitem.com/api/products")
    fetchingData.then((getdata) => {
      getdata.json().then((result) => {
       const product = result
      dispatch({type:"SET_API_DATA",payload:product})
      console.log(product)
      }) 
    })
     .catch((error)=>{
        dispatch({type:'API_error'})
    })
    
  }, [])
    
  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };