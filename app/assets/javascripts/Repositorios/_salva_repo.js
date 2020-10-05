function mysavedRepo(data) {
    alert('Repositório Salvo')
    let _data = {
        repositorio: {
            "img": data['owner']['avatar_url'],
            "name": data['name'],
            "descricao": data['description'],
            "data": data
        }
    }

    fetch('http://localhost:3000/repositorios', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => console.log(json));

}