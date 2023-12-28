import { create } from "zustand";

interface PoketSaveStore {
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
  
  setName: (name:string) => void;
  setType : (type : string) => void;
  setSpecificity : (specificity : string) => void;
  setCharacters : (characters : string) => void;
  setThings : (things: string) => void;
  setIndividualHp : (individualHp : string) => void;
  setIndividualAttack : (individualAttack : string) => void;
  setIndividualDefence : (individualDefence: string) => void;
  setIndividualSpecialAttack : (individualSpecialAttack :string) => void;
  setIndividualSpecialDefence : (individualSpecialDefence : string) => void;
  setIndividualSpeed : (individualSpeed : string) => void;
  setEffortHp : (effortHp : string) => void;
  setEffortAttack : (effortAttack: string) => void;
  setEffortDefence : (effortDefence : string) => void;
  setEffortSpecialAttack : (effortSpecialAttack : string) => void;
  setEffortSpecialDefence : (effortSpecialDefence : string) => void;
  setEffortSpeed : (effortSpeed : string) => void;
  setTechnologyOne : (technologyOne : string) => void;
  setTechnologyTwo : (technologyTwo : string) => void;
  setTechnologyThree : (technologyThree : string) => void;
  setTechnologyFour : (technologyFour :string) => void;

  resetPoket : () => void;
}

const usePoketSaveStore = create<PoketSaveStore>((set) => ({
  name: '', 
  type : '',
  specificity : '',
  characters : '',
  things : '',
  individualHp : '',
  individualAttack : '', 
  individualDefence : '', 
  individualSpecialAttack :'', 
  individualSpecialDefence : '', 
  individualSpeed : '', 
  effortHp : '', 
  effortAttack : '', 
  effortDefence : '', 
  effortSpecialAttack : '', 
  effortSpecialDefence : '', 
  effortSpeed : '', 
  technologyOne : '',
  technologyTwo :'',
  technologyThree : '',
  technologyFour : '',
  
  setName: (name) => set((state) => ({...state, name})), 
  setType : (type) => set((state) => ({...state, type})),
  setSpecificity : (specificity) => set((state) => ({...state, specificity})),
  setCharacters : (characters) => set((state) => ({...state, characters})),
  setThings : (things) => set((state) => ({...state, things})),
  setIndividualHp : (individualHp) => set((state) => ({...state, individualHp})),
  setIndividualAttack : (individualAttack) => set((state) => ({...state, individualAttack})),
  setIndividualDefence : (individualDefence) => set((state) => ({...state, individualDefence})),
  setIndividualSpecialAttack : (individualSpecialAttack) => set((state) => ({...state, individualSpecialAttack})),
  setIndividualSpecialDefence : (individualSpecialDefence) => set((state) => ({...state, individualSpecialDefence})),
  setIndividualSpeed : (individualSpeed) => set((state) => ({...state, individualSpeed})),
  setEffortHp : (effortHp) => set((state) => ({...state, effortHp})),
  setEffortAttack : (effortAttack) => set((state) => ({...state, effortAttack})),
  setEffortDefence : (effortDefence) => set((state) => ({...state, effortDefence})),
  setEffortSpecialAttack : (effortSpecialAttack) => set((state) => ({...state,effortSpecialAttack })),
  setEffortSpecialDefence : (effortSpecialDefence) => set((state) => ({...state, effortSpecialDefence})),
  setEffortSpeed : (effortSpeed) => set((state) => ({...state, effortSpeed})),
  setTechnologyOne : (technologyOne) => set((state) => ({...state, technologyOne})),
  setTechnologyTwo : (technologyTwo) => set((state) => ({...state, technologyTwo})),
  setTechnologyThree : (technologyThree) => set((state) => ({...state, technologyThree})),
  setTechnologyFour : (technologyFour) => set((state) => ({...state, technologyFour})),

  resetPoket : () => set((state) => ({...state, 
    name: '', 
    type : '',
    specificity : '',
    characters : '',
    things : '',
    individualHp : '',
    individualAttack : '', 
    individualDefence : '', 
    individualSpecialAttack :'', 
    individualSpecialDefence : '', 
    individualSpeed : '', 
    effortHp : '', 
    effortAttack : '', 
    effortDefence : '', 
    effortSpecialAttack : '', 
    effortSpecialDefence : '', 
    effortSpeed : '', 
    technologyOne : '',
    technologyTwo :'',
    technologyThree : '',
    technologyFour : ''})),
}));

export default usePoketSaveStore;