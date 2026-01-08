lista = [];


let addtarefa = document.getElementById("adicionar");


addtarefa.addEventListener("click", () =>{

    let tarefa  = document.getElementById("novatarefa").value.trim();

    validarTarefa();
    adicionarTarefa();
    renderizarlista();

    function adicionarTarefa() {

    console.log(tarefa);

    lista.push(tarefa);
    
    console.log(lista);

    tarefa = ""; 

    }

    function validarTarefa() {


    if(!tarefa === ""){

    return("!");
    };


    }   

    function renderizarlista (){

    let exibicao = document.getElementById("tarefasatuais");

    for(n of lista)  {

        exibicao.innerHTML("oi");

    };


    }

    
   
});

