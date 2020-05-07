const container = document.querySelector(".container")


document.addEventListener('DOMContentLoaded', (event)=>{
  // const queryParams = new URLSearchParams(window.location.search)
  // const id = queryParams.get("id")
  
  function flip(event){
        var element = event.currentTarget;
        if (element.className === "card") {
        if(element.style.transform == "rotateY(180deg)") {
          element.style.transform = "rotateY(0deg)";
        }
        else {
          element.style.transform = "rotateY(180deg)";
        }
      }
    };

   

fetch("http://localhost:3000/jobs")
    .then(respn => respn.json())
    .then(jobs => {jobs.forEach(job => {
  
        const card = document.createElement('div')
        card.setAttribute("class", "card")
        card.setAttribute("onclick","flip(event)")
        const front = document.createElement('div')
        front.setAttribute("class", "front")
        const back = document.createElement('div')
        back.setAttribute("class", "back")
        const jobDescription = document.createElement('h3')
        const companyLogo = document.createElement('img')
        const saveButton = document.createElement('button')
        
        
        card.addEventListener('click', event => {
          flip(event)
        })
        const jobTitle = document.createElement('h1')
        const jobLocation = document.createElement('p')
        const companyURL = document.createElement('h1')
        const jobURL = document.createElement('h1')
        
        // saveButton.innerHTML = type="submit" value="Save"
        jobTitle.innerText = job.title
        jobLocation.innerText = job.location
        jobDescription.innerHTML = job.description
        companyLogo.src = job.company_logo
        companyURL.innerHTML = `<a href=${job.company_url} target="_blank">${job.company}</a>`
        jobURL.innerHTML = `<a href=${job.how_to_apply} target="_blank"></a>`
      
        container.append(card)
        card.append(front)
        front.append(jobTitle, jobLocation, companyLogo)

        card.append(back)
        back.append(companyURL)
        back.append(jobURL, saveButton)

    })})
 
    
})
