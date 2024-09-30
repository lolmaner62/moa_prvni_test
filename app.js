if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function Work() {
    let cislo1;
    let cislo2;
    var operace;
    try {

         cislo1 = parseInt(document.getElementById('cislo1').value);
         var e = document.getElementById('operace');
         operace = e.value;
         cislo2 = parseInt(document.getElementById('cislo2').value);
    } catch (error) {
        console.log('Nefunnguje to', error);
    }
    
    
    let output;
    
    if (operace == "+") {
        output = cislo1 + cislo2;
    }
    else if (operace == "-")
    {
        output = cislo1 - cislo2;
    }
    else if (operace == "*")
    {
            output = cislo1 * cislo2;
    }
    else
    {
        output = cislo1 / cislo2;
    }
    console.log(output);
    console.log(operace);
    document.getElementById('Vysledek').innerText = output;
}