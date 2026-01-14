import { create } from 'zustand'

type DrawingState = {
  strokeColor: string;
  strokeWidth: number;
}

type DrawingAction = {
  setStrokeColor: (color: string) => void;
  setStrokeWidth: (width: number) => void;
};

export const useDrawingStore = create<DrawingState & DrawingAction>((set) => ({
  strokeColor: '#000000', 
  strokeWidth: 4, 
  setStrokeColor: (color) => set({ strokeColor: color }),
  setStrokeWidth: (width) => set({ strokeWidth: width }),
}));
