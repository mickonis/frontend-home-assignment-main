import classNames from 'classnames';
import { TreeContext } from 'context/TreeState';
import { ReactNode, useContext } from 'react';
import { Node } from 'types/tree';
import styles from './FolderNode.module.scss';

interface FileNodeProps {
  node: Node;
  children: ReactNode;
}

const FolderNode = ({ node, children }: FileNodeProps) => {
  const { expandedNodeIds, setExpandedNodeIds } = useContext(TreeContext);
  const isOpen = expandedNodeIds.includes(node.id);

  return (
    <div
      className={classNames(styles.folder, { [styles.open]: isOpen })}
      onClick={() => setExpandedNodeIds(node.id)}
    >
      <div className={styles.name}>{node.name}</div>
      {isOpen && <>{children}</>}
    </div>
  );
};

export default FolderNode;
