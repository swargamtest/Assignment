//Node Assigment 1

//Question 1
// const http = require('http');
// const port=8000
// http.createServer((req,res)=> {
//   res.writeHead(200);
//   res.end('hello world\n');
// }).listen(port,()=>
// {
//   console.log(`I am listning from on ${port}`)
// });


//Questin 2

// console.log(process.argv)
// const fs = require('fs')
// filename = process.argv[2];
// fs.readFile(filename, 'utf8', (err, data)=> {
//   if (err) throw err;
//   console.log('OK: ' + filename);
//   console.log(data)
// });



//Question 3
// const testFolder = '.';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     fileType(file)
//   });
// });
// const fileType=(file)=>
// {
//   if(file.split('.')[1]==='txt' || file.split('.')[1]==='js')
//   {
//     console.log(`File:${file}`)
//   }
//   else if(file.split('.')[1]==='json')
//   {
//     console.log(`Json:${file}`)
//   }
//   else
//   {
//     console.log(`dir:${file}`)
//   }
// }


//Question 4
// console.log(process.argv)
// const fs=require('fs')
// let data=process.argv[2]
// fs.writeFile('./documents/message.txt',data,'utf8', (err) => {
//   if (err) throw err;
//   console.log('The file was saved!');
// });

//Question 5
// const { count } = require('console');
// const fs = require('fs');
// const readline = require('readline');

// async function processLineByLine() {
//   const fileStream = fs.createReadStream('document.txt');

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.
//   let count=0
//   for await (const line of rl) {
//     // Each line in input.txt will be successively available here as `line`.
//     // console.log(line.split(' '));
//     if(line.includes('ram')===true)
//     {
//       count++
//     }
//   }
//   console.log(`count of ram in txt file is ${count}`)

// }
// processLineByLine();

//Question 6
// const sum=require("./calculator.js")

// console.log(sum.multi(1,2))
// console.log(sum.sum(1,2))

//Question 7
// let strftime = require('strftime') // not required in browsers
// const http = require('http');
// const port=8000
// http.createServer((req,res)=> {
//   res.writeHead(200);
//   res.end('hello world\n');
// }).listen(port,()=>
// {
//   console.log(`I am listning from on ${port}`)
//   console.log(strftime(`LOCAL HOUR OF SERVER:${'%H'}`))
// });

//Question 8
// const sum=(x,y)=>
// {
//   return x+y
// }

// const fs=require('fs')
// let data=sum(3,4)
// fs.writeFile('./documents/message.txt',data,'utf8', (err) => {
//   if (err) throw err;
//   console.log('The file was saved!');
// });

// Question 9
// var fs = require('fs');
// var array = fs.readFileSync('document.txt').toString().split("\n");
// for(i in array) {
//     console.log(array[i]);
// }
// console.log(array)

// Question 10
// same asquestion4