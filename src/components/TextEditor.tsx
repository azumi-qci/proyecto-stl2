import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { FC } from 'react';

import Button from './Button';

interface TextEditorProps {
  input: string;
  setInput(input: string): void;
}

const TextEditor: FC<TextEditorProps> = ({ input, setInput }) => {
  return (
    <div className='flex flex-col h-full'>
      <CodeEditor
        className='grow rounded'
        language='cpp'
        onChange={(e) => setInput(e.target.value)}
        padding={15}
        value={input}
        style={{
          fontFamily:
            'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
          fontSize: 16,
        }}
      />
      <Button className='mt-2'>
        <FontAwesomeIcon icon={faUpload} /> Cargar archivo
      </Button>
    </div>
  );
};

export default TextEditor;
