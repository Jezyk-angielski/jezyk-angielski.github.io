let searchParams = new URLSearchParams(document.location.search);
let query = searchParams.get("query");

document.title = `Wyniki wyszukiwania dla „${query}” - Język angielski`;
document.getElementById("query").appendChild(document.createTextNode(query));

fetch("/dictionary.json")
    .then(response => response.json())
    .then(dictionary => {
        let found = false;

        for (let [key, value] of Object.entries(dictionary)) {
            if (value.toLowerCase().includes(query.toLowerCase())) {
                let link = document.createElement("a");
                link.setAttribute("href", `/slownik/${key}`);
                link.appendChild(document.createTextNode(value));

                let paragraph = document.createElement("p");
                paragraph.appendChild(link);

                document.getElementById("results").appendChild(paragraph);
                found = true;
            }
        }

        document.getElementById("loading").style.display = "none";
        if (!found) {
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Nie znaleziono niczego."));

            document.getElementById("results").appendChild(paragraph);
        }
    });