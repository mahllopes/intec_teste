var radio = document.querySelector('.manual-btn')
var contador = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000 /*tempo da imagem*/)

function proximaImg(){
    contador++

    if(contador > 4){
        contador = 1
    }

    document.getElementById('radio' + contador).checked = true
}