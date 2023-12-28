import ResponseDto from "../response.dto";
import PoketListResponseDto from "./poket-list.response.dto";

export default interface GetSearchPoketListResponseDto extends ResponseDto {

  list: PoketListResponseDto[];

}