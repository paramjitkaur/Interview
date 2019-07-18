/** WAP that Print numbers between 1 and 100 .
 * For multiple of 3 prints Fizz
 * For multiple of 5 prints Buzz
 * For multiple of 3 and 5 prints FizzBuzz
  */

  for( var i =1; i<101 ; i++)
  {
      let by3 = false
      let by5 =false
      if(i % 3 === 0 )
      {
        by3 = true
        //console.log('Fizz')
      }
      if(i % 5 == 0)
      {
          by5 = true
      }
      if(by3 && by5)
      {
          console.log('FizzBuzz')
      }
      else if(by3)
      {
          console.log('Fizz')
      }
      else if(by5)
      {
          console.log('Buzz')
      }
      else{
          console.log(i)
      }

  }