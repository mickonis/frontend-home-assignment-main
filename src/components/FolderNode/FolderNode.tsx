import classNames from 'classnames';
import { useState } from 'react';
import styles from './FolderNode.module.scss';
interface FileNodeProps {
  name: string;
  children: any;
}

const FolderNode = ({ name, children }: FileNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles.folder, { [styles.open]: isOpen })}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
    >
      <div className={styles.name}>{name}</div>
      {isOpen && <>{children}</>}
    </div>
  );
};

export default FolderNode;
