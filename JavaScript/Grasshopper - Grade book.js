// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// 考察枚举 switch case
function getGrade (s1, s2, s3) {
    // Code here
    let avg = (s1 + s2 + s3) / 3;
    switch (true) {
     case(avg >= 90):
      return 'A';
     case(avg >= 80):
      return 'B';
     case(avg >= 70):
      return 'C';
     case(avg >= 60):
      return 'D';
     default:
      return 'F';
    }
  }

  // 这里有一种考虑到不定长度输入的方法
  function getGrade(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length
    
    if (average >= 90) return 'A'
    else if (average >= 80) return 'B'
    else if (average >= 70) return 'C'
    else if (average >= 60) return 'D'
    else return 'F'
  }

// 本质上也是枚举但是使用了 ? :条件判断的嵌套
  function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
  }