document.getElementById("timeout").addEventListener('click', () => {
    setTimeout(function () {
        let div = document.createElement('div');
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.background = "red";
        div.style.border = "1px solid black";
        div.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
        document.getElementById("timeout-div").append(div);
    }, 2000)
})
let a = 0;

document.getElementById("interval-start").addEventListener('click', () => {
    const id = setInterval(function () {
        document.getElementById("interval-div").innerHTML = (a+=60).toString();

        document.getElementById("interval-stop").addEventListener('click', () => {
            clearInterval(id);
        })
    }, 1000)
})

