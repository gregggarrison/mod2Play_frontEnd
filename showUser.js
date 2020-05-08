let params = new URLSearchParams(window.location.search)
let id = params.get('id')


fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
        console.log(user)
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h2')
        let ul = document.createElement('ul')
        h1.innerText = `${user.first_name} ${user.last_name}`
        ul.innerText = user.favorites

       h2.innerText = user.favorties.forEach(favorite => {
            favorite.id.title
        })
       

        document.body.append(h1, ul)



        fetch(`http://localhost:3000/jobs/${id}`)
            .then(response => response.json())
            .then(job => {
                console.log(job)
                li = document.createElement('li')
                li.innerText = job.title

                ul.appendChild(li)
            })




    })
    //     let h1 = document.createElement('h1')
    //     let h2 = document.createElement('h2')

    //     h1.innerText = power.name
    //     h2.innerText = power.description
    //     document.body.append(h1, h2)


    //     power.heroines.map(heroine => {
    //         let h3 = document.createElement('h3')
    //         h3.innerText = heroine.name
    //         document.body.appendChild(h3)
    //     })
    // })   


