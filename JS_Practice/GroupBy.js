function groupBy(array, property) {
    return array.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  const data = [
    { name: 'Urmi', age: 21 },
    { name: 'Sari', age: 25 },
    { name: 'Nups', age: 21 },
  ];
  
  const ans = groupBy(data, 'age');
  
  console.log(ans);
  
  