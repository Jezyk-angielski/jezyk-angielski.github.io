fetch("/dictionary.json")
    .then(response => response.json())
    .then(dictionary => {
        let params = new URLSearchParams(document.location.search);
        let query = params.get("query");

        document.title = `Wyniki wyszukiwania dla „${query}” - Język angielski`;
        document.getElementById("query").appendChild(document.createTextNode(query));

        let found = false;

        for (let [key, value] of Object.entries(dictionary)) {
            if (value.includes(query)) {
                let link = document.createElement("a");
                link.setAttribute("href", key);
                link.appendChild(document.createTextNode(value));

                let paragraph = document.createElement("p");
                paragraph.appendChild(link);

                document.getElementById("results").appendChild(paragraph);
                found = true;
            }
        }

        if (!found) {
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Nie znaleziono niczego."));

            document.getElementById("results").appendChild(paragraph);
        }
    });