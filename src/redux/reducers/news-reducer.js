export const initialState = {
  news: [],
};

export const news = (state = initialState, action) => {
  switch (action.type) {
    case 'news/INDEX_LOAD_SUCCESS':
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
}

export default news;
