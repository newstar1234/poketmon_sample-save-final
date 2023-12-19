import ResponseDto from "../response.dto";
import PoketNameListResponseDto from "./poket-name-list.response.dto";

export default interface GetPoketNameListResponseDto extends ResponseDto {

  nameList : PoketNameListResponseDto[];

}