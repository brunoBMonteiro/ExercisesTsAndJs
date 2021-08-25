function countItems(arr) {
    const countMap = Object.create(null);
  
    for (const element of arr) {
      // Basicamente, estamos dizendo: atribua à `countMap[element]` o valor
      // atual (ou zero, caso não existir) somado ao número 1.
      countMap[element] = (countMap[element] || 0) + 1;
    }
  
    return Object.entries(countMap).map(([value, count]) => ({
      numero: value,
      quantidade: count
    }));
  }
  
  const arr = ['1', '1', '2', '2', '2'];
  console.log(countItems(arr));