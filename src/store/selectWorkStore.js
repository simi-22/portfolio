import { create } from "zustand";

export const useSelectedWorkStore = create((set) => ({
  selectedWork: "React", // 초기 선택
  setSelectedWork: (work) => set({ selectedWork: work }), //선택한 작업
}));
