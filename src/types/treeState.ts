import { Tree } from './tree';

export interface TreeState {
  nodes: Tree[] | null;
  setNodes: (nodes: Tree[]) => void;
}

export interface TreeAction {
  type: TreeActionType;
  payload: Tree[];
}

export type TreeActionType = 'SET_NODES';
