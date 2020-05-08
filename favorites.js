let params = new URLSearchParams(window.location.search)
let id = params.get('id')


fetch('http://localhost:3000/favorites')
    .then(response => response.json())
    .then(favorites => {

        favorites.forEach(favorite => {

            jobTitle = document.createElement('p')
            jobTitle.innerHTML = `Company: ${favorite.job.company} \nTitle: ${favorite.job.title}\n Location: ${favorite.job.location}\n\n <a href=${favorite.job.company_url} target="_blank">Apply Here</a>`

            document.body.appendChild(jobTitle)
        })
    })
