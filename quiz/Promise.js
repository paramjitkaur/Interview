const request =require('request')
const fs = require('fs')


flow(
        function getPageHTML(url,next){
            request.get(url,
                function(err,resp,body){
                    next(body)
                }.bind(this))
        },
        function waitSometime(body,next){
            setTimeout(function(){
                next(body.length)
            },2000)
        },
        function writeFile(len, next){
            const fileName ='./foo.out'
            fs.writeFile(fileName,len,function(err){
                next(fileName)
            }) 
        },
        function readFile(fileName, next){
            fs.readFile(fileName,'utf-8',function(err,body){
                next(body)
            })
        },
        function doneAndAssert(result){
            console.log(`Result is ${result} bytes`)
        }
    ).start('https://www.google.com')
    function flow(f1,f2,f3,f4,f5){
        const funcs =[...arguments]
        

        const next =(res) =>{
            funcs.shift()(res,next)
        }
       
        console.log(next)
        return {
            start:function(url){
                funcs.shift()(url,next)
                // f1(url,function(body){
                //     f2(body,function(len){
                //         f3(len,function(fileName){
                //             f4(fileName,function(result){
                //                 f5(result)
                //             }
                //         )})
                //     })
                // })
                }   
            
        }
    }