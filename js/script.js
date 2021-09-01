//Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.

var celleUtente = parseInt(prompt("Di quante celle vuoi che sia il campo ?"));

//Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

for (var i = 1; i <= celleUtente; i++) {
    document.getElementById("container").innerHTML += `<div class="quadrato">${i}</div>`;
}

//Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

document.getElementById("container").addEventListener("click", 
    function(event) {
        event.target.classList.toggle("rosso");
        alert(event.target.innerHTML);
    }
);




