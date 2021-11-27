import { Context, createContext, ReactNode, useReducer } from 'react';
import { Tree } from 'types/tree';
import { TreeState } from 'types/treeState';
import { TreeReducer } from './TreeReducer';

const initialState: TreeState = {
  nodes: null,
  setNodes: () => {},
};

export const TreeContext: Context<TreeState> = createContext(initialState);

export const TreeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(TreeReducer, initialState);

  const setNodes = (nodes: Tree[]) => {
    dispatch({
      type: 'SET_NODES',
      payload: nodes,
    });
  };

  return (
    <TreeContext.Provider
      value={{
        nodes: state.nodes,
        setNodes,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
};
