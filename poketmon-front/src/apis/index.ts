import axios from "axios";
import { ResponseDto } from "../interfaces";
import { GetPoketNameListResponseDto } from "../interfaces/response";

const API_DOMAIN = 'http://localhost:4040/api/poketmon';

// 포켓몬 이름 리스트 불러오기 //
const POKET_NAME_LIST_URL = () => `${API_DOMAIN}/name-list}`;
export const getPoketNameListRequest = async () => {
  const result = await axios.get(POKET_NAME_LIST_URL())
                .then((response) => {
                  const responseBody: GetPoketNameListResponseDto = response.data;
                  return responseBody;
                })
                .catch((error) => {
                  const responseBody: ResponseDto = error.response.data;
                  return responseBody;
                });
                return result;
}