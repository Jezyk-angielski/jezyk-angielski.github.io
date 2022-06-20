let pages = document.getElementsByClassName("page").length;
let current_page = 1;

document.getElementById("arrow").addEventListener("click", e => {
    if (e.target.className.includes("grayed"))
        return;

    document.getElementById("progress-bar").value--;

    if (current_page == 1) {
        window.location.href = "/kurs";
        return;
    }

    document.getElementById("arrow").className = "grayed";
    document.getElementById("next").className = "grayed";
    document.getElementById("footer").style.display = "none";

    for (let footer of document.getElementsByTagName("footer")) {
        if (footer.className.includes(`page-${current_page}`))
            footer.style.display = "none";
    }

    document.getElementById(`page-${current_page}`).style.animation = "page_exit_backwards_animation 0.5s";
});

document.getElementById("next").addEventListener("click", e => {
    if (e.target.className.includes("grayed"))
        return;
        
    document.getElementById("progress-bar").value++;

    if (current_page == pages) {
        window.location.href = "/kurs";
        return;
    }

    document.getElementById("arrow").className = "grayed";
    document.getElementById("next").className = "grayed";
    document.getElementById("footer").style.display = "none";

    for (let footer of document.getElementsByTagName("footer")) {
        if (footer.className.includes(`page-${current_page}`))
            footer.style.display = "none";
    }

    document.getElementById(`page-${current_page}`).style.animation = "page_exit_animation 0.5s";
});

for (let page of document.getElementsByClassName("page")) {
    page.addEventListener("animationend", e => {
        if (e.target.style.animation.includes("page_enter_backwards_animation") || e.target.style.animation.includes("page_enter_animation")) {
            document.getElementById("arrow").className = "";

            if (document.getElementById(`page-${current_page}`).className.includes("exercise")) {    
                for (let button of document.getElementsByTagName("button")) {
                    if (button.className.includes(`page-${current_page}`) && button.className.includes("chosen")) {
                        document.getElementById("next").className = "";

                        if (button.className.includes("incorrect")) {
                            document.getElementById("footer").style.display = "block";
                            for (let footer of document.getElementsByTagName("footer")) {
                                if (footer.className.includes(`page-${current_page} incorrect`))
                                    footer.style.display = "block";
                            }
                        } else {
                            document.getElementById("footer").style.display = "block";
                            for (let footer of document.getElementsByTagName("footer")) {
                                if (footer.className.includes(`page-${current_page} correct`))
                                    footer.style.display = "block";
                            }
                        }

                        break;
                    }
                }
            } else
                document.getElementById("next").className = "";
        }

        if (e.target.style.animation.includes("page_exit_backwards_animation")) {
            e.target.style.display = "none";

            current_page--;

            document.getElementById(`page-${current_page}`).style.display = "block";
            document.getElementById(`page-${current_page}`).style.animation = "page_enter_backwards_animation 0.5s";

            if (current_page < pages)
                document.getElementById("next").textContent = "Dalej";

            return;
        }

        if (e.target.style.animation.includes("page_exit_animation")) {
            e.target.style.display = "none";

            current_page++;

            document.getElementById(`page-${current_page}`).style.display = "block";
            document.getElementById(`page-${current_page}`).style.animation = "page_enter_animation 0.5s";

            if (current_page == pages)
                document.getElementById("next").textContent = "Zakończ";

            return;
        }
    });
}

for (let correctButton of document.getElementsByClassName("correct")) {
    if (correctButton.tagName != "BUTTON")
        break;

    correctButton.addEventListener("click", e => {
        if (e.target.className.includes("grayed") || e.target.className.includes("chosen"))
            return;

        document.getElementById("next").className = "";
        document.getElementById("footer").style.display = "block";

        for (let footer of document.getElementsByTagName("footer")) {
            for (let object of e.path) {
                if (object.tagName != "BUTTON")
                    continue;

                if (footer.className == object.className) {
                    footer.style.display = "block";
                    break;
                }
            }
        }

        let page = correctButton.className.split(" ")[0];

        for (let button of document.getElementsByClassName(page)) {
            if (button.tagName != "BUTTON")
                continue;
            
            for (let object of e.path) {
                if (object.tagName != "BUTTON")
                    continue;

                if (button == object)
                    button.className = `${page} correct chosen`;
                else
                    button.className = `${page} correct grayed`;
            }
        }
    });
}

for (let incorrectButton of document.getElementsByClassName("incorrect")) {
    if (incorrectButton.tagName != "BUTTON")
        break;

    incorrectButton.addEventListener("click", e => {
        if (e.target.className.includes("grayed") || e.target.className.includes("chosen"))
            return;

        document.getElementById("next").className = "";
        document.getElementById("footer").style.display = "block";

        for (let footer of document.getElementsByTagName("footer")) {
            for (let object of e.path) {
                if (object.tagName != "BUTTON")
                    continue;
                
                if (footer.className == object.className)
                    footer.style.display = "block";
            }
        }

        let page = incorrectButton.className.split(" ")[0];

        for (let button of document.getElementsByClassName(page)) {
            if (button.tagName != "BUTTON")
                continue;

            for (let object of e.path) {
                if (object.tagName != "BUTTON")
                    continue;
                
                if (button == object)
                    button.className = `${page} incorrect chosen`;
                else
                    button.className = `${page} incorrect grayed`;
            }
        }
    });
}