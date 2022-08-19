function fibonicci(n)
{
  console.log("print fibinocci series for a given number "+  n);
  const fib = [0,1]
  for(let i=2; i<n; i++)
    {
      fib[i]=fib[i-1]+fib[i-2]
    }
  return fib
  
}

console.log(fibonicci(1))
console.log(fibonicci(2))
console.log(fibonicci(7))

O(n)
O(n2)
Input size reduced by half- O(logn)
