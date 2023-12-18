import axios from "axios";
import { ResponseDto } from "../interfaces";
import { GetPoketNameListResponseDto } from "../interfaces/response";

const DOMAIN = 'http://localhost:4040';

const API_DOMAIN = `${DOMAIN}/api/poketmon`;

// 포켓몬 이름 리스트 불러오기 //
const POKET_NAME_LIST_URL = (section : number | string) => `${API_DOMAIN}/list/${section}`;
export const getPoketNameListRequest = async (section : number|string) => {
  const result = await axios.get(POKET_NAME_LIST_URL(section))
                  .then(response => {
                    const responseBody : GetPoketNameListResponseDto = response.data;
                    return responseBody;
                  })
                  .catch(error => {
                    if(!error.response.data) return null;
                    const responseBody : ResponseDto = error.response.data;
                    return responseBody;
                  })
                  return result;
}