export interface IDefaultState {
  selectedItems: {
    items: any[];
    restaurantName: string;
  };
}

let defaultState: IDefaultState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

let cartReducer = (state: IDefaultState = defaultState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState: IDefaultState = {...state};

      if (action.payload.checkboxValue) {
        console.log('ADD_TO_CART');
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restrauntName,
        };
      } else {
        console.log('REMOVE FROM CART');
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item: any) => item.title !== action.payload.title,
            ),
          ],
          restaurantName: action.payload.restrauntName,
        };
      }
      console.log(newState, 'state-updated');
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
