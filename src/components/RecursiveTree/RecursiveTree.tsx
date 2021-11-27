import FileNode from 'components/FileNode/FileNode';
import FolderNode from 'components/FolderNode/FolderNode';
import { Tree } from 'types/tree';
import styles from './RecursiveTree.module.scss';

interface RecursiveTreeProps {
  nodes: Tree[];
}

const RecursiveTree = ({ nodes }: RecursiveTreeProps) => {
  const renderNode = (item: Tree) => {
    return (
      <>
        {item.type !== 'folder' && <FileNode name={item.name} />}
        {item.type === 'folder' && item.children && (
          <FolderNode name={item.name}>
            <RecursiveTree nodes={item.children} />
          </FolderNode>
        )}
      </>
    );
  };

  return (
    <div className={styles.node}>{nodes?.map((node) => renderNode(node))}</div>
  );
};

export default RecursiveTree;
