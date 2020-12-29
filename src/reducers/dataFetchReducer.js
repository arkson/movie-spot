const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isEmpty: true
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isEmpty: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isEmpty: true
            };
        case 'GET_CACHED_DATA':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isEmpty: true,
                data: action.payload,
            };
        default:
          throw new Error();
      }
};

export default dataFetchReducer;