export const actions = {
  addItem: 'ADD:ITEM'
};

export const addItem = (item) => ({
  type: actions.addItem,
  value: item
});

export default {
  addItem
};
