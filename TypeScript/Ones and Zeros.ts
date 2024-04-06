DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// 本质上是二进制的转换，TypeScript中包含了一个解析特定字符串的方法parseInt(),第一个位置为要转换的字符串，第二个位置为转换进制，返回转换后的数字
export function binaryArrayToNumber(arr: number[]): number {
  return parseInt(arr.join(""), 2);
}

// 从数组本身出发的话，从第一个位置开始，每向后移动一位，就乘以2，然后加上当前位置的数字（2也可以是其他的基数，从而实现其他进制的转换）

export function binaryArrayToNumber(arr: number[]): number {
  return arr.reduce((acc, cur, i) => acc + cur * 2 ** (arr.length - i - 1), 0);
}