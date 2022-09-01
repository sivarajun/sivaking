
function Factorial(n) {
   let results = 1
  for (let i = 2; i <= n; i++) {
    results = results * i;
    
  }
  return results
}

console.log(Factorial(0))
console.log(Factorial(1))
console.log(Factorial(5))

//Big-O=O(n)