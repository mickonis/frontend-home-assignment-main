import { Node } from './tree';

export interface TreeState {
  nodes: Node[] | null;
  activeNode: Node | null;
  expandedNodeIds: string[];
  setNodes: (nodes: Node[]) => void;
  setActiveNode: (node: Node) => void;
  setExpandedNodeIds: (id: string) => void;
}

export interface TreeAction {
  type: TreeActionType;
  payload: Node[] | Node | string | null;
}

export type TreeActionType =
  | 'SET_NODES'
  | 'SET_ACTIVE_NODE'
  | 'SET_EXPANDED_NODE_IDS';
