import { Tree } from 'types/tree';
import { TreeAction, TreeState } from 'types/treeState';

export const TreeReducer = (
  state: TreeState,
  action: TreeAction
): TreeState => {
  switch (action.type) {
    case 'SET_NODES':
      return {
        ...state,
        nodes: action.payload as Tree[],
      };

    case 'SET_ACTIVE_NODE':
      return {
        ...state,
        activeNode: action.payload as Tree | null,
      };

    default:
      return state;
  }
};
