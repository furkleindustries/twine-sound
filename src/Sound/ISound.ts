import {
  IPanelRegisterableNode,
} from '../interfaces/IPanelRegisterableNode';
import {
  IWebAudioNode,
} from '../interfaces/IWebAudioNode';

export interface ISound extends IWebAudioNode, IPanelRegisterableNode {
  getTrackPosition(): number;
  getPlaying(): boolean;
  getLoop(): boolean;
  setLoop(doLoop: boolean): ISound;
  getSourceNode(): AudioBufferSourceNode;
  getContextCurrentTime(): number;
  setTrackPosition(seconds: number): ISound;
  getManagerVolume(): number;
  getGroupVolume(): number;
  updateAudioElementVolume(): ISound;
  play(): Promise<Event>;
  pause(): ISound;
  stop(): ISound;
  rewind(seconds: number): ISound;
  fastForward(seconds: number): ISound;
}
