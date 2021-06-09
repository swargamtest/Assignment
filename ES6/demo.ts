// Assignment 1

// Question 1
const a=12
// a=13 if i put here it will not assign the value

//Question 2
{
    let b=12
    // console.log(a)
}
// console.log(b) not pritning the value as b is declared in block and cannot access it


//Question 3
let id=1
let price=120000
let title="Macbo"

let order=
{
    id,price,title,
    printorder()
    {
        return `youe orderId is${this.id} and item ${this.title}`
    },
    getPrice()
    {
        return this.price
    }
}
// console.log(order.printorder())
// console.log(order.getPrice())
// console.log(order)
let returnedTarget={}
returnedTarget = (<any>Object).assign(order, returnedTarget);
// console.log(order);
// console.log(returnedTarget);


//Question 4
let names=['tom','jerry','ivan']
let myArray=[]

myArray = names.map((str, index) => ({ name: str, length: str.length}));
// console.log(myArray)

//Question 5

// let add=(name='swargam',surnmae='haz')=>
// {
// console.log(`${name} ${surnmae}`)
// }
// add()

// let userfriends=(username:string,...frineds)=>
// {
//     console.log(username)
//     for (const iterator of frineds) {
//         console.log(iterator)
//     }
// }

// userfriends('swargam',1,2,3)

// let capitalize=(...str)=>
// {
    
// }

// capitalize(['swargam','ram','guari'])

//Question 6
// let table_no=3
// let laptop='MacbookPro'
// let model_no=2017
// console.log(`my table no is ${table_no}  and laptop is ${laptop} and model no is ${model_no}`)


//Question 7
// let arr=[1,2,3,4]
// let [x,y,z,h]=arr
// console.log(z)

// let orgObject=
// {
//     name1:'jesus',
//     add:'navi mumbai 410210',

// }

// let {name1,add}=orgObject


// console.log(add.split(" ")[2])

// Question 8
class Account
{
    public ID:number;
    public Name:string;
    public Balance:number;
  constructor(id:number,name:string,balance:number)
  {
      this.ID=id;
      this.Name=name;
      this.Balance=balance
  }
}

class savings_account extends Account
{
    private interest:number;
    private cash_credit:number
    constructor(id:number,name:string,balance:number,number:number,credit:number)
    {
       super(id,name,balance)
       this.interest=number
       this.cash_credit=credit

    }
    totalBalance()
    {
      let interest_balance=((this.Balance-this.cash_credit)/100)*this.interest
      return this.Balance=this.Balance+interest_balance
    }
}
let ram=new savings_account(1,'ram',120,2,20)
console.log(ram)
console.log(ram.totalBalance())