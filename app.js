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
        const jobDescription = document.createElement('h1')
        const companyLogo = document.createElement('img')
        
        

        card.addEventListener('click', event => {
          flip(event)
        })
        const jobTitle = document.createElement('h1')
        const jobLocation = document.createElement('p')

        jobTitle.innerText = job.title
        jobLocation.innerText = job.location
        jobDescription.innerText = job.description
        companyLogo.src = job.company_logo

      
        container.appendChild(card)
        card.appendChild(front)
        front.append(jobTitle, jobLocation)

        card.appendChild(back)
        back.append(companyLogo)

    })})
 
    
})
