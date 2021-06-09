// Assigment 2

//Question1


// const one = new Promise<string>((resolve:any, reject:any) => {
//     setTimeout( function() {
//         resolve("Success!")  // Yay! Everything went well!
//       }, 250)
//   });
// one.then((value:any) => {
//     console.log('resolved', value);
//     return value+'jesus'
//   })
//   .then((value)=>
//   {
//      console.log(value)
//   })

const some_function = (x:any) =>
{
  
 return new Promise((resolve, reject) =>
 {
   
  if (!isNaN(x))
  {
    setTimeout( ()=> {
        resolve(x);
    }, 250)
   
  }
  else
  {
   reject(Error("Enter a number"));
  }
 });
};
const some_function1 = (y:any) =>
{
  
 return new Promise((resolve, reject) =>
 {
   
  if (!isNaN(y))
  {
    setTimeout( ()=> {
        resolve(y);
    }, 350)
   
  }
  else
  {
   reject(Error("Enter a number"));
  }
 });
};

some_function("sw").then(value=>console.log(value))
.catch((err)=>
{
    console.log(err)
})

Promise.all([some_function(1), some_function1(2)]).then((values:any[]) => {
    console.log(values[0]+values[1]);
    
  });


  //Question 3

  interface Printable
  {
    type:string,
    name:string
    printStuff:()=>string

  }
  let customer:Printable=
  {
    type:'employee',
    name:'swargam',
    printStuff:function():string{return `type:${this.type}  name:${this.name}`}

  }
  let cirlcle:Printable=
  {
    type:'shape',
    name:'circle',
    printStuff:function():string{return `type:${this.type}  name:${this.name}`}
  }

  let printAll=(object:Printable)=>
  {
     console.log(object.printStuff())
  }
  let arr=[]
  arr.push(cirlcle,customer)
  for(let i=0;i<arr.length;i++)
  {
    printAll(arr[i])
  }