import { NodeType } from 'types/tree';
import styles from './FilePreview.module.scss';

interface FilePreviewProps {
  name: string;
  type: NodeType;
}

const FilePreview = ({ name, type }: FilePreviewProps) => (
  <div className={styles.wrap}>
    <h2 className={styles.title}>Preview</h2>
    <p className={styles.text}>name: {name}</p>
    <p className={styles.text}>type: {type}</p>
  </div>
);

export default FilePreview;
