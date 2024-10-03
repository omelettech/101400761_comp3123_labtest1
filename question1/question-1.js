console.log("Question 1")
async function lowerCaseWords(arr){
    let new_arr=[]
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(arr)){
            reject("Input should be an array")
        }
        else{
            for(let i=0;i<arr.length;i++){
                if(typeof arr[i] === 'string'){
                    new_arr.push(arr[i].toLowerCase())
                }
            }
            resolve(new_arr)
        }
    })


}

lowerCaseWords(["Pizza",1,2,"PIZZAAA"])
    .then(result => console.log(result))  // Output: ['hello', 'world', 'javascript']
    .catch(error => console.error(error));