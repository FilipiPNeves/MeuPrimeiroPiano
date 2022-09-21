function tocaNota (idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }

}


const listaDeNotas = document.querySelectorAll('.tec');

for(let i=0; i<listaDeNotas.length; i++){

    const nota = listaDeNotas[i]; 
    const notaId = nota.classList[2];
    const idNota = `#som_${notaId}`;

    nota.onclick = function () {
        
        tocaNota(idNota);

    }

}