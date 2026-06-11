import { create } from "zustand";

type StepsState = {
  steps: number;
  setSteps: (value: number) => void;
  addStep: () => void;
};

export const useStepsStore = create<StepsState>((set: any) => ({
  steps: 0,

  setSteps: (value: number) => set({ steps: value }),

  addStep: () =>
    set((state: any) => ({
      steps: state.steps + 1,
    })),
}));