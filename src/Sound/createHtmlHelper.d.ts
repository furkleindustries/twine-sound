import { ICreateSoundOptions } from './ICreateSoundOptions';
import { ISound } from './ISound';
export declare const strings: {
    HTML_AUDIO_FAILED: string;
};
export declare function createHtmlHelper(options: ICreateSoundOptions): Promise<ISound>;
