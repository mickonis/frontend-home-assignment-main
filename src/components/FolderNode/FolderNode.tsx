import { useState } from 'react';
import styles from './FolderNode.module.scss';
interface FileNodeProps {
  name: string;
  children: any;
}

const FolderNode = ({ name, children }: FileNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.folder} onClick={() => setIsOpen(!isOpen)}>
      <div>{name}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default FolderNode;
