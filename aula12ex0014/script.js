function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 
    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora >= 6 && hora <= 12){
        img.src = "manha.jpg"
         document.getElementById('msg')
         msg.innerHTML = `Bom Dia! agora são ${hora} horas.`
         document.body.style.background = '#5e92aa'
    } else if (hora > 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.getElementById('msg')
         msg.innerHTML = 'Boa Tarde!'
         document.body.style.background = '#b9846f'
    }else {
        img.src = 'noite.jpg'
        document.getElementById('msg')
         msg.innerHTML = 'Boa Noite!'
         document.body.style.background = '#515154'
    }
}
if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada')
}