function RecursionFibonicci(n) {
 if (n<2)
 {
   return n
 }
  return RecursionFibonicci(n-1)+RecursionFibonicci(n-2)
}

console.log(RecursionFibonicci(1))
console.log(RecursionFibonicci(2))
console.log(RecursionFibonicci(5))

# Time Complexity Big-O=2^n


