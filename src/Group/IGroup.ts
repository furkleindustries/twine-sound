import {
  IAnalysableNode,
} from '../Node/IAnalysableNode';
import {
  IBaseNode,
} from '../Node/IBaseNode';
import {
  IPanelRegisterableNode,
} from '../Node/IPanelRegisterableNode';
import {
  ISound,
} from '../Sound/ISound';
import {
  ISoundsMap,
} from './ISoundsMap';
import {
  ITaggableNode,
} from '../Node/ITaggableNode';
import {
  NodeTypes,
} from '../enums/NodeTypes';
import { IManagerStateCallback } from '../interfaces/IManagerStateCallback';

export interface IGroup
  extends
    IBaseNode,
    IAnalysableNode,
    IPanelRegisterableNode,
    ITaggableNode
{
  readonly type: NodeTypes.Group;
  readonly sounds: ISoundsMap;
  deregisterIntentToAddSound(name: string): void;
  getContextCurrentTime(): number;
  hasIntentToAddSound(name: string, groupName?: string): boolean;
  hasSound(name: string): boolean;
  getSound(name: string): ISound;
  hasSounds(names: string[]): boolean;
  getSounds(names: string[]): ISound[];
  getAllSounds(): ISound[];
  getSoundsByTag(tag: string): ISound[];
  getSoundsByTags(tags: string[], matchOneOrAll: 'one' | 'all'): ISound[];
  addSound(name: string, sound: ISound): this;
  addSounds(sounds: ISoundsMap): this;
  removeSound(names: string): this;
  removeSounds(names: string[]): this;
  removeAllSounds(): this;
  playSound(name: string): Promise<void>;
  playSounds(names: string[]): Promise<void[]>;
  playAllSounds(): Promise<void[]>;
  pauseSound(name: string): this;
  pauseSounds(names: string[]): this;
  pauseAllSounds(): this;
  registerIntentToAddSound(name: string): this;
  stopSound(name: string): this;
  stopSounds(names: string[]): this;
  stopAllSounds(): this;
  updateAllAudioElementsVolume(): this;
  registerStateCallback(callback: IManagerStateCallback): void;
  unregisterStateCallback(callback: IManagerStateCallback): void;
  callStateCallbacks(): void;
}
