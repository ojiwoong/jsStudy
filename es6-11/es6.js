// Shorthand property names (속성이름)

{
  const jiwoong1 = {
    name: 'jiwoong',
    age: '28',
  };

  const name = 'jiwoong';
  const age = '28';

  const jiwoong2 = {
    name: name,
    age: age,
  };

  const jiwoong3 = {
    name,
    age,
  };

  console.log(jiwoong1, jiwoong2, jiwoong3);
}

// Destructuring Assignment

{
  // object
  const student = {
    name: 'jiwoong',
    level: 1,
  };

  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['강아지', '고양이'];
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  {
    const [dog, cat] = animals;
    console.log(dog, cat);
  }

  // * Spread Syntax
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['복숭아', '딸기'];
    const fruits2 = ['바나나', '키위'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog1: '진돗개' };
    const dog2 = { dog2: '삽살개' };
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
  }

  // * Default paramters
  {
    function printMessage1(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    function printMessage2(message = 'default message') {
      console.log(message);
    }

    printMessage2('hello');
    printMessage2();
  }

  // * Ternary Operator
  {
    const isCat = true;

    {
      let componet;
      if (isCat) {
        componet = '고양이';
      } else {
        componet = '강아지';
      }
      console.log(componet);
    }

    {
      const componet = isCat ? '고양이' : '강아지';
      console.log(componet);
    }
  }

  // * Template Literals
  {
    const weather = '맑음';
    const temparature = '16도';

    console.log(
      '오늘 날씨는 ' + weather + ' 오늘 온도는 ' + temparature + ' 입니다.'
    );

    console.log(`오늘 날씨는 ${weather} 오늘 온도는 ${temparature} 입니다.`);
  }
}
