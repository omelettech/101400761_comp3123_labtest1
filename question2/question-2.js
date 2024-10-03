function resolvedPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({"message":"Tdelayed success"})
        },500)
    })

}
function rejectedPromise(){
    return new Promise((_,reject)=>{
        setTimeout(()=>{
            reject({"message":"delayed rejection"})
        },500)
    })
}

resolvedPromise()
    .then((res)=>{
    console.log(res)
})

rejectedPromise()
    .then()
    .catch((rej)=>{
    console.error(rej)
})