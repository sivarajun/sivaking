function LinearSearch(arr,target) {
 for (let i=0;i<arr.length-1;i++){
   if(arr[i] === target)
   {
     return i
   }
 }
  return -1
}
console.log(LinearSearch([-6,-8,2,10,4],2))
console.log(LinearSearch([10,8,2,1,100],101))

//Time Complexity B-O = O(n)


