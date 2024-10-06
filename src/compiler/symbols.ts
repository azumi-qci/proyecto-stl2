export const tokenTypes = {
  id: { id: 0, name: 'Identifier' },
  // Data
  int: { id: 1, name: 'Integer' },
  real: { id: 2, name: 'Real' },
  string: { id: 3, name: 'String' },
  dataType: { id: 4, name: 'Data type' },
  // Operators
  '+': { id: 5, name: 'Addition operator' },
  '-': { id: 6, name: 'Substraction operator' },
  '*': { id: 7, name: 'Multiplication operator' },
  '/': { id: 8, name: 'Division operator' },
  // Relational operators
  '<': { id: 9, name: 'Less than' },
  '>': { id: 10, name: 'More than' },
  '<=': { id: 11, name: 'Less or equals than' },
  '>=': { id: 12, name: 'More or equals than' },
  // Logical operators
  '||': { id: 13, name: 'OR operator' },
  '&&': { id: 14, name: 'AND operator' },
  '!': { id: 15, name: 'NOT operator' },
  '!=': { id: 16, name: 'Different operator' },
  '==': { id: 17, name: 'Equals operator' },
  // Punctuation
  ';': { id: 18, name: 'Semicolon' },
  ',': { id: 19, name: 'Comma' },
  '(': { id: 20, name: 'Open parenthesis' },
  ')': { id: 21, name: 'Close parenthesis' },
  '{': { id: 22, name: 'Open bracket' },
  '}': { id: 23, name: 'Close bracket' },
  '=': { id: 24, name: 'Asssign operator' },
  // Keywords
  if: { id: 25, name: 'Conditional if' },
  while: { id: 26, name: 'While loop' },
  return: { id: 27, name: 'Return statement' },
  else: { id: 28, name: 'Conditional else' },
  $: { id: 29, name: 'Terminal' },
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
