function isPowerOfTwoBitwise(n){
if(n < 1){
	return false
}
return (n & (n-1)) === 0 
}
console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(4))
console.log(isPowerOfTwoBitwise(5))

//Time Complexcity B-O = O(1)