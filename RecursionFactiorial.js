function RecursionFactorial(n) {
 if(n === 0){
   return 1
 }
  return n * RecursionFactorial(n-1)
}

console.log(RecursionFactorial(0))
console.log(RecursionFactorial(2))
console.log(RecursionFactorial(5))

# Time Complexity Big-O=O(n)