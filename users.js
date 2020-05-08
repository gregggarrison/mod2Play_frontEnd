fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      users.forEach (user => {
        console.log(user)


        const userFirstName = document.createElement('h1')
        userFirstName.innerText = user.first_name
        document.body.append(userFirstName)
       
       
        user.favorites.map(favorite => {
          const userFavorites = document.createElement('h2')
          userFavorites.innerText = favorite.job_id.title
          document.body.appendChild(userFavorites)  
         
        })
        
        

       
       
        




      })
        
      })
    
      
// fetch('https://jobs.github.com/positions?description=python&location=new+york',{
//   mode: 'cors',
//   headers: {
//     'Access-Control-Allow-Origin':'*'
//   }
// })
//       .then(response => response.json())
//       .then(console.log)