 let  contador = 0; 
  
 function CriarTarefa (){
   let tarefa = document.querySelector("input").value;
    let lista = document.querySelector(".list")

   

    if ((tarefa !== null) && (tarefa !== undefined) && (tarefa !== "")){
         ++contador;
        lista.innerHTML += `  <div id="${contador}" class="list-iten" >
                
        <i onclick="Feito(${contador})" class="bi bi-square check-box"></i>

        <i onclick="Feito(${contador})" class="bi bi-check2-square checked-box"></i>

        <p onclick="Feito(${contador})" >${tarefa}</p>

        <i onclick="Apagar(${contador})" class="bi bi-trash3 delete"></i>
  </div>`

             document.querySelector("input").value = "" ;
             document.querySelector("input").focus()          
    }

}

function Feito(id){
    let iten = document.getElementById(id)
    iten.classList.toggle("feito")
}
 
function Apagar(id){
document.getElementById(id).remove()
  
}