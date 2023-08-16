import { create } from "zustand";

// Create your store, which includes both state and (optionally) actions
export const useStore = create((set) => ({
    tabType:"Colors",
    setTabType:(newTabType) => set(() => ({ tabType: newTabType })),    
}))

