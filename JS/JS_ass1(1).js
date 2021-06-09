//Basic test for connecting to js to main page
// alert("hello there");



//Question 1
const parity=(a)=>
{
//   if(a%2==0)
//   {
//       return true;
//   }
//   else
//   {
//       return false
//   }
  return (a%2==0)?"even":"odd"
}
// let x=parity(247);
// console.log(x)


//Question 2

const max=(a,b,c)=>
{
    if(a>b && a>c)
    {
        return  a+"is bggest"
    }
    else if(b>a && b>c){
        return  b+"is biggest"
    }
    else
    {
        return c+"is biggest"
    }
}
// console.log(max(10,11,13))

// Question 3

const arr=["head","tails"]
const fliphead=(num)=>
{
    let headcount=0
    let i=0
    while(i<num)
    {
       let x= Math.round(Math.random())
       if(arr[x]=="head")
       {
           headcount++
       }
       i++

    }
    return (headcount)
}

// console.log("total head count:"+fliphead(10))

//Question 4 is same just change return headcount with eturn headcount/num


//Question 5

const padchars=(num,string)=>
{ 
    let returnString=""
    for (let index = 0; index < num; index++) {
        returnString+=string;
        
    }
    return returnString;
}
// console.log(padchars(5,"x"))

//Question 6
const rollDicetoSix=()=>
{
    let count=1
    while(true)
    {
        let randomnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
         if(randomnumber=="6")
        {
            return count
        }
        count++
    }

}
// console.log(rollDicetoSix())


//Question 7

const arr1=["have a good day","have a bad day"]
let x= Math.round(Math.random())
document.getElementsByClassName("dynamichead")[0].innerHTML=arr1[x]

//Basic JS page 1
//Question 3
strings=["1.2","1.3","1.4"]
const numstrings=strings.map(element => parseFloat(element));
// console.log(numstrings)


//Question 4
const findToken=(str)=>
{
   let tokenString=""
   const tokenArr=[]
    for (let i = 0; i < str.length; i++) {
        if(str[i]!='a' && str[i]!="b")
        {
            tokenString+=str[i]
             for (let j = i+1;j<str.length; j++)
             {
                 if(str[j]=='a' || str[j]=="b")
                 {
                    tokenArr.push(tokenString)
                    tokenString=""
                     break
                 }
                 else
                 {
                     tokenString+=str[j]
                 }
                
             }
        }
        
    }
    return tokenArr
}
const y=findToken("abababbacdbbefgaab");
var longest = y.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);
// console.log(longest)

//Question 5
var test1=["stop","exit","quit"]
const new1=test1.filter(element=>
    {
        if(element.indexOf("q")===-1)
        {
            return element
        }
    })
const new2=new1.map(element=>element.length)
console.log(new2.reduce((a, b) => a + b, 0))


//Basic js page 2
//Question 6 
const triplearg=(a,b,c)=>
{
    return (a+b)/c
}

//Question 7 and 8 is already done



    


