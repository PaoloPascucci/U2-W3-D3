document.addEventListener("DOMContentLoaded", function () {
  const url = "https://striveschool-api.herokuapp.com/books";
  const imgs = document.querySelectorAll("card-img-top");  
  const titles = document.querySelectorAll("card-title");
  const prices = document.querySelectorAll("card-text");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card", "p-3", "bg-dark", "text-white");
        card.id = "closeCard" +(i+1);

        const cardImage = document.createElement("img");
        cardImage.src = data[i].img;
        cardImage.classList.add("card-img-top",  "p-3");
        cardImage.alt = data[i].title;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = data[i].title;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = data[i].price + " €";

        const scartaButton = document.createElement("button");
        scartaButton.classList.add("btn", "btn-danger", "fw-bold");
        scartaButton.type = "button";
        scartaButton.textContent = "Scarta";
        scartaButton.addEventListener("click", function(){
            document.getElementById("closeCard"+(i+1)).style = "display:none";
          })
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(cardImage);
        card.appendChild(cardBody);
        card.appendChild(scartaButton);
        
        document.getElementById("card-container").appendChild(card);
      }
    })
    .catch((err) => console.log("Errore " + err));
});
