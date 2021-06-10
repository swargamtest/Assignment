console.log("hello express")
function post(path, params, method='post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less verbose if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }

var Row = document.getElementById("somerow");
var Cells = Row.getElementsByTagName("td");
const post_item=()=>
{
    let object1={
        1:'',
        2:'',
        3:''
    
    }
    for (let index = 0; index < Cells.length-1; index++)
     {
        for (const key in object1) 
        {
            if (Object.hasOwnProperty.call(object1, key)) 
            {
                 object1[index+1]=Cells[index].innerText;
                
            }
        }

        
    }
    post('/item_added', object1);
}

