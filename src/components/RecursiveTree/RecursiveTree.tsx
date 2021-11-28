import FileNode from 'components/FileNode/FileNode';
import FolderNode from 'components/FolderNode/FolderNode';
import { TreeContext } from 'context/TreeState';
import { useContext } from 'react';
import { Node } from 'types/tree';
import styles from './RecursiveTree.module.scss';

interface RecursiveTreeProps {
  nodes: Node[];
}

const RecursiveTree = ({ nodes }: RecursiveTreeProps) => {
  const { setActiveNode } = useContext(TreeContext);
  const renderNode = (node: Node) => {
    const { type, name } = node;

    return (
      <div
        onClick={(event) => {
          event.stopPropagation();
          setActiveNode(node);
        }}
      >
        {type !== 'folder' && <FileNode name={name} />}
        {type === 'folder' && (
          <FolderNode node={node}>
            <RecursiveTree nodes={node.children ?? []} />
          </FolderNode>
        )}
      </div>
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
