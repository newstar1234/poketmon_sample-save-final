import ResponseDto from "../response.dto";
import PoketListResponseDto from "./poket-list.response.dto";

export default interface GetPoketListResponseDto extends ResponseDto {
  poketList : PoketListResponseDto[];
}