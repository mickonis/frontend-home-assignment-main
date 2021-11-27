import styles from './FileNode.module.scss';

interface FileNodeProps {
  name: string;
}

const FileNode = ({ name }: FileNodeProps) => (
  <div className={styles.name}>{name}</div>
);

export default FileNode;
