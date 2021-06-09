//Other part then basic,basic JS

//Question 1
// console.log("hello world")

//Question 2
// var x=prompt("what is your name")
// alert("hello there"+x)

//Question 3
// var y =prompt("enter your name")
// if(y=="alice" || y=="bob")
// {
//     alert("hello there "+y)
// }

//Question 4/5
// var num=prompt("enter number")
// var sum=0
// for(let i=0;i<=num;i++)
// {
//     if(i%3==0 || i%5==0)
//     {
//         sum+=i
//     }
// }
// console.log(sum)


//Question 6
// var num=prompt("enter number")
// var sum=0
// let choice=prompt("Enter 1 for multi 2 for aadition")
// if(choice==1)
// {
//     for(let i=0;i<=num;i++)
// {
//         sum+=i
// }
// console.log(sum)
// }
// else
// {
//     var multi=1
//     for (let index = 1; index <= num; index++) 
//     {
//         multi*=index
//     }
//     console.log(multi)
// }

//Question 7
// for (let i = 1; i <= 12; i++) 
// {
//     for (let j = 1; j <= 10; j++) 
//     {
//         console.log(i*j)
//      }
// }

//Question 8
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));
// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

//Question 9
// var secretNumber=10
// let count=5
// while(count>0)
// {
//     var x=prompt("Enter a secret number,you have "+count+"left")
//     if((secretNumber-x)==1)
//     {
//         alert("your very  very close")
//         count--

//     }
//     else if((secretNumber-x)>=5)
//     {
//       alert("your quite close")
//        count--
//     }
//     else if((secretNumber-x)>10)
//     {
//         alert("your going away")
//         count--
//     }
//     else if(x==secretNumber)
//     {
//       alert("Congrats mate")
//       count===0
//       break
//     }
// }

//Question 10
// function leap_year_range(st_year, end_year) {
//     var year_range = [];
//     for (var i = st_year; i <= end_year; i++)
//     {
//          year_range.push(i);
//     }
//     var new_array = [];

// year_range.forEach(
// function(year)
// { 
//    if (test_LeapYear(year)) 
//    new_array.push(year);
// });

// return new_array;
//  }

// function test_LeapYear(year) {
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//             return year;
//     } else {
//             return false;
//     }
// }
// console.log(leap_year_range(2000,2012));


//Question 11
// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

//Question 12
// let arr=[1,2,3,4,5]
// let reverseArr=arr.reverse()
// console.log(reverseArr)

//Question 13
// let arr=[12,11,14]
// arr.includes(15)

//Question 14
// let arr=[1,2,3,4,5]
// const arr2=arr.filter((el,index)=>
// {
//     if(!(index%2==0))
//     {
//         return el
//     }
// })
// console.log(arr2)

//Question 15



//Question 16
//just reverse the array and compare it

//Question 17
// let arr=[4,6,7,8,9,10]
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
//   sum+=arr[i]
// }
// console.log(sum)

//Question 18




//Question 19
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// arr1.concat(arr2);

//Question 20


//Question 