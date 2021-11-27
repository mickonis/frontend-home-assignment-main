import { Tree } from './tree';

export interface TreeState {
  nodes: Tree[] | null;
  activeNode: Tree | null;
  setNodes: (nodes: Tree[]) => void;
  setActiveNode: (node: Tree) => void;
}

export interface TreeAction {
  type: TreeActionType;
  payload: Tree[] | Tree | null;
}

export type TreeActionType = 'SET_NODES' | 'SET_ACTIVE_NODE';
