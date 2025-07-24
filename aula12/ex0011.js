let idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 70) {
        console.log('Seu Voto é opcional')
    
} else {
    console.log ('Seu Voto é obrigatorio')
}