/* Coercion is the term that is used for unexpected type casting in JavaScript. 
Often when you are working with data you will need to transform it from one data type 
to another — something that every developer does on a daily basis. Coercion refers to those 
not-obvious type casts that happen as a side-effect of different operations. */

/*
Strings and Numbers
1.Every “+” expression that involves a string will result in a string.
2."-"can be used only on numbers, so once again, JS will cast the values 
    to be of the same type — this time numbers.
*/ 
console.log(42 + "0") // "420"
console.log("42" - 7)// 35
console.log("42" - 0) // 42
console.log("42" - "9") // 33

/*
3.Booleans
When you use the || operator, if the first value casts to true you will get that value returned.
 Otherwise, you will always get the second one. In the case of && you will always get the second 
 value if they are both coerced to true.
 If the first one casts to false then you will get it’s value returned.
*/
// const a = 100
// const b = "test"
// const c = null
// console.log(a || b)// 100
// console.log(a && b)// "test"
// console.log(a || c)// 100
// console.log(a && c)// null
// console.log(b || c)// "test"
// console.log(b && c)// null
// console.log(typeof(undefined))
// console.log(typeof(null))
// console.log(typeof(NULL))

(function() {
    var a = b = 5;
  })() 
console.log(b);