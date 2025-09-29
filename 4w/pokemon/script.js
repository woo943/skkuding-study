const pokemon = JSON.parse(localStorage.getItem("pokemon"));

const container = document.querySelector("#container");

const image_container = document.createElement("div");
image_container.id = "image";

const img = document.createElement("img");
img.src = "../image/" + pokemon.id + ".png";

image_container.append(img);

const names = document.createElement("h2");
names.innerText = pokemon.name;

const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.append(tbody);

for (let key in pokemon) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = key;
    const td2 = document.createElement("td");
    td2.innerText = pokemon[key];

    tr.append(td1, td2);
    tbody.appendChild(tr);
}

container.append(image_container, names, table);
