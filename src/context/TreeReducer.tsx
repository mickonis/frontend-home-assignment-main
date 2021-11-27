import { TreeAction, TreeState } from 'types/treeState';

export const TreeReducer = (
  state: TreeState,
  action: TreeAction
): TreeState => {
  switch (action.type) {
    case 'SET_NODES':
      return {
        ...state,
        nodes: action.payload,
      };

    default:
      return state;
  }
};
