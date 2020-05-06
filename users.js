fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      users.forEach (user => {

        const userFirstName = document.createElement('h1')
        userFirstName.innerText = user.first_name

        document.body.append(userFirstName)
       
      })
        
      })
    
      
