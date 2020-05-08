const container = document.querySelector(".container")
const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get("id")
let allJobs = [];
let searchString = 'ruby'
let searchKey = 'description'


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

  function filterJobs(searchText) {

  }

  function removeAllJobs() {
    const allCards = document.getElementsByClassName('card')
    Array.from(allCards).forEach((card) => {
      card.remove()
    })
  }






  function renderJobs(jobs) {
    console.log(jobs)
    jobs.forEach(job => {

      const card = document.createElement('div')
      card.setAttribute("class", "card")
      card.setAttribute("onclick", "flip(event)")
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
			companyLogo.src = job.company_logo
			companyURL.innerHTML = `<a href=${job.company_url} target="_blank">${job.company}</a>`
			jobURL.innerHTML = `<a href=${job.company_url} target="_blank">Apply to: ${job.company}</a>`
			saveButton.innerHTML = `<input type="submit" value="Save to Favorites" />`
			container.append(card)
			card.append(front)
			front.append(jobTitle, jobLocation, companyLogo)
			card.append(back)
      back.append(companyURL, jobURL, saveButton)
      
      const favoriteForm = document.createElement("form")
     favor

     back.appendChild(favoriteForm)
      

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
