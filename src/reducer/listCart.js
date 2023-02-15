const initState = [];

export const listCart = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (checkExist(state, action.payload.product.id)) {
        state.forEach((element) => {
          if (element.product.id === action.payload.product.id) {
            element.quantity += 1;
          }
        });
      } else {
        state.push(action.payload);
      }
      return [...state];
    default:
      return state;
  }
};

const checkExist = (arr, idCheck) => {
  let check = false;
  arr.forEach((element) => {
    if (element.product.id === idCheck) check = true;
  });
  return check;
};
