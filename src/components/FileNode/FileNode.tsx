import classNames from 'classnames';
import { TreeContext } from 'context/TreeState';
import { useContext } from 'react';
import styles from './FileNode.module.scss';

interface FileNodeProps {
  name: string;
  id: string;
}

const FileNode = ({ name, id }: FileNodeProps) => {
  const { activeNode } = useContext(TreeContext);

  return (
    <div
      className={classNames(styles.file, {
        [styles.active]: activeNode?.id === id,
      })}
    >
      {name}
    </div>
  );
};

export default FileNode;
