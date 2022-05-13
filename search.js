let searchParams = new URLSearchParams(document.location.search);
let query = searchParams.get("query");

document.title = `Wyniki wyszukiwania dla „${query}” - Język angielski`;
document.getElementById("query-link").href = document.location.search;

for (let queryElement of document.getElementsByClassName("query"))
    queryElement.appendChild(document.createTextNode(query));

fetch("/course.json")
    .then(course_response => course_response.json())
    .then(course => {
        let lessons_found = false;

        for (let [key, value] of Object.entries(dictionary)) {
            if (value.toLowerCase().includes(query.toLowerCase())) {
                let link = document.createElement("a");
                link.setAttribute("href", `/kurs/${key}`);
                link.appendChild(document.createTextNode(value));

                let paragraph = document.createElement("p");
                paragraph.appendChild(link);

                document.getElementById("results-lessons").appendChild(paragraph);
                lessons_found = true;
            }
        }

        if (!lessons_found) {
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Nie znaleziono niczego."));

            document.getElementById("results-lessons").appendChild(paragraph);
        }

        fetch("/dictionary.json")
            .then(dictionary_response => dictionary_response.json())
            .then(dictionary => {
                let words_found = false;

                for (let [key, value] of Object.entries(dictionary)) {
                    if (value.toLowerCase().includes(query.toLowerCase())) {
                        let link = document.createElement("a");
                        link.setAttribute("href", `/slownik/${key}`);
                        link.appendChild(document.createTextNode(value));

                        let paragraph = document.createElement("p");
                        paragraph.appendChild(link);

                        document.getElementById("results-words").appendChild(paragraph);
                        words_found = true;
                    }
                }

                if (!words_found) {
                    let paragraph = document.createElement("p");
                    paragraph.appendChild(document.createTextNode("Nie znaleziono niczego."));

                    document.getElementById("results-words").appendChild(paragraph);
                }

                document.getElementById("loading").style.display = "none";
                document.getElementById("results-lessons").style.display = "block";
                document.getElementById("results-words").style.display = "block";
            });
    });