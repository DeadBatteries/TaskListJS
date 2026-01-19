lista = [];


let addtarefa = document.getElementById("adicionar");


addtarefa.addEventListener("click", () =>{

    let tarefa  = document.getElementById("novatarefa").value.trim();

    validarTarefa();
    adicionarTarefa();
    renderizarlista();
    //removerTarefa();


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

    exibicao.innerHTML = "";

    for(const [indice, valor] of lista.entries())  {



        const div = document.createElement("div");

        div.classList.add("tarefa");

        div.dataset.index = indice;

        

        const numeracao = document.createElement("p");

        numeracao.textContent = indice;




        const exibirtarefa = document.createElement ("p");

        exibirtarefa.textContent = valor;



        const botaoremov = document.createElement("button");

        botaoremov.textContent = ("Remover"); 
     

        div.appendChild(numeracao);
        div.appendChild(exibirtarefa);
        div.appendChild(botaoremov);
        exibicao.appendChild(div);
       
    };



    


    }


        const container = document.getElementById("tarefasatuais");
        container.addEventListener("click", (remover) => {

            const botao = remover.target.closest("button");
            if(!botao) return;
                
            const tarefa = remover.target.closest(".tarefa");
            if(!tarefa){

                console.log("carai toma no cu");
                return;

            }

            const tarefasel  = Number(tarefa.dataset.index);

            lista.splice(tarefasel, 1);
            renderizarlista();

            });
        



    });

    
   

