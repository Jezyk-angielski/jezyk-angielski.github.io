let dictionary;

fetch("/dictionary.json")
    .then(response => response.json())
    .then(json => {
        dictionary = json;

        for (let [key, value] in Object.entries(dictionary)) {
            let link = document.createElement("a");
            link.setAttribute("href", key);
            link.appendChild(document.createTextNode(value));

            let paragraph = document.createElement("p");
            paragraph.appendChild(link);

            document.getElementById("results").appendChild(paragraph);
        }
    });