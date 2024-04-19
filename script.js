let button = document.getElementById('submit');

button.onclick = async function(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {nome,email}

    const response = await fetch('http://localhost:3000/api/store/task', {
        method: "POST",
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success){
        alert('Fique ligado em sua caixa de entrada para receber as novidades do SBank!')
    }else{
        alert('Erro! Por favor tente novamente.');
    }
}