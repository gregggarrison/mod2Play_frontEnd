let params = new URLSearchParams(window.location.search)
let id = params.get('id')

fetch(`http://localhost:3000/favorites/${id}`)
    .then(response => response.json())
    .then(favorite => {
        console.log(favorite)
    })