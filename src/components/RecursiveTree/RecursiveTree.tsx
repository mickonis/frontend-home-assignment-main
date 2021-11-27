import FileNode from 'components/FileNode/FileNode';
import FolderNode from 'components/FolderNode/FolderNode';
import { Tree } from 'types/tree';
import styles from './RecursiveTree.module.scss';

interface RecursiveTreeProps {
  nodes: Tree[];
}

const RecursiveTree = ({ nodes }: RecursiveTreeProps) => {
  const renderNode = ({ type, name, children }: Tree) => {
    return (
      <>
        {type !== 'folder' && <FileNode name={name} />}
        {type === 'folder' && (
          <FolderNode name={name}>
            <RecursiveTree nodes={children ?? []} />
          </FolderNode>
        )}
      </>
    );
  };

  const sortedNodes = nodes?.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.node}>
      {sortedNodes.map((node) => renderNode(node))}
    </div>
  );
};

export default RecursiveTree;
