class search {
    static setDictionary(dictionary) {
        search.dictionary = dictionary;

        for (let key in dictionary) {
            let link = document.createElement("a");
            link.setAttribute("href", key);
            link.appendChild(document.createTextNode(dictionary[key]));

            let paragraph = document.createElement("p");
            paragraph.appendChild(link);

            document.getElementById("search.results").appendChild(paragraph);
        }
    }
};

document.getElementById("search.text").addEventListener("input", function(e) {
    let results = document.getElementById("search.results");

    while (results.firstChild)
        results.removeChild(results.lastChild);

    for (let key in search.dictionary) {
        if (search.dictionary[key].includes(e.target.value)) {
            let link = document.createElement("a");
            link.setAttribute("href", key);
            link.appendChild(document.createTextNode(search.dictionary[key]));

            let paragraph = document.createElement("p");
            paragraph.appendChild(link);

            results.appendChild(paragraph);
        }
    }
});