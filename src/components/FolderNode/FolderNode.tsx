import classNames from 'classnames';
import { TreeContext } from 'context/TreeState';
import { ReactNode, SyntheticEvent, useContext, useState } from 'react';
import { Tree } from 'types/tree';
import styles from './FolderNode.module.scss';
interface FileNodeProps {
  node: Tree;
  children: ReactNode;
}

const FolderNode = ({ node, children }: FileNodeProps) => {
  const { setActiveNode } = useContext(TreeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { name } = node;

  const handleFolderClick = (event: SyntheticEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    setActiveNode(node);
  };

  return (
    <div
      className={classNames(styles.folder, { [styles.open]: isOpen })}
      onClick={(event) => handleFolderClick(event)}
    >
      <div className={styles.name}>{name}</div>
      {isOpen && <>{children}</>}
    </div>
  );
};

export default FolderNode;
