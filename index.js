
// create all variables 
const body=document.querySelector('body')
const div=document.createElement('div');
const header=document.createElement('h1');
const input=document.createElement('input');
const button=document.createElement('button');
// add all tag in div
body.appendChild(header)
body.appendChild(div)

div.appendChild(input);
div.appendChild(button);

// set attribute and class
div.classList.add('container','mt-2', 'mx-auto', 'd-flex');

header.classList.add('text-center', 'mt-5');

input.setAttribute('type','class', 'placeholder', 'aria-label');
input.type='text';
input.classList.add('form-control' ,'me-2');
input.placeholder='username';

button.setAttribute('type','text');
//button.type='text'
button.classList.add('btn', 'btn-primary', 'ms-4');

// add text in h1 and button
header.innerText='Github Username Widget';
button.innerText='Submit';

// add fetch in the onclick
let username;
let url;

button.addEventListener('click', event=>
{  
    username = input.value;
    url=`https://api.github.com/users/${username}/repos` ;

    //use url in fetch

    fetch(url).then((data)=>
    {
       return data.json(); 
    }).then((jsondata)=>

    {   jsondata.map(repo=>
        {   
            
            console.log(repo.html_url);
           
        }
        
        )
        
        
    })
    


})
// class RepoBox
// {
//     constructor(div,link,definition,date)
//     {
//         this.div=div;
//         this.link=link;
//         this.definition=definition;
//         this.date=date;
//     }
    
//   setWidget() 
//   {
//     const di
//   }


// }


















