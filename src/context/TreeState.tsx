import { Context, createContext, ReactNode, useReducer } from 'react';
import { Node } from 'types/tree';
import { TreeState } from 'types/treeState';
import { TreeReducer } from './TreeReducer';

const initialState: TreeState = {
  nodes: null,
  activeNode: null,
  expandedNodeIds: [],
  setNodes: () => {},
  setActiveNode: () => {},
  setExpandedNodeIds: () => {},
};

export const TreeContext: Context<TreeState> = createContext(initialState);

export const TreeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(TreeReducer, initialState);

  const setNodes = (nodes: Node[]) => {
    dispatch({
      type: 'SET_NODES',
      payload: nodes,
    });
  };

  const setActiveNode = (node: Node | null) => {
    dispatch({
      type: 'SET_ACTIVE_NODE',
      payload: node,
    });
  };

  const setExpandedNodeIds = (id: string) => {
    dispatch({
      type: 'SET_EXPANDED_NODE_IDS',
      payload: id,
    });
  };

  return (
    <TreeContext.Provider
      value={{
        nodes: state.nodes,
        activeNode: state.activeNode,
        expandedNodeIds: state.expandedNodeIds,
        setNodes,
        setActiveNode,
        setExpandedNodeIds,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
};
