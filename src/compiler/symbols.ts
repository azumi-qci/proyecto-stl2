export const tokenTypes = {
  id: { id: 0, name: 'Identifier', code: 'identifier' },
  // Data
  int: { id: 1, name: 'Integer', code: 'integer' },
  real: { id: 2, name: 'Real', code: 'real' },
  string: { id: 3, name: 'String', code: 'string' },
  dataType: { id: 4, name: 'Data type', code: 'type' },
  // Operators
  '+': { id: 5, name: 'Addition operator', code: 'additionOperator' },
  '-': { id: 6, name: 'Substraction operator', code: 'substractionOperator' },
  '*': {
    id: 7,
    name: 'Multiplication operator',
    code: 'multiplicationOperator',
  },
  '/': { id: 8, name: 'Division operator', code: 'divisionOperator' },
  // Relational operators
  '<': { id: 9, name: 'Less than', code: 'relationOperator' },
  '>': { id: 10, name: 'More than', code: 'relationOperator' },
  '<=': { id: 11, name: 'Less or equals than', code: 'relationOperator' },
  '>=': { id: 12, name: 'More or equals than', code: 'relationOperator' },
  // Logical operators
  '||': { id: 13, name: 'OR operator', code: 'orOperator' },
  '&&': { id: 14, name: 'AND operator', code: 'andOperator' },
  '!': { id: 15, name: 'NOT operator', code: 'notOperator' },
  '!=': { id: 16, name: 'Different operator', code: 'differentOperator' },
  '==': { id: 17, name: 'Equals operator', code: 'equalsOperator' },
  // Punctuation
  ';': { id: 18, name: 'Semicolon', code: ';' },
  ',': { id: 19, name: 'Comma', code: 'comma' },
  '(': { id: 20, name: 'Open parenthesis', code: '(' },
  ')': { id: 21, name: 'Close parenthesis', code: ')' },
  '{': { id: 22, name: 'Open bracket', code: '{' },
  '}': { id: 23, name: 'Close bracket', code: '}' },
  '=': { id: 24, name: 'Asssign operator', code: '=' },
  // Keywords
  if: { id: 25, name: 'Conditional if', code: 'if' },
  while: { id: 26, name: 'While loop', code: 'while' },
  return: { id: 27, name: 'Return statement', code: 'return' },
  else: { id: 28, name: 'Conditional else', code: 'else' },
  $: { id: 29, name: 'Terminal', code: '$' },
};

export const keywords = ['if', 'while', 'return', 'else', 'const'];

export const dataType = ['int', 'float', 'char', 'void', 'string'];

export const operators = [
  '||',
  '&&',
  '+',
  '-',
  '==',
  '<',
  '>',
  '<=',
  '>=',
  '!=',
  '*',
  '/',
  '|',
  '&',
  '!',
  '=',
];

export const punctuation = [';', ',', '(', ')', '{', '}'];

export const digits = /[0-9]/;

export const letters = /[a-zA-Z]/;
