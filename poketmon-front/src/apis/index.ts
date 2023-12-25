import axios from "axios";
import { ResponseDto } from "../interfaces";
import { GetPoketNameListResponseDto, GetPoketResponseDto, PostPoketResponseDto } from "../interfaces/response";
import PostPoketRequestDto from "../interfaces/request/post-poket.request.dto";

const API_DOMAIN = 'http://localhost:4040/api/poketmon';

// 포켓몬 이름 리스트 불러오기 //
const GET_POKET_NAME_LIST_URL = () => `${API_DOMAIN}/name-list`;
export const getPoketNameListRequest = async () => {
  const result = await axios.get(GET_POKET_NAME_LIST_URL())
              .then((response) => {
                const responseBody : GetPoketNameListResponseDto = response.data;
                return responseBody;
              })
              .catch((error) => {
                if(!error.response.data) return null;
                const responseBody : ResponseDto = error.response.data;
                return responseBody;
              })
              return result;
}

// 개체값 저장하기 //
const POST_POKET_URL = () => `${API_DOMAIN}/save`;
export const postPoketRequest = async (requestBody : PostPoketRequestDto) => {
  const result = await axios.post(POST_POKET_URL(), requestBody)
                .then((response) => {
                const responseBody : PostPoketResponseDto = response.data;
                return responseBody;
                })
                .catch((error) => {
                  if(!error.response.data) return null;
                  const responseBody : ResponseDto = error.response.data;
                  return responseBody;
                })
                return result;
} 

// 포켓몬 저장내용 불러오기 //
const GET_POKET_URL = (poketmonNumber : number | string) => `${API_DOMAIN}/${poketmonNumber}`;
export const getPoketRequest = async (poketmonNumber : number | string) => {
  const result = await axios.get(GET_POKET_URL(poketmonNumber))
              .then(response => {
                const responseBody : GetPoketResponseDto = response.data;
                return responseBody;
              })
              .catch(error => {
                if(!error.response.data) return null;
                const responseBody : ResponseDto = error.response.data;
                return responseBody;
              })
              return result;
}
