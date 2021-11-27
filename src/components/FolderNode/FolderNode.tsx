import { useState } from 'react';

interface FileNodeProps {
  name: string;
  children: any;
}

const FolderNode = ({ name, children }: FileNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="folder-node" onClick={() => setIsOpen(!isOpen)}>
      <div>{name}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default FolderNode;
