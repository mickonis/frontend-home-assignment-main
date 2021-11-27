import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { Tree } from 'types/tree';
import styles from './FolderNode.module.scss';
interface FileNodeProps {
  node: Tree;
  children: ReactNode;
}

const FolderNode = ({ node, children }: FileNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
