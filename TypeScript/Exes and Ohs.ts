// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// 遍历字符串，如果遇到x则x++，如果遇到o则o++，最后判断x和o是否相等
export function xo(str: string) : boolean {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "x" || str[i] === "X") {
        x++;
      } else if (str[i] === "o" || str[i] === "O") {
        o++;
      }
    }
    return x === o;
    // your code here
  }

  // 匹配字符串中的x和o的数量，如果相等则返回true，否则返回false
  export function xo(str: string) : boolean {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
    // your code here
  }

  export function xo(str: string) : boolean {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
    // your code here
  }