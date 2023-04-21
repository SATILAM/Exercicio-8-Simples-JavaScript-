function divisores(num) {
    const result = [];
    
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        result.push(i);
      }
    }
    
    return result;
  }
  
  console.log(divisores(12)); // Deve retornar [1, 2, 3, 4, 6, 12]