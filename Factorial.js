
function Factorial(n) {
   results = 1
  for (let i = 1; i <= n; i++) {
    results = results * i;
    
  }
  return results
}

console.log(Factorial(0))
console.log(Factorial(1))
console.log(Factorial(5))
