import { render } from '@testing-library/react';
import { Node } from 'types/tree';
import FolderPreview from './FolderPreview';

const mockFolder: Node = { id: 'string', name: 'filename', type: 'folder' };
const mockFile: Node = { id: 'string', name: 'filename', type: 'doc' };

describe('FolderPreview component', () => {
  it('renders folder icon', () => {
    const { queryByTestId } = render(<FolderPreview nodes={[mockFolder]} />);
    expect(queryByTestId('folder-icon')).toBeTruthy();
  });

  it("doesn't render folder icon when empty nodes", () => {
    const { queryByTestId } = render(<FolderPreview nodes={[]} />);
    expect(queryByTestId('folder-icon')).toBeFalsy();
  });

  it("doesn't render folder icon when using file node", () => {
    const { queryByTestId } = render(<FolderPreview nodes={[mockFile]} />);
    expect(queryByTestId('folder-icon')).toBeFalsy();
  });

  it('renders file icon', () => {
    const { queryByTestId } = render(<FolderPreview nodes={[mockFile]} />);
    expect(queryByTestId('file-icon')).toBeTruthy();
  });

  it("doesn't render file icon when empty nodes", () => {
    const { queryByTestId } = render(<FolderPreview nodes={[]} />);
    expect(queryByTestId('file-icon')).toBeFalsy();
  });

  it("doesn't render file icon  when using folder node", () => {
    const { queryByTestId } = render(<FolderPreview nodes={[]} />);
    expect(queryByTestId('file-icon')).toBeFalsy();
  });
});

export {};
