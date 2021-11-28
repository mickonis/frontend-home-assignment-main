import { Node } from './tree';

export interface TreeState {
  nodes: Node[] | null;
  activeNode: Node | null;
  setNodes: (nodes: Node[]) => void;
  setActiveNode: (node: Node) => void;
}

export interface TreeAction {
  type: TreeActionType;
  payload: Node[] | Node | null;
}

export type TreeActionType = 'SET_NODES' | 'SET_ACTIVE_NODE';
