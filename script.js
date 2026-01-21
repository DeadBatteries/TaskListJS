lista = [];


document.addEventListener("DOMContentLoaded", () => {

    let addtarefa = document.getElementById("adicionar");
    const container = document.getElementById("tarefasatuais");

    addtarefa.addEventListener("click", adicionarTarefa);
    container.addEventListener("click", remover);
});



function adicionarTarefa() {

    let input  = document.getElementById("novatarefa");
    let tarefa = input.value.trim();


    if(!validarTarefa(tarefa)) return;

    lista.push(tarefa);
    input.value = "";

    renderizarlista();

 }

function validarTarefa(tarefa) {

   return tarefa !== "";

};
 

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

        
 function remover(event) {

        const botao = event.target.closest("button");
            if(!botao) return;
                
         const tarefa = event.target.closest(".tarefa");
            if(!tarefa){

         console.log("carai toma no cu");
             return;

            }

            const tarefasel  = Number(tarefa.dataset.index);

            lista.splice(tarefasel, 1);
            renderizarlista();

 };
        



    

    
   

