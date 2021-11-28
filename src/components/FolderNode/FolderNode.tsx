import classNames from 'classnames';
import { TreeContext } from 'context/TreeState';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { Node } from 'types/tree';
import styles from './FolderNode.module.scss';

interface FileNodeProps {
  node: Node;
  children: ReactNode;
}

const FolderNode = ({ node, children }: FileNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeNode } = useContext(TreeContext);

  useEffect(() => {
    activeNode?.id === node.id && setIsOpen(true);
  }, [activeNode, node]);

  return (
    <div
      className={classNames(styles.folder, { [styles.open]: isOpen })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.name}>{node.name}</div>
      {isOpen && <>{children}</>}
    </div>
  );
};

export default FolderNode;
