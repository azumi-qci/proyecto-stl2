import { FC } from 'react';

import { History } from '../compiler/interfaces/history';

interface ParserProps {
  history?: History[];
}

const Parser: FC<ParserProps> = ({ history }) => {
  return (
    <div className='flex flex-col mt-2'>
      <div className='flex justify-between items-center mb-2'>
        <p className='font-bold px-2 rounded text-lg'>Pila</p>
      </div>
      <div className='flex flex-col bg-gray-500 rounded h-96'>
        {history && history.length ? (
          <div className='flex flex-col grow overflow-scroll'>
            {history.map((item, index) => (
              <div
                className='p-2 text-gray-300 border-b'
                key={`stack-${index}`}
              >
                <p>
                  <div className='inline font-bold'>Estado: </div>{' '}
                  {item.stack.map((i) => `${i.value} `)}
                </p>
                <p>
                  <div className='inline font-bold'>Entrada:</div> {item.input}
                </p>
                <p>
                  <div className='inline font-bold'>Salida:</div> {item.output}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex p-4 justify-center items-center grow'>
            <p className='text-white text-lg text-center'>Pila vacía</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Parser;
