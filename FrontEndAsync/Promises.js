//::Task1::
//Write function that takes time as a parameter and returns a  promise 
//This promise will resolve after a time delay of time passed as a parameter(e.g say 1000 ms )
//
var asyncOperation =  function(time){

    //return a promise here
}

////::Task2::
//Call this asyncOperation Method by passing the time = 1000

////::Task3::
//Create an array of asyncOperationMethods with various timeouts (for e.g 1000,2000,3000)

////::Task4::
//implement it in a way so that it retuen only when all the promises suceed

////::Task5::
//Lets write a function that implements this promise.all 




var asyncOperation =  function(time){
    return new Promise(function (resolve, reject) {
    setTimeout(()=> {
     resolve(time)
    }, time);
  });
}

const arr =[asyncOperation(1000),asyncOperation(2000),asyncOperation(3000)]
Promise.all(arr).then(res => console.log(res))


var promiseAll = function(promises) {
    var results = [];
    var completedPromises = 0;
    return new Promise(function (resolve, reject) {
      promises.forEach(function(promise, index) {
        promise.then(function (value) {
          results[index] = value;
          completedPromises += 1;
          if(completedPromises === promises.length) {
            resolve(results);
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    });
  }
