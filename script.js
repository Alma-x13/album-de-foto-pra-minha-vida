let folhas = [

    document.getElementById("folha1"),
    document.getElementById("folha2"),
    document.getElementById("folha3"),
    document.getElementById("folha4"),
    document.getElementById("folha5"),
    document.getElementById("folha6"),
    document.getElementById("folha7"),
    document.getElementById("folha8"),
    document.getElementById("folha9"),
    document.getElementById("folha10")

];


let paginaAtual = 0;



function proximaPagina(){


    if(paginaAtual < folhas.length){


        let folha = folhas[paginaAtual];


        folha.classList.add("virar");


        // joga a folha virada para trás
        setTimeout(()=>{

            folha.style.zIndex = "0";

        },500);



        paginaAtual++;


    }


}





function voltarPagina(){


    if(paginaAtual > 0){


        paginaAtual--;


        let folha = folhas[paginaAtual];


        // coloca ela na frente antes de voltar
        folha.style.zIndex = 10 - paginaAtual;


        setTimeout(()=>{

            folha.classList.remove("virar");

        },50);



    }


}