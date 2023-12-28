export const MAIN_PATH = () =>  '/';
export const SAVE_PATH = () => 'save';
export const UPDATE_PATH = (poketmonNumber: number| string) => `/update/${poketmonNumber}`;
export const RESULT_PATH = (poketmonNumber : number | string) => `result/${poketmonNumber}`;
export const SEARCH_PATH = (name : string) => `search/${name}`;



export const MAIN_POKET_NAME_LIST = 10;
export const MAIN_POKET_NAME_LIST_SECTION = 10;

export const COUNT_BY_MAIN_POKET_NAME_LIST_SECTION = MAIN_POKET_NAME_LIST * MAIN_POKET_NAME_LIST_SECTION;
