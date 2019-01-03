import {
  assertValid,
} from '../assertions/assertValid';
import {
  assertNodeIsWebAudio,
} from '../assertions/assertNodeIsWebAudio';
import {
  IAnalysableNode,
} from './IAnalysableNode';
import {
  IConstructor,
} from '../interfaces/IConstructor';

export function AnalysableNodeMixin<T extends IConstructor>(Base: T) {
  return class extends Base implements IAnalysableNode {
    public __analyserNode: AnalyserNode | null = null;

    constructor(...options: any[]) {
      super(...options);
      
      const [
        { context },
      ]: [
        { context?: AudioContext }
      ] = options as [ any ];

      if (context) {
        this.__analyserNode = context.createAnalyser();
      }
    }

    getAnalyserNode() {
      assertNodeIsWebAudio(this as any, 'getAnalyserNode');
      return assertValid<AnalyserNode>(this.__analyserNode);
    }

    getOutputNode() {
      return this.getAnalyserNode();
    }
  };
}