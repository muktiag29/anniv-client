const initialState = {
  name: "",
  email: "",
  imageUrl: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER/DATA":
      return { ...state, name: action.payload.name, email: action.payload.email, imageUrl: action.payload.imageUrl}
    default:
      return state
  }
}

export default reducer