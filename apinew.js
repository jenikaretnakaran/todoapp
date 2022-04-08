let count=0;

function ajaxfile(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
{
    if(this.readyState==4&&this.status==200)
    {
        var response= JSON.parse(this.responseText); 
        for (i=0;i<response.length;i++)
        {
        var newspan = document.createElement('span');
        newspan.innerHTML = "<li class='list-group-item list-group-item-dark'id='todolist'>" +"<input class='form-check-input me-1' type='checkbox' value='' aria-label='...' onclick=countCheck(event)>"+response[i].title +"</li>";
        document.getElementById('todos').appendChild(newspan);
        };
    };
};

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();   
}
ajaxfile();


function countCheck(ev){
     count ++;
    console.log(count);
    const myPromise = new Promise((resolve, reject) => {      
        if(count==5) {    
            resolve('"Congrats,5 tasks have been successfully completed"');  
        } else if (count>5) { 
            ev.preventDefault();   
        };
    });
    myPromise
    .then(function(msg){
        alert(msg);
    })
    .catch(function(err){
        return(err);
    });
   
};


