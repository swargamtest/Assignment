// Assingment 2

//Question 1
// class Fibo
// {
//      constructor(previousNo=0,currentNo=1)
//     {
//         this.previousNo=previousNo;
//         this.currentNo=currentNo
//         this.nextTerm=previousNo+currentNo
//     }
//     next()
//     {
//      this.previousNo=this.currentNo
//      this.currentNo=this.nextTerm
//      this.nextTerm=this.currentNo+this.previousNo
//      return this.nextTerm
//     }
// }
// let ex=new Fibo(0,1)
// let next_term=ex.next()
// console.log(next_term)
// next_term=ex.next()
// console.log(next_term)

//Question 2
// let number=7
// const isArmstrong = number => {
//     let num = number;
//     const len = String(num).split("").length;
//     let res = 0;
//     while(num){
//        const last = num % 10;
//        res += Math.pow(last, len);
//        num = Math.floor(num / 10);
//     };
//     return res === number;
//  };
//  const armstrongBetween = (lower, upper) => {
//     const res = [];
//     for(let i = lower; i <= upper; i++){
//        if(isArmstrong(i)){
//           res.push(i);
//        };
//     };
//     return res;
//  };
// let getArmstrongNumber=()=>
// {
//     let count=0
//     return{
//         next:()=>
//         {

//            let arr=armstrongBetween(1,500)
//            console.log(arr)
//            return count<arr.length?
//            {armstrong_value:arr[count++],done:false}:
//            {value:undefined,done:true}
           
//         }
//     }

// }
// let ex=getArmstrongNumber()
// console.log(ex.next())
// console.log(ex.next())
// ex.next()


//Question 4
// const chatroom1=new Set()
// const chatroom2=new Set()

// let users=['swargam','ravi','ram']
// let users2=['octu','papa','ilovepapa']

// users.forEach(element => {
//     chatroom1.add(element)
// });
// users2.forEach(element=> {
//         chatroom2.add(element)
//  });
// // console.log(chatroom1,chatroom2)
// let usersMessages=new Map()
// for (let user of chatroom1) {
//     usersMessages.set(user,'hi')
// }
// for(let user of chatroom2)
// {
//  usersMessages.set(user,'bye')
// }
// let getUser=(chatroom)=>
// {
//     console.log(`Users in chatroom are:`)

//     for (let user of chatroom) {
//       console.log(user)
//       getUserMessage(user)
//     }
// }
// let getUserMessage=(key)=>
// {
// //   console.log('messages in chatroom of that user:')
//   console.log(`${key} has type message: ${usersMessages.get(key)} in chatroom`)
// }
// getUser(chatroom1)

// class Person
// {
//   constructor(object)
//   {
//     this.address=object
//   }

// }
// let abhishek=new Person({city:'mumbai',pincode:'410210'})
// console.log(abhishek.address.city)

