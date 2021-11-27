import { TreeContext } from 'context/TreeState';
import { useContext } from 'react';
import { Tree } from 'types/tree';
import styles from './FolderPreview.module.scss';

interface FolderPreviewProps {
  nodes: Tree[];
}

const FolderPreview = ({ nodes }: FolderPreviewProps) => {
  const { setActiveNode } = useContext(TreeContext);
  const renderNodePreview = (node: Tree) => {
    const { type, name } = node;
    return (
      <li className={styles.item} onClick={() => setActiveNode(node)}>
        {type === 'folder' && <div className={styles.folder} />}
        {type !== 'folder' && (
          <div className={styles.file}>{name.charAt(0)}</div>
        )}
        <div className={styles.name}>{name}</div>
      </li>
    );
  };
  return (
    <ul className={styles.list}>
      {nodes.map((node) => renderNodePreview(node))}
    </ul>
  );
};

export default FolderPreview;