const initialState =[
  
]
const productData = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Product":
      console.warn("Add_Products");
      state.push(action.payload)
      return state
      //return [...state, action.payload]
      

    default:
      return state;
  }
};
export default productData;
