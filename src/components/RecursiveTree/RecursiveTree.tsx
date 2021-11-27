import FileNode from 'components/FileNode/FileNode';
import FolderNode from 'components/FolderNode/FolderNode';
import { Tree } from 'types/tree';
import styles from './RecursiveTree.module.scss';

interface RecursiveTreeProps {
  nodes: Tree[];
}

const RecursiveTree = ({ nodes }: RecursiveTreeProps) => {
  const renderNode = (node: Tree) => {
    const { type, name } = node;
    return (
      <>
        {type !== 'folder' && <FileNode name={name} />}
        {type === 'folder' && (
          <FolderNode node={node}>
            <RecursiveTree nodes={node.children ?? []} />
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
