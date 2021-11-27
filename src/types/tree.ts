export interface Tree {
  id: 'string';
  type: NodeType;
  name: 'string';
  children?: Tree[];
}

export type NodeType = 'image' | 'doc' | 'folder';
