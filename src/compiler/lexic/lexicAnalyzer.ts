import {
  dataType,
  digits,
  keywords,
  letters,
  operators,
  punctuation,
  tokenTypes,
} from '../symbols';

import { Token } from '../interfaces/token';

export const lexicAnalyzer = (input: string): Token[] => {
  let currentToken = '';
  let foundTokens: Token[] = [];
  const inputCode = `${input}$`;

  let state = 0;
  let isFloatingPoint = false;

  for (let i = 0; i < input.length; i++) {
    const currentChar = inputCode[i];

    switch (state) {
      // Intial state
      case 0:
        if (currentChar.charCodeAt(0) === 20) {
          state = 0;
        } else if (letters.test(currentChar)) {
          state = 1;
          currentToken += currentChar;
        } else if (digits.test(currentChar)) {
          state = 2;
          currentToken += currentChar;
        } else if (operators.includes(currentChar)) {
          state = 3;
          currentToken += currentChar;
        } else if (currentChar == '"') {
          state = 4;
          currentToken += currentChar;
        } else if (punctuation.includes(currentChar)) {
          foundTokens.push({
            id: tokenTypes[currentChar as keyof typeof tokenTypes].id,
            token: tokenTypes[currentChar as keyof typeof tokenTypes].name,
            lexeme: currentChar,
            code: tokenTypes[currentChar as keyof typeof tokenTypes].code,
          });
        } else if (currentChar === '$') {
          foundTokens.push({
            id: tokenTypes['$'].id,
            token: tokenTypes['$'].name,
            lexeme: currentToken,
            code: tokenTypes['$'].code,
          });
        }
        break;
      // Indentifiers or keywords
      case 1:
        if (letters.test(currentChar) || digits.test(currentChar)) {
          currentToken += currentChar;
          // Go to next letter/digit
          break;
        }

        if (keywords.includes(currentToken)) {
          // Found keyword
          foundTokens.push({
            id: tokenTypes[currentToken as keyof typeof tokenTypes].id,
            token: tokenTypes[currentToken as keyof typeof tokenTypes].name,
            lexeme: currentToken,
            code: tokenTypes[currentToken as keyof typeof tokenTypes].code,
          });
        } else if (dataType.includes(currentToken)) {
          // Found data type
          foundTokens.push({
            id: tokenTypes['dataType'].id,
            token: tokenTypes['dataType'].name,
            lexeme: currentToken,
            code: tokenTypes['dataType'].code,
          });
        } else {
          // Found identifier
          foundTokens.push({
            id: tokenTypes['id'].id,
            token: tokenTypes['id'].name,
            lexeme: currentToken,
            code: tokenTypes['id'].code,
          });
        }

        // Reset state
        currentToken = '';
        state = 0;
        i--;

        break;
      // Integers
      case 2:
        if (digits.test(currentChar)) {
          currentToken += currentChar;
        } else if (currentChar === '.') {
          currentToken += currentChar;
          isFloatingPoint = true;
        } else {
          foundTokens.push({
            id: isFloatingPoint ? tokenTypes['real'].id : tokenTypes['int'].id,
            token: isFloatingPoint
              ? tokenTypes['real'].name
              : tokenTypes['int'].name,
            lexeme: isFloatingPoint
              ? parseFloat(currentToken)
              : parseInt(currentToken),
            code: isFloatingPoint
              ? tokenTypes['real'].code
              : tokenTypes['int'].code,
          });

          // Reset state
          currentToken = '';
          state = 0;
          i--;
          isFloatingPoint = false;
        }
        break;
      // Operators
      case 3:
        if (operators.includes(currentToken + currentChar)) {
          currentToken += currentChar;
        } else {
          foundTokens.push({
            id: tokenTypes[currentToken as keyof typeof tokenTypes].id,
            token: tokenTypes[currentToken as keyof typeof tokenTypes].name,
            lexeme: currentToken,
            code: tokenTypes[currentToken as keyof typeof tokenTypes].code,
          });

          // Reset state
          currentToken = '';
          state = 0;
          i--;
        }
        break;
      // Strings
      case 4:
        currentToken += currentChar;

        if (currentChar == '"') {
          foundTokens.push({
            id: tokenTypes['string'].id,
            token: tokenTypes['string'].name,
            lexeme: currentToken,
            code: tokenTypes['string'].code,
          });
        }

        // Reset state
        currentToken = '';
        state = 0;

        break;
      // Error
      default:
        currentToken += currentChar;
        foundTokens.push({
          id: -1,
          token: 'Error',
          lexeme: currentToken,
          code: 'error',
        });
        break;
    }
  }

  return foundTokens;
};
