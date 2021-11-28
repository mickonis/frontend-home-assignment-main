import { toggleArrayElement } from 'helpers/tree';
import { Node } from 'types/tree';
import { TreeAction, TreeState } from 'types/treeState';

export const TreeReducer = (
  state: TreeState,
  action: TreeAction
): TreeState => {
  switch (action.type) {
    case 'SET_NODES':
      return {
        ...state,
        nodes: action.payload as Node[],
      };

    case 'SET_ACTIVE_NODE':
      return {
        ...state,
        activeNode: action.payload as Node | null,
      };

    case 'SET_EXPANDED_NODE_IDS':
      return {
        ...state,
        expandedNodeIds: toggleArrayElement(
          state.expandedNodeIds,
          action.payload as string
        ),
      };

    default:
      return state;
  }
};
