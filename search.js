class search {
    static setDictionary(dictionary) {
        search.dictionary = dictionary;

        setTimeout(function() {
            for (let [key, value] of Object.entries(search.dictionary)) {
                if (value.includes(document.getElementById("search.text").value)) {
                    let link = document.createElement("a");
                    link.setAttribute("href", key);
                    link.appendChild(document.createTextNode(value));

                    let paragraph = document.createElement("p");
                    paragraph.appendChild(link);

                    document.getElementById("search.results").appendChild(paragraph);
                }
            }
        }, 0);
    }
};

document.getElementById("search.text").addEventListener("input", function(e) {
    let results = document.getElementById("search.results");

    while (results.firstChild)
        results.removeChild(results.lastChild);

    for (let [key, value] of Object.entries(search.dictionary)) {
        if (value.includes(e.target.value)) {
            let link = document.createElement("a");
            link.setAttribute("href", key);
            link.appendChild(document.createTextNode(value));

            let paragraph = document.createElement("p");
            paragraph.appendChild(link);

            results.appendChild(paragraph);
        }
    }
});