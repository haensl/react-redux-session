import actions from './actions';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.addItem:
      return {
        items: [
          ...state.items,
          action.value
        ]
      };
    default:
      return state;
  }
};
