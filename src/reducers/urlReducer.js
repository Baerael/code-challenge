const initialState = {
    shortUrl: null,
    loading: false,
    error: null,
  };
  
  const urlReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHORTEN_URL_REQUEST':
        return { ...state, loading: true };
      case 'SHORTEN_URL_SUCCESS':
        return { ...state, loading: false, shortUrl: action.payload };
      case 'SHORTEN_URL_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default urlReducer;
  