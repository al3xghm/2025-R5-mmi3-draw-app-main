import { create } from 'zustand'

type DrawingState = {
  strokeColor: string;
}

type DrawingAction = {
  setStrokeColor: (color: string) => void;
};

export const useDrawingStore = create<DrawingState & DrawingAction>((set) => ({
  strokeColor: '#000000', 
  setStrokeColor: (color) => set({ strokeColor: color }),
}));
