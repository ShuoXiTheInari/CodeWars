// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

export function reverseWords(str: string): string {
  return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

// 该函数用于将输入的字符串中的单词进行反转，并返回反转后的字符串。

// str.split(" ")：将输入的字符串按空格分割成单词数组。
// map((word) => ...)：对每个单词进行处理。
// word.split("")：将单词分割成字符数组。
// .reverse()：将字符数组进行反转。
// .join("")：将反转后的字符数组拼接成单词。
// .join(" ")：将处理后的单词数组按空格拼接成字符串并返回。