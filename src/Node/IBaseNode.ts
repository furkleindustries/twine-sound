import {
  ISoundLabel,
} from './ISoundLabel';
import {
  NodeTypes,
} from '../enums/NodeTypes';

export interface IBaseNode {
  readonly type: NodeTypes;
  isWebAudio(): boolean;
  getAudioContext(): AudioContext;
  getContextCurrentTime(): number;
  getGainNode(): GainNode;
  getInputNode(): AudioNode;
  getLabel(): ISoundLabel;
  setLabel(label: Partial<ISoundLabel>): IBaseNode;
  getVolume(): number;
  setVolume(value: number): IBaseNode;
  addVolumeChangeCallback(name: string, cb: (name: string, volume: number) => void): IBaseNode;
  removeVolumeChangeCallback(name: string): IBaseNode;
  callVolumeChangeCallbacks(): void;
}
