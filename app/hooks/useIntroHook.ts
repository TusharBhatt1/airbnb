//Creating a store (Zustand)
import { create } from 'zustand';

interface IntroModalStore {
  isOpen: boolean;
  onClose: () => void;
}

const useIntroModal = create<IntroModalStore>((set) => ({
  isOpen: true,
  onClose: () => set({ isOpen: false })
}));


export default useIntroModal;