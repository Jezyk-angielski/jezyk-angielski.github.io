let pages = document.getElementsByClassName("page").length;
let current_page = 1;

document.getElementById("next").addEventListener("click", e => {
    if (e.target.className.includes("grayed"))
        return;

    if (current_page == pages) {
        window.location.href = "/kurs";
        return;
    }

    for (let footer of document.getElementsByTagName("footer")) {
        if (footer.className.includes(`page-${current_page}`))
            footer.style.display = "none";
    }

    document.getElementById(`page-${current_page}`).style.animation = "page_exit_animation 1s";
});

for (let page of document.getElementsByClassName("page")) {
    page.addEventListener("animationend", e => {
        if (e.target.style.animation.includes("page_exit_animation")) {
            e.target.style.display = "none";

            current_page++;

            document.getElementById(`page-${current_page}`).style.display = "block";
            document.getElementById(`page-${current_page}`).style.animation = "page_enter_animation 1s";

            if (document.getElementById(`page-${current_page}`).className.includes("exercise"))
                document.getElementById("next").className = "grayed";

            if (current_page == pages)
                document.getElementById("next").textContent = "Zakończ";

            return;
        }
    });
}

for (let correctButton of document.getElementsByClassName("correct")) {
    correctButton.addEventListener("click", e => {
        if (e.target.className.includes("grayed") || e.target.className.includes("chosen"))
            return;

        document.getElementById("next").className = "";

        for (let footer of document.getElementsByTagName("footer")) {
            if (footer.className == e.target.className)
                footer.style.display = "block";
        }

        let page = correctButton.className.split(" ")[0];

        for (let button of document.getElementsByClassName(page)) {
            if (button == e.target)
                button.className = `${page} correct chosen`;
            else
                button.className = `${page} correct grayed`;
        }
    });
}

for (let incorrectButton of document.getElementsByClassName("incorrect")) {
    incorrectButton.addEventListener("click", e => {
        if (e.target.className.includes("grayed") || e.target.className.includes("chosen"))
            return;

        document.getElementById("next").className = "";

        for (let footer of document.getElementsByTagName("footer")) {
            if (footer.className == e.target.className)
                footer.style.display = "block";
        }

        let page = incorrectButton.className.split(" ")[0];

        for (let button of document.getElementsByClassName(page)) {
            if (button == e.target)
                button.className = `${page} incorrect chosen`;
            else
                button.className = `${page} incorrect grayed`;
        }
    });
}