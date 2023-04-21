function divisores(num, divisor = num, result = []) {
    if (divisor === 0) {
      return result;
    }
    
    if (num % divisor === 0) {
      result.push(divisor);
    }
    
    return divisores(num, divisor - 1, result);
  }
  
  console.log(divisores(12)); // Deve retornar [12, 6, 4, 3, 2, 1]