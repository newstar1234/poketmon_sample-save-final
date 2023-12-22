import { MAIN_POKET_NAME_LIST } from "../constants";

export const getPagination = (roomCount : number, currentSection : number, countByPage : number) => {
  const section = Math.ceil(roomCount / (MAIN_POKET_NAME_LIST * countByPage));
  const totalPageCount = Math.ceil(roomCount / countByPage);

  const maxPage = totalPageCount >= currentSection * MAIN_POKET_NAME_LIST ?
      currentSection * MAIN_POKET_NAME_LIST : totalPageCount;
  const minPage = 5 * (currentSection - 1) + 1;

  return {section, totalPageCount, maxPage, minPage};
}