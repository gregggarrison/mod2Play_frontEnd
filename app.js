const container = document.querySelector(".container")
const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get("id")
let allJobs = [];

document.addEventListener('DOMContentLoaded', (event) => {

  function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

  function removeAllJobs() {
    const allCards = document.getElementsByClassName('card')
    Array.from(allCards).forEach((card) => {
      card.remove()
    })
  }
  function renderJobs(jobs) {
    jobs.forEach(job => {

      const card = document.createElement('div')
      card.setAttribute("class", "card")
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
      const realJobURL = job.how_to_apply.match(/\bhttps?:\/\/\S+/gi);
      jobTitle.innerText = job.title
      jobLocation.innerText = job.location
      jobDescription.innerHTML = job.description

      companyLogo.src = job.company_logo || "https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg"
      companyURL.innerHTML = `<a href=${job.company_url} target="_blank">${job.company}</a>`
      jobURL.innerHTML = `<a href=${job.company_url} target="_blank">Apply to: ${job.company}</a>`
      saveButton.innerText = "Save to Favorites"
      container.append(card)
      card.append(front)
      front.append(jobTitle, jobLocation, companyLogo)
      card.append(back)
      let jobID = document.createElement('jobID')
      jobID.innerText = job.id
      back.append(companyURL, jobURL, saveButton, jobID)

      saveButton.addEventListener("click", () => {
        event.preventDefault()

        let formData = {
          user_id: 8,
          job_id: job.id
        }

        fetch('http://localhost:3000/favorites', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })

      })
    })
  }

  const searchBox = document.getElementById('searchBox')
  const searchButton = document.getElementById('searchButton')

  searchButton.addEventListener('click', () => {
    const searchText = searchBox.value.toLowerCase()
    const filteredJobs = allJobs.filter((job) => {
      return job.location.toLowerCase().includes(searchText)
    })
    removeAllJobs()
    renderJobs(filteredJobs)

  })

  fetch("http://localhost:3000/jobs")
    .then(respn => respn.json())
    .then(jobs => {

      allJobs = jobs
      renderJobs(allJobs);

    })
})
