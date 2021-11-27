export interface Tree {
  id: 'string';
  type: 'image' | 'doc' | 'folder';
  name: 'string';
  children?: Tree[];
}
