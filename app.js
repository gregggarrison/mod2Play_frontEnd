document.addEventListener('DOMContentLoaded', (event)=>{
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



const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get("id")

fetch("http://localhost:3000/jobs")
    .then(respn => respn.json())
    .then(jobs => {jobs.forEach(job => {

        const container = document.createElement('div')
        container.setAttribute("class", "container")
        const card = document.createElement('div')
        card.setAttribute("class", "card")
        card.setAttribute(onclick,"flip(event")
        const front = document.createElement('div')
        front.setAttribute("class", "front")
        const back = document.createElement('div')
        back.setAttribute("class", "back")
        const jobDescription = document.createElement('h1')



        const jobTitle = document.createElement('h1')
        const jobLocation = document.createElement('p')

        jobTitle.innerText = job.title
        jobLocation.innerText = job.location
        jobDescription.innerText = job.description




        document.body.appendChild(container)
        container.appendChild(card)
        card.appendChild(front)
        front.append(jobTitle, jobLocation)

        card.appendChild(back)
        back.appendChild(jobDescription)




    })})
 



    
})
