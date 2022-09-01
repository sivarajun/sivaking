function BinarySearch(arr,target) {
  let leftindex=0
  let rightindex=arr.length-1
  
 while (leftindex<=rightindex)
   {
    let middleindex= Math.floor(leftindex+rightindex)/2
     if (target === arr[middleindex]){
       return middleindex
     }
     if(target < arr[middleindex])
     {
       rightindex = middleindex-1
     } 
     else 
      //(target > arr[middleindex])
     {
       leftindex=middleindex+1
     }
     return -1
   }
   
}
console.log(BinarySearch([-3,-2,2,3,4],3))
console.log(BinarySearch([-4,1,2,-8,4],2))
//Time Complexity B - O = O(logn)

