let params = new URLSearchParams(window.location.search)
let id = params.get('id')


fetch('http://localhost:3000/favorites')
    .then(response => response.json())
    .then(favorites => {

        favorites.forEach(favorite => {


            jobTitle = document.createElement('p')
            jobTitle.innerText = `${favorite.job.title}\n Location: ${favorite.job.location}\n`
            
            document.body.appendChild(jobTitle)

        })



    })
