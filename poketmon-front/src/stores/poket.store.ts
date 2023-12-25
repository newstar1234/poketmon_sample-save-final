import { create } from "zustand";

interface Poket {
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
  effortHp :  string;
  effortAttack : string;
  effortDefence : string;
  effortSpecialAttack : string;
  effortSpecialDefence :string;
  effortSpeed : string;
  technologyOne : string;
  technologyTwo : string;
  technologyThree : string;
  technologyFour : string;
}

interface poketStore {
  poket : Poket | null;
  setPoket : (poket: Poket | null) => void;
}

const usePoketStore = create<poketStore>((set) => ({
  poket : null,
  setPoket : (poket) => set((state) => ({...state, poket}))
}));

export default usePoketStore;