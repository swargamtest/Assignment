
//Assignment 1
// let myform=document.forms.form1
// let pTag=document.getElementById("clearM")

// function handleForm(event) { event.preventDefault(); } 
// myform.addEventListener('submit', handleForm);
// myform.onsubmit=()=>
// {
//     if(myform.fname.value==="")
//     {
//         pTag.innerHTML="Enter valid temperater"
//         return false
//     }
//     // else
//     // {
//     //     let temp=myform.fname.value
//     //     let celsius=(temp-32)*(5/9)
//     //     document.getElementById("celsius").innerHTML="celsius value is "+celsius
//     // }
// }

// function myfunction()
// {
//     if(myform.fname.value!="")
//     {
//         let temp=myform.fname.value
//         let celsius=(temp-32)*(5/9)
//         document.getElementById("celsius").innerHTML="celsius value is "+celsius
//     }
// }



//Assigment 2
// let arr=[]
// for(let x=0;x<3;x++)
// {
//     let y=prompt("Enter numbver between 1-30")
//     if(y>0 ||y<=30)
//     {
//         arr.push(y)
//     }
//     else
//     {
//         alert("You have enter wrong number")
//     }
// }

// let astris=[]
// for (let index = 0; index < arr.length; index++) 
// {
//     let astring=""
//     for (let i = 0; i < arr[index]; i++) {
//         astring+="*"
        
//     }
//     astris.push(astring)
    
// }

// alert(astris.join("\n"))



// Assingmnet 3
// let row=prompt("Enter your row")
// let coloum=prompt("Enter your colom")

// let table=document.getElementById("mytable")
// for (let index = 0; index < row; index++) 
// {
//     let madeRow=table.insertRow(index)
//     for (let col = 0; col < coloum; col++) {  
//         madeRow.insertCell(col).innerHTML="row"+(index+1)+"col"+(col+1) 
//     }
// }



// Assingmnet 4
// let input1,input2
// let choice=prompt("Select this option to select:\n 1.Add \n 2.Sub \n 3.Mul \n 4.div \n 5.Exp \n 6.mean \n 7.quit")
// switch (choice) {
//     case "1":{
//        let table=document.getElementById("mytable")
//        let madeRow=table.insertRow(0)
//        let col_0= madeRow.insertCell(0)
//        let col_1=madeRow.insertCell(1)
//        let col_2=madeRow.insertCell(2)
//        col_1.textContent="+"
//        var feld = document.createElement("input");        
//        feld.setAttribute("onblur","");
//        feld.setAttribute("type","text"); 
//        feld.setAttribute("size","30"); 
//        var feld2 = document.createElement("input");        
//        feld.setAttribute("onblur","");
//        feld.setAttribute("type","text"); 
//        feld.setAttribute("size","30")
//        col_0.appendChild(feld)
//        col_2.appendChild(feld2)
//        input1=feld
//        input2=feld2
//         break;
//     }
//       //if you want to add class name to crated cell data i,e <td> just store it in a variable thn use addclassnamelist something


//     case "6":
//        let table=document.getElementById("mytable")
//        let madeRow=table.insertRow(0)
//        let col_0= madeRow.insertCell(0)
//        let col_1=madeRow.insertCell(1)
//        col_0.textContent="Enter numbers to mean: "
//        var feld = document.createElement("input");        
//        feld.setAttribute("onblur","");
//        feld.setAttribute("type","text"); 
//        feld.setAttribute("size","30"); 
//        col_1.appendChild(feld)
//        input1=feld


     

//     default:
//         break;
// }

// const addit=()=> {
//     switch (choice) {
//         case "1":{
//             let x=(parseInt(input1.value)+parseInt(input2.value))
//             let table=document.getElementById("mytable")
//             let madeRow=table.insertRow(1)
//             let col_0=madeRow.insertCell(0)
//             let col_1=madeRow.insertCell(1)
//             col_0.textContent="Result"
//             col_1.textContent=x
//             break;
//         }
//         case "6":
//             let arr=[]
//             arr=input1.value.split("")
//             let sum=0
//             for (let index = 0; index < arr.length; index++) 
//             {
                
//                 sum+=parseInt(arr[index])
//             }
//             let table=document.getElementById("mytable")
//             let madeRow=table.insertRow(1)
//             let col_0=madeRow.insertCell(0)
//             let col_1=madeRow.insertCell(1)
//             col_0.textContent="Result"
//             col_1.textContent=(sum/arr.length)

//         default:
//             break;
//     }
   
//   }

// const clearit=()=> 
// {
//     let table=document.getElementById("mytable")
//     input1.value=""
//     input2.value=""
//     while(table.rows.length >=1) 
//     {
//         table.deleteRow(1);
//     }
// }


//Assigment 5
let myform=document.forms.form1
function handleForm(event) { event.preventDefault(); } 
myform.addEventListener('submit', handleForm);
let infoArr=[]

let showtable=()=>
{
  document.getElementById("resetbtn").disabled = false;
  let fname=document.getElementById("fname").value
  let email=document.getElementById("email").value
  let address=document.getElementById("w3review").value
  let option=document.querySelector('input[name = "deliver"]:checked').value;
  let checkedBoxes = document.querySelectorAll('input[name=vehicle1]:checked');
  infoArr.push(fname,email,address,option)
  console.log(checkedBoxes.length+1)
  let table=document.getElementById("mytable")
  table.removeAttribute('class','toggle')
  let table1=document.getElementById("mytable1")
  table1.removeAttribute('class','toggle')
  for (let index = 0; index < 4; index++) 
  {
    
      table.rows[index].insertCell(1).textContent=infoArr[index]
    
  }
  let count=0
  for (let i = 0; i < checkedBoxes.length; i++) 
 {
    let madeRow=table1.insertRow(i)
    madeRow.insertCell(0).textContent="topping"+(count+1)
    madeRow.insertCell(1).textContent=checkedBoxes[i].value
    count++

}
      

}
let reset=()=>
{
  myform.reset()
}