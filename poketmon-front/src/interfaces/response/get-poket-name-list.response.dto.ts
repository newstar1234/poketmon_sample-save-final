import ResponseDto from "../response.dto";

export default interface PoketNameListResponseDto {
  poketmonNumber : string | number;
  name : string;
}

export default interface GetPoketNameListResponseDto extends ResponseDto {

  poketNameList : PoketNameListResponseDto[];

}