function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res') //só para diferenciar e usar o query
    const anomin = 1900

    if (fano.value.length == 0 || 
        Number(fano.value) > ano || 
        Number(fano.value) < anomin) {
        window.alert('Verifique os dados e tente novamente.')   
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('class', 'img')
            if (fsex[0].checked) {
                gen = 'Homem'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'bebeM.jpg')
                } else if (idade < 21) {
                    img.setAttribute('src', 'jovemM.jpg')
                    //jovem
                }else if (idade < 50){
                    img.setAttribute('src', 'adultoM.jpg')
                    //adulto
                }else{
                    img.setAttribute('src', 'idosoM.jpg')
                    //idoso
                }
                
                    } else if (fsex[1].checked) {
                        gen = 'Mulher'
                        if (idade >= 0 && idade < 10) {
                            //criança
                            img.setAttribute('src', 'bebeF.jpg')
                        } else if (idade < 21) {
                            img.setAttribute('src', 'jovemF.jpg')
                            //jovem
                        }else if (idade < 50){
                            img.setAttribute('src', 'adultoF.jpg')
                            //adulto
                        }else{
                            img.setAttribute('src', 'idosoF.jpg')
                            //idoso
                        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}
window.onload = function() {
    console.log('Hello World!')
    document.getElementById('txtano').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificar(); // permite que o usuário aperte Enter para verificar
    }
});
    document.getElementById('txtano').addEventListener('paste', e => {
    const textoColado = (e.clipboardData || window.clipboardData).getData('text');
    if (!/^[0-9]+$/.test(textoColado)) {
        e.preventDefault();
    }
});
}




//res.innerHTML = `Idade calculada: ${idade}`