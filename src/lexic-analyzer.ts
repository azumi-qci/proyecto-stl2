import { LETTER_REGEX, NUMBER_REGEX, SPACE_REGEX } from './regex';

import { SymbolType } from './enums';

export class LexicAnalyzer {
  public currentIndex: number;
  public line: string;

  public constructor(line: string) {
    this.currentIndex = 0;
    this.line = line;
  }

  public nextSymbol(): [string, string] {
    let state: number = 0;
    let ended: boolean = false;
    let symbol: string = '';

    while (!ended) {
      let currentChar = this.nextCharacter();

      switch (state) {
        case 0:
          if (this.isLetter(currentChar)) {
            symbol += currentChar;
            state = 1;
          } else if (this.isDigit(currentChar)) {
            symbol += currentChar;
            state = 2;
          } else if (this.isSpace(currentChar)) {
            ended = true;
          } else if (currentChar === '~') {
            symbol += currentChar;
            state = 0;
            ended = true;
          }
          break;
        case 1:
          if (this.isLetter(currentChar)) {
            symbol += currentChar;
          } else if (this.isDigit(currentChar)) {
            symbol += currentChar;
          } else if (this.isSpace(currentChar) || currentChar === '~') {
            ended = true;
          }
          break;
        case 2:
          if (this.isDigit(currentChar)) {
            symbol += currentChar;
          } else if (currentChar === '.') {
            symbol += currentChar;
            state = 3;
          } else if (this.isSpace(currentChar) || currentChar === '~') {
            ended = true;
          }
          break;
        case 3:
          if (this.isDigit(currentChar)) {
            symbol += currentChar;
            state = 4;
          } else {
            state = 999;
            ended = true;
          }
          break;
        case 4:
          if (this.isDigit(currentChar)) {
            symbol += currentChar;
          } else if (this.isSpace(currentChar) || currentChar === '~') {
            state = 2;
            ended = true;
          }
          break;
      }
    }

    switch (state) {
      case 0:
        return ['~', SymbolType[SymbolType.EOF]];
      case 1:
        return [symbol, SymbolType[SymbolType.IDENTIFIER]];
      case 2:
        return [symbol, SymbolType[SymbolType.NUMBER]];
      default:
        return [symbol, SymbolType[SymbolType.ERROR]];
    }
  }

  private hasFinished(): boolean {
    return this.line.length < this.currentIndex + 1;
  }

  private nextCharacter(): string {
    if (this.hasFinished()) {
      return '~';
    }

    return this.line[this.currentIndex++];
  }

  private isDigit(text: string): boolean {
    return NUMBER_REGEX.test(text);
  }

  private isLetter(text: string): boolean {
    return LETTER_REGEX.test(text);
  }

  private isSpace(text: string): boolean {
    return SPACE_REGEX.test(text);
  }
}
