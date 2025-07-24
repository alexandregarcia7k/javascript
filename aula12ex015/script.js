function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res') //só para diferenciar e usar o query
    if (fano.value.length == 0 || Number(fano.value) > ano) {
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





//res.innerHTML = `Idade calculada: ${idade}`