import {create} from "zustand"


interface RentModalVariables {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }

const useRentModal=create<RentModalVariables>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:true})


}))

export default useRentModal