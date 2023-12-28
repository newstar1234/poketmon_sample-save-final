import axios from "axios";
import { ResponseDto } from "../interfaces";
import { DeletePoketResponseDto, GetPoketListResponseDto, GetPoketResponseDto, GetSearchPoketListResponseDto, PatchPoketResponseDto, PostPoketResponseDto } from "../interfaces/response";
import PostPoketRequestDto from "../interfaces/request/post-poket.request.dto";
import PatchPoketRequestDto from "../interfaces/request/patch-poket.request.dto";

const API_DOMAIN = 'http://localhost:4040/api/poketmon';

// 포켓몬 리스트 불러오기 //
const GET_POKET_LIST_URL = (section: number|string) => `${API_DOMAIN}/list/${section}`;
export const getPoketListRequest = async (section: number|string) => {
  const result = await axios.get(GET_POKET_LIST_URL(section))
              .then((response) => {
                const responseBody : GetPoketListResponseDto = response.data;
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

// 수정
const PATCH_POKET_URL = (poketmonNumber: number|string) => `${API_DOMAIN}/${poketmonNumber}`;
export const patchPoketRequest = async (poketmonNumber: number|string, requestBody:PatchPoketRequestDto) => {
  const result = await axios.patch(PATCH_POKET_URL(poketmonNumber), requestBody)
                .then(response => {
                  const responseBody: PatchPoketResponseDto = response.data;
                  return responseBody;
                })
                .catch((error) => {
                  if(!error.response.data) return null;
                  const responseBody : ResponseDto = error.response.data;
                  return responseBody;
                })
                return result;
}

// 삭제 
const DELETE_POKET_URL = (poketmonNumber: number|string) => `${API_DOMAIN}/${poketmonNumber}`;
export const deletePoketRequest = async (poketmonNumber: number|string) => {
  const result = await axios.delete(DELETE_POKET_URL(poketmonNumber))
              .then(response => {
                const responseBody: DeletePoketResponseDto = response.data;
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

// 검색 리스트 불러오기 
const GET_SEARCH_POKET_LIST_URL = (name: string) => `${API_DOMAIN}/search/${name}`;
export const getSearchPoketListRequest = async (name : string) => {
  const result = await axios.get(GET_SEARCH_POKET_LIST_URL(name))
            .then(response => {
              const responseBody: GetSearchPoketListResponseDto = response.data;
              return responseBody;
            })
            .catch(error => {
              if(!error.response.data) return null;
              const responseBody : ResponseDto = error.response.data;
              return responseBody;
            })
            return result;
}
