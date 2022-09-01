function isPowerofTwo(n){
if (n < 1){
  return false
}

  while(n>1){
    if(n%2 !== 0){

      return false
    }
    n=n/2
  }
return true
  
}

console.log(isPowerofTwo(1))
console.log(isPowerofTwo(3))
console.log(isPowerofTwo(4))
console.log(isPowerofTwo(5))
console.log(isPowerofTwo(16))

Time Complexity B-O = Olog(n)

