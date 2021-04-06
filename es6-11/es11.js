// * Optional Chaning (ES11)

{
  const person1 = {
    name: 'jiwoong',
    job: {
      title: 'S/W Enginner',
      manager: {
        name: 'Bob',
      },
    },
  };

  const person2 = {
    name: 'Bob',
  };

  function printManager(person) {
    console.log(person.job.manager.name);
  }

  printManager(person1);
  //printManager(person2);

  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }

    printManager(person1);
    printManager(person2);
  }
}

// * Nullish Clalescing Operator (ES11)
{
  // Logical OR operator
  // false : false, '', 0, null, undefined
  {
    const name = 'jiwoong';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
  }
}
