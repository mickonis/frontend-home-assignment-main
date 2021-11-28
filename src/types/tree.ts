export interface Node {
  id: string;
  type: NodeType;
  name: string;
  children?: Node[];
}

export type NodeType = 'image' | 'doc' | 'folder';
