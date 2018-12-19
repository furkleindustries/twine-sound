import {
  ISoundManager,
} from '../SoundManager/ISoundManager';

export interface ISoundOptions {
  manager: ISoundManager;
  getManagerVolume(): number;
  audioElement?: HTMLAudioElement;
  autoplay?: boolean;
  buffer?: AudioBuffer;
  context?: AudioContext;
  loop?: boolean;
  trackPosition?: number;
  volume?: number;
}
