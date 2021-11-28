import { render } from '@testing-library/react';
import { TreeContext } from 'context/TreeState';
import { Node } from 'types/tree';
import { TreeState } from 'types/treeState';
import Preview from './Preview';

const mockFolder: Node = { id: '123', name: 'folder name', type: 'folder' };
const mockFile: Node = { id: '123', name: 'file name', type: 'doc' };

const treeState: TreeState = {
  nodes: null,
  activeNode: null,
  setNodes: () => {},
  setActiveNode: () => {},
};

describe('Preview component', () => {
  it('renders file preview', () => {
    const { queryByTestId } = render(
      <TreeContext.Provider
        value={{
          ...treeState,
          nodes: [mockFile],
          activeNode: mockFile,
        }}
      >
        <Preview />
      </TreeContext.Provider>
    );
    expect(queryByTestId('file-preview')).toBeTruthy();
  });

  it("doesn't render file preview", () => {
    const { queryByTestId } = render(
      <TreeContext.Provider
        value={{
          ...treeState,
          nodes: [mockFolder],
          activeNode: mockFolder,
        }}
      >
        <Preview />
      </TreeContext.Provider>
    );
    expect(queryByTestId('file-preview')).toBeFalsy();
  });

  it('renders folder preview', () => {
    const { queryByTestId } = render(
      <TreeContext.Provider
        value={{
          ...treeState,
          nodes: [mockFolder],
          activeNode: mockFolder,
        }}
      >
        <Preview />
      </TreeContext.Provider>
    );
    expect(queryByTestId('folder-preview')).toBeTruthy();
  });

  it("doesn't render folder preview", () => {
    const { queryByTestId } = render(
      <TreeContext.Provider
        value={{
          ...treeState,
          nodes: [mockFile],
          activeNode: mockFile,
        }}
      >
        <Preview />
      </TreeContext.Provider>
    );
    expect(queryByTestId('folder-preview')).toBeFalsy();
  });
});

export {};
