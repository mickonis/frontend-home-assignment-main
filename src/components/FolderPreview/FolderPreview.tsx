import { Tree } from 'types/tree';
import styles from './FolderPreview.module.scss';

interface FolderPreviewProps {
  nodes: Tree[];
}

const FolderPreview = ({ nodes }: FolderPreviewProps) => {
  const renderNodePreview = ({ name, type }: Tree) => {
    return (
      <li className={styles.item}>
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
