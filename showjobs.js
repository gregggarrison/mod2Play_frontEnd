let params = new URLSearchParams(window.location.search)
let id = params.get('id')

fetch(`http://localhost:3000/jobs/${id}`)
    .then(response => response.json())
    .then(job => {
        console.log(job)
        const h1 = document.createElement('h1')
        h1.innerText = job.title
        document.body.appendChild(h1)
        console.log(job)
    })
