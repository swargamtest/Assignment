//Question 1 class 
class Rectangle
{
    constructor(height=1, width=1)
     {
        this.height = height;
        this.width = width;
      }
      calArea()
      {
         return this.height*this.width;
      }
      

}

//Question 1
// let rec1=new Rectangle()
// console.log(rec1)
// rec1.height=2
// console.log(rec1.height)

//Question 2
Rectangle.prototype.getArea=function()
{
    return this.calArea()
}
//i have to use old function style not arrow as this keywprd doesnt work she stack overflow bookmard page
// console.log(rec1.getArea())

//Question 3
// let r=new Rectangle(5,4)
// r.height=50
// console.log(r.getArea())

//Question 4 and 5
// let varibale=
// {
//     'Fperson':"swargam",
//     'Lname':"Jesus"
// }
// varibale.Lname="HAZARIKA"
// console.log(varibale.mname)
// varibale.mname="krishna"
// console.log(varibale)

//Question 6
let obstring='{"fname":"swargam","lname":"hazaika"}'
// let obj=eval('('+obstring+')');
// console.log(obj)
//Question 7

let obj=JSON.parse(obstring)
console.log(obj)

