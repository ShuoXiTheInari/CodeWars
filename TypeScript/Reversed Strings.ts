// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

export function solution(str: string): string {
    str = str.split('').reverse().join('');
    return str; // reverse this!
  }