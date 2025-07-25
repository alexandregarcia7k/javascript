function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    if (num.value.length == 0){  //inserir algum valor, se não volta esse erro
        res.innerHTML = 'Por favor, Digite um número'
        tab.innerHTML = ''
    } else {
        let n = Number(num.value) //convertendo valor
        let c = 1  //contador
        tab.innerHTML = ''  //limpar valor da tabuada depois de feita
        while (c <= 10) {     //enquanto contador menor ou igual que 10 faça
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++ // soma 1 ao contador
        }
    }
    
    
}