
// create all variables 
const body=document.querySelector('body');

const container=document.querySelector('.container');

const input=document.querySelector('input');

const button=document.querySelector('button');

let username;

let url;

function setNewDiv(name,link,definition)
{
    const widgetDiv=document.createElement('div');
    const widgetLink=document.createElement('a');
    const widgetName=document.createElement('p');
    const widgetDefinition=document.createElement('p');

    // create widget container
    container.appendChild(widgetDiv)
    widgetName.appendChild(widgetLink)
    widgetDiv.appendChild(widgetName)
    widgetDiv.appendChild(widgetDefinition)

    //add class to tag
    widgetDiv.classList.add('border','p-2', 'bg-secondary','text-white','mb-2')

    widgetName.innerHTML=`<a href="${link}" class='text-decoration-none text-white' >${name}</a>`

    if(definition == null)
    {
        widgetDefinition.innerText='description : null'
    }else{
        widgetDefinition.innerText='description : ' +definition;
    }
}

// add fetch in the onclick

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
            setNewDiv(repo.name,repo.html_url,repo.description)
           
        }
        )
    })
})

