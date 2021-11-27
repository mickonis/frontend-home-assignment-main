import FileNode from 'components/FileNode/FileNode';
import FolderNode from 'components/FolderNode/FolderNode';
import { Tree } from 'types/tree';

interface RecursiveTreeProps {
  data: Tree[];
}

const RecursiveTree = ({ data }: RecursiveTreeProps) => {
  const renderNode = (item: Tree) => {
    return (
      <>
        {item.type !== 'folder' && <FileNode name={item.name} />}
        {item.type === 'folder' && item.children && (
          <FolderNode name={item.name}>
            <RecursiveTree data={item.children} />
          </FolderNode>
        )}
      </>
    );
  };

  return <div className="node">{data?.map((item) => renderNode(item))}</div>;
};

export default RecursiveTree;
