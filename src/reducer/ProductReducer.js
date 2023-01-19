
const ProductReducer =( state ,action)=>{
   switch(action.type){
    case "SET_LOADING":
    return{
        ...state,
        isLoading :true,
    }
    case "SET_API_DATA":
    const featureData = action.payload.filter((curElem) => {
      return curElem.featured === true;
    });
console.log(featureData)
    return {
      ...state,
      isLoading: false,
      product: action.payload,
      featureProduct: featureData,
    };
        
        case "API_error":
        return{
            isLoading: false,
            isError:true
        }


    default:
       return state;
   };



}

export default ProductReducer;