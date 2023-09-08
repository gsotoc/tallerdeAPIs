fetch('https://fakestoreapi.com/products/')
    
    .then(response=> { 
        if(!response.ok){
        console.log('Lo siento, algo salió mal');
    } else {
        return response.json()
    }})
    .then(dataArray => {
        dataArray.forEach(element => {
            console.log(element.title)
        })
    });