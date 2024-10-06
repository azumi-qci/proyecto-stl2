import { FC, useState } from 'react';

import { Token } from './compiler/interfaces/token';
import { analyzeInput } from './compiler/lexic/lexicAnalyzer';

import LexicAnalyzer from './components/LexicAnalyzer';
import TextEditor from './components/TextEditor';

const Layout: FC = () => {
  const [input, setInput] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);

  const getTokens = () => {
    const result = analyzeInput(input);

    setTokens(result);
  };

  return (
    <div className='container grid grid-cols-2 gap-4 p-4 h-screen'>
      <TextEditor input={input} setInput={setInput} />
      <div className='flex flex-col'>
        <LexicAnalyzer tokens={tokens} getTokens={getTokens} />
      </div>
    </div>
  );
};

export default Layout;
