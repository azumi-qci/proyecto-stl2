import { FC } from 'react';
import Tree from 'react-d3-tree';

import { TreeNode } from '../compiler/interfaces/treeNode';

interface TreeViewProps {
  data?: TreeNode;
  onDismiss(): void;
}

const TreeView: FC<TreeViewProps> = ({ data, onDismiss }) => {
  return (
    <div
      className='flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 backdrop-blur backdrop-brightness-50'
      onClick={() => onDismiss()}
    >
      <div
        className='m-4 p-3 bg-white rounded'
        style={{ width: '40em', height: '40em' }}
      >
        <Tree data={data} orientation='vertical' />
      </div>
    </div>
  );
};

export default TreeView;
