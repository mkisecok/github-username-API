
// create all variables 
const body=document.querySelector('body');

const container=document.querySelector('.container');

const input=document.querySelector('input');

const button=document.querySelector('button');

let username;

let url;

function setNewDiv(name,link)
{
    const widgetDiv=document.createElement('div');
    const widgetLink=document.createElement('a');
    const widgetDefinition=document.createElement('p');
    const widgetUpdate=document.createElement('span');


    // create widget container
    container.appendChild(widgetDiv)
    widgetDefinition.appendChild(widgetLink)
    widgetDiv.appendChild(widgetDefinition)
    widgetDiv.appendChild(widgetUpdate)

    //add class to tag
    widgetDiv.classList.add('border','p-2')
    widgetDefinition.innerHTML=`<a href=\"${link}\">${name}</a>`
    //widgetUpdate=
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
            setNewDiv(repo.name,repo.html_url)
            console.log(repo.name);
            console.log(repo.html_url);
            console.log(repo.updated_at);
           
        }
        
        )
        
        
    })
    


})
class RepoBox
{
    constructor(div,link,definition,date)
    {
        this.div=div;
        this.link=link;
        this.definition=definition;
        this.date=date;
    }
    
  setWidget() 
  {
    

  }


}


















