var path = window.location.pathname;
var page = path.split("/").pop();

if(page == "index.html") {
    document.addEventListener("DOMContentLoaded", function() {
        const welcomeMessage = document.getElementById("welcome-message");
        const dateMessage = document.getElementById("date-message");
        const heureMessage = document.getElementById("heure-message");
        const d = new Date();

        heureMessage.innerHTML = d.getHours() + "h" + d.getMinutes();
        dateMessage.innerHTML = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

        if(d.getHours() < 12)
            welcomeMessage.innerHTML = "Bonjour, Bienvenue au Gourmet Limousin";
        else
            welcomeMessage.innerHTML = "Bonsoir, Bienvenue au Gourmet Limousin";
    });
}


if(page == "menu.html") {
    document.getElementById("discount-button-galetou").addEventListener("click", function() {
        let value = document.getElementById("price-galetou").textContent;
        document.getElementById("price-galetou").textContent = value - (value*0.1);
    });
    
    document.getElementById("discount-button-clafoutis").addEventListener("click", function() {
        let value = document.getElementById("price-clafoutis").textContent;
        document.getElementById("price-clafoutis").textContent = value - (value*0.1);
    });
    
    document.getElementById("discount-button-boudin").addEventListener("click", function() {
        let value = document.getElementById("price-boudin").textContent;
        document.getElementById("price-boudin").innerHTML = value - (value*0.1);
    });    
}

if(page == "contact.html") {
    document.getElementById("contact-form").addEventListener("submit",
        function(e) {
            e.preventDefault();

            const name = document.getElementById("nom").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            
            if(name == "" || email == "" || message == "") {
                alert("Un des champs du formulaire est vide");
            } else {
                const validateEmail = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

                if( validateEmail == null) {
                    alert("L'adresse email est incorrect");
                }
            }
        }
    )
}