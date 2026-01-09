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

    for(const [indice, valor] of lista.entries())  {

        const div = document.createElement("div");

        div.textContent = ("Minhas Tarefas");

        div.classList("tarefa");

        const numeracao = document.createElement("p");

        numeracao.textContent = (indice);

        data-index = indice;

        const exibirtarefa = document.createElement ("p");

        exibirtarefa.textContent = (valor);

        const botaoremov = document.createElement("button");


    };




    exibicao.innerHTML = "";

    }

    
   
});

