import ResponseDto from "../response.dto";
import PoketListResponseDto from "./poket-list.response.dto";
import PoketNameListResponseDto from "./poket-name-list.response";

export default interface GetPoketNameListResponseDto extends ResponseDto {

  list : PoketNameListResponseDto[];

}