//Adding stuff to express
const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const fs = require('fs');
const readline = require('readline');
let object1={}
let arr=[]
const PORT=process.env.PORT || 3000


//Initilizing directories
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setting public paths
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Setting hbs path
hbs.registerPartials(partialsPath)

//Setting views engine
app.set('views', viewsPath)
app.set('view engine','hbs')
// app.set('view engine','pug')



//Setting get path

//Assingment 1


// Question 1/Question 4
// app.get('/',(req,res)=>
// {
//   res.send('hello world')
// })


//Question 2
app.get('/year',(req,res)=>
{
  console.log(req.query.age)
  res.send(req.query.age)
})

//Question 3
app.get('/home',(req,res)=>
{
  // const PORT=process.argv[2]
  // console.log(req.query.age)
  res.send('Hello world')
})

//Question 4
app.get('/time',(req,res)=>
{
let time=new Date()
res.send(time.toISOString());
})

//Question 5
app.get('/',(req,res)=>
{
  res.render('index',
    {
      title:'Form',
      body:'Form Body'
    })
})
app.post('/data_email',(req,res)=>
{
  // console.log(req.body)
  const str=req.body.str.split('').reverse().join('')
  // console.log(str)
  //I got error as empty objct in req.body as i have not added name value in form add i as it get passed in the form as json
  res.send(str)
})

//Question 6
// i already set public path in above which load html and css


//Question 7
let itemsArr=[]
app.get('/item',(req,res)=>{
   res.render('item')
})
app.get('/item/:id',(req,res)=>{
  let item=req.params.id-1
  res.send(JSON.stringify(itemsArr[item]))
})
app.post('/item_added',(req,res)=>
{
  // console.log(req.body)
  itemsArr.push(req.body)
  // console.log(itemsArr)
  res.send('item added succesfully')
})
app.delete('/item_update/:id',(req,res)=>{
  console.log(req.body)
  // let item=req.params.id-1
  // itemsArr[item][2]='deaktop'
  // itemsArr[item][3]='50000'
  res.send('hello')
})


//Question 8
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: new Date().toDateString() })
})


//Question 9
app.get('/book',(req,res)=>
{ 
  async function processLineByLine() 
  {
      const fileStream = fs.createReadStream('text.txt');
    
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
    
      for await (const line of rl)
       {
        console.log(`Line from file: ${line}`);
        arr.push(line)
       }
       return arr
    }
  
  processLineByLine().then(data=>
      {
          for (let index = 0; index < data.length; index++)
           {
              object1[index]=data[index]
              
          }
          res.send(JSON.parse(JSON.stringify(object1)))
      }
      )
  
})


app.get('*', (req, res) => {
    res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    body: 'Page not found.'
    })
})



app.listen(PORT,()=>
{
    console.log(`Server is running in ${PORT}`)
})
