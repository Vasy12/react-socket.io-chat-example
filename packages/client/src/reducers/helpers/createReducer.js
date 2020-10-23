export default function createReducer(handlers, initialState) {
  return (state = initialState, action) => {
    const { type } = action;
    return handlers.hasOwnProperty(type)
      ? handlers[type](state, action)
      : state;
  };
}
