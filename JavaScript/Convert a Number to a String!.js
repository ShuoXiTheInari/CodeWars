// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// 解法一:
function numberToString(num) {
    // Return a string of the number here!
    return ''+num;
}

// 这是JavaScript的特性，可以通过字符串与数字相加得到字符串，当然正常的ToSting也可以
//String(num)强制类型转化也可以
// 解法二:
function numberToString(num) {
    return num.toString();
}

function numberToString(num) {
    return String(num);
}

