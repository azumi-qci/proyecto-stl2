import { lexicAnalyzer } from '../lexic/lexicAnalyzer';

import { lrTable } from './grammar';
import { rules } from './rules';

import { Children } from '../interfaces/children';
import { History } from '../interfaces/history';
import { TreeNode } from '../interfaces/treeNode';

import { StackElement } from '../classes/stackElement';

export const parserAnalyzer = (
  input: string
): { history: History[]; tree?: TreeNode; error: boolean } => {
  const stack = [];

  // Initialize the stack
  const terminalElement = new StackElement('$');
  const terminalElement2 = new StackElement('0');
  stack.push(terminalElement);
  stack.push(terminalElement2);

  // Get the tokens from the lexic analuzer
  const tokens = lexicAnalyzer(input);

  // Define required variables
  let currentToken = 0;
  let history: History[] = [];
  let children: Children[] = [];
  let tree: TreeNode | undefined = undefined;

  try {
    while (currentToken < tokens.length) {
      const lexemes = tokens.slice(currentToken).map((item) => item.lexeme);
      const lexemesSubStr = lexemes.join(' ');

      // Instanciate the stack
      const stackTop = parseInt(stack[stack.length - 1].value);
      const inputTop = tokens[currentToken].code;
      const action = lrTable[stackTop][inputTop];

      // Clone the stack
      const stackClone = [...stack];

      history.push({
        stack: stackClone,
        input: lexemesSubStr,
        output: action,
      });

      // Check if the action is a reduction
      if (action < 0) {
        const rule = rules[Math.abs(action)];

        // Remove the elements of the stack
        if (rule.symbolsNumber > 0) {
          for (let j = 0; j < rule.symbolsNumber * 2; j++) {
            stack.pop();
          }

          if (!tree) {
            tree = { name: rule.noTerminal, children };
          } else {
            const tempTree: TreeNode = { ...tree };
            tree = {
              name: rule.noTerminal,
              children:
                children.length > 0 ? [tempTree, ...children] : [tempTree],
            };
          }

          children = [];
        } else {
          children.push({ name: rule.noTerminal });
        }

        const newStackTop = parseInt(stack[stack.length - 1].value);
        const reductionAction = lrTable[newStackTop][rule.noTerminal];

        const newNoTerminal = new StackElement(rule.noTerminal);
        stack.push(newNoTerminal);

        const newElement = new StackElement(reductionAction.toString());
        stack.push(newElement);

        console.log(stack);
      } else {
        // Expansion
        children.push({ name: tokens[currentToken].lexeme.toString() });

        const newTerminal = new StackElement(
          tokens[currentToken].lexeme.toString()
        );
        stack.push(newTerminal);

        const newElement = new StackElement(action.toString());
        stack.push(newElement);

        // Go to next element because of expansion
        currentToken++;
      }
    }
  } catch (error) {
    console.warn(error);

    return { history, tree, error: true };
  }

  return { history, tree, error: false };
};
