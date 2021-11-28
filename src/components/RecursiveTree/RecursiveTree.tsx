import FileNode from 'components/FileNode/FileNode';
import FolderNode from 'components/FolderNode/FolderNode';
import { TreeContext } from 'context/TreeState';
import { isFolder, sortNodes } from 'helpers/tree';
import { useContext } from 'react';
import { Node } from 'types/tree';
import styles from './RecursiveTree.module.scss';

interface RecursiveTreeProps {
  nodes?: Node[];
}

const RecursiveTree = ({ nodes }: RecursiveTreeProps) => {
  const { setActiveNode } = useContext(TreeContext);

  const renderNode = (node: Node) => {
    const { type, name, children } = node;

    return (
      <div
        onClick={(event) => {
          event.stopPropagation();
          setActiveNode(node);
        }}
      >
        {isFolder(type) ? (
          <FolderNode node={node}>
            <RecursiveTree nodes={children} />
          </FolderNode>
        ) : (
          <FileNode name={name} />
        )}
      </div>
    );
  };

  return (
    <div className={styles.node}>
      {nodes?.sort(sortNodes).map((node) => renderNode(node))}
    </div>
  );
};

export default RecursiveTree;
