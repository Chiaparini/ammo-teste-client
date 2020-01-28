interface FetchProductsInit {
    type: 'FETCH_PRODUCTS_INIT'
};

interface FetchProductsSuccess {
    payload: any,
    type: 'FETCH_PRODUCTS_SUCCESS'
};

interface FetchProductsFail {
    type: 'FETCH_PRODUCTS_FAIL'
};

interface SetQuery {
    payload: any,
    type: 'SET_QUERY'
};

interface SetPageOrLimit {
    payload: any,
    type: 'SET_PAGE_OR_LIMIT'
};

interface SetTitle {
    payload: string,
    type: 'SET_TITLE'
};

interface ResetParams {
    type: 'RESET_PARAMS'
};


export type Actions = FetchProductsInit | FetchProductsSuccess | FetchProductsFail | SetQuery | SetPageOrLimit | SetTitle | ResetParams;