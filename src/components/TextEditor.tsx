import { FC, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const TextEditor: FC = () => {
  const [code, setCode] = useState('');

  return (
    <div>
      <CodeEditor
        language="cpp"
        onChange={(e) => setCode(e.target.value)}
        padding={15}
        value={code}
      />
    </div>
  );
};

export default TextEditor;
