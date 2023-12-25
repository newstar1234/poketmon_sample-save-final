import ResponseDto from "../response.dto";

export default interface GetPoketNameResponseDto extends ResponseDto {
  poketmonNumber : string | number;
  name : string;
}