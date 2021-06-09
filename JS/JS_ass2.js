//Basic Question
//Question 1
// let square=(x)=>{return x*x }
// let double=(y)=>{return y*2}

// let composedFunc=(callback1,callback2)=>
// {
//     let x=callback1(callback2(5))
//     return x
// }

// let value=composedFunc(square,double)
// console.log(value)

//Question 2

// let composedFunc=(callback1,callback2)=>
// {
//     return (x)=>
//     {
//         let y=callback1(callback2(x))
//             return y
//     }
// }

// let f1=composedFunc(double,square)
// let ans=f1(5)
// console.log(ans)

//Question 3 and 4
let isEven=(x)=>
{
    return (x%2==0)
}
const arr=[2,3,4,5,6,7]

// let find=(arr,func)=>
// {
//     let parseArr=[]
//     for (let index = 0; index < arr.length; index++) {
//         if(func(arr[index]))
//         {
//             parseArr.push(arr[index])
//         }
        
//     }
//     return parseArr
// }
// let results=find(arr,isEven)
// console.log(results)

//Advance Question
//Question 1
// let parseArr=[]
// let recFind=(arr,start,end,func)=>
// {
    
//     end=start+1
//     if((start==(arr.length-1)) && (end==arr.length))
//     {
//         if (func(arr.slice(start,end)[0])) {
//             parseArr.push(arr.slice(start,end)[0])
//         }
       
//         return 
//     }
//     if(func(arr.slice(start,end)[0]))
//     {
//        parseArr.push(arr.slice(start,end)[0])
//     }
//     start=start+1
//     end=start+1
//     recFind(arr,start,end,func)
//     console.log('hi')
    
// }
// recFind(arr,0,0,isEven)
// console.log(parseArr)

//Question 3

let show=()=>
{
    console.log("This is the output i want to print")
    
}
console.log(show)