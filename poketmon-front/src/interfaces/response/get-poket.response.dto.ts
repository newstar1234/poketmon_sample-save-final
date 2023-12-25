import ResponseDto from "../response.dto";

export default interface GetPoketResponseDto extends ResponseDto {
  poketmonNumber : string | number;
  name: string;  
  type : string;
  specificity : string;
  characters : string;
  things : string;
  individualHp : string;
  individualAttack : string;
  individualDefence : string;
  individualSpecialAttack : string;
  individualSpecialDefence : string;
  individualSpeed : string;
  effortHp : string;
  effortAttack : string;
  effortDefence : string;
  effortSpecialAttack : string;
  effortSpecialDefence : string;
  effortSpeed : string;
  technologyOne : string;
  technologyTwo : string;
  technologyThree : string;
  technologyFour : string;

}