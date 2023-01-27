import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filter:{
    text:"",
    category: "all",
    company: "all",
    color: "all",
  }
};

export const FilterContextProvider = ({ children }) => {
  const { allProd } = useProductContext();
// console.log(allProd,'hello')
  const [state, dispatch] = useReducer(reducer, initialState);

//   to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
const sorting =()=>{
 dispatch ({type :"GET_SORT_VALUE"})
}

//update the filter values
const updateFilterValue =(event)=>{
  let name =event.target.name;
  let value =event.target.value;
  return dispatch({type:"UPDATE_FILTER_VALUE", payload:{name,value}});
}
useEffect(()=>{
  dispatch({type:"FILTER_PRODUCTS"})
dispatch({type:"SORTING_Products", payload: allProd})
},[state.sorting_value, state.filter])

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: allProd});
  }, [allProd]);

  return (
    <FilterContext.Provider
      value={{ ...state , setGridView ,sorting ,updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};