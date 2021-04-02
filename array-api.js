'use stric';

// Quiz Time
// Q1. 배열을 문자열로 만들기
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());
  //console.log(String(fruits));
}

// Q2. 문자열을 배열로 만들기
{
  const fruits = '사과,키위,바나나,체리';

  console.log(fruits.split(','));
}

// Q3. 배열을 반전시키기
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. 첫 두 요소를 제거하고 새로운 배열 만들기
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. 90점인 학생을 찾기
{
  const result = students.find((student) => student.score === 90);
  console.log(result.name);
}

// Q6. 등록된 학생들의 배열 만들기
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. 점수 배열 만들기
// result [45, 80, 90 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. 학생 중 50점 이하의 학생 체크
{
  // some은 한명이라도 조건이 충족하면 true
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // every는 모두 조건이 충족해야 true
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. 모든 학생의 점수 평균 계산
console.clear();
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. 학생들의 점수들를 string으로 변환
// result '45, 80, 90, 66, 88
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Q11. 학생들의 점수들를 string으로 변환 (오름차순)
// result '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => {
      console.log(`a : ${a} / b : ${b} / a - b ${a - b}`);
      return a - b;
    })
    .join();
  console.log(result);
}
