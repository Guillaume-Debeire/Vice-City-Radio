import { createContext } from "react";

export interface IRadio {
  title: string;
  path: string;
  sound: HTMLAudioElement;
}

export interface IAppContext {
  radioSelected: IRadio;
  setRadioSelected: React.Dispatch<React.SetStateAction<IRadio>>;
  volume: number | number[];
  setVolume: React.Dispatch<React.SetStateAction<number | number[]>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  hiddenUI: boolean | undefined;
  setHiddenUI: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  stream: MediaStream | null;
  setStream: React.Dispatch<React.SetStateAction<MediaStream | null>>;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
