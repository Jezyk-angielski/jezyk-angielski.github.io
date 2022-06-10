let pages = document.getElementsByClassName("page").length;
let current_page = 1;

document.getElementById("next").addEventListener("click", () => {
    if (page == pages)
        return;

    document.getElementById(`page-${current_page}`).style.animation = "page_exit_animation 1s";
});

for (let page of document.getElementsByClassName("page")) {
    page.addEventListener("animationend", (e) => {
        if (e.target.style.animation.indexOf("page_exit_animation") != 0) {
            e.target.style.display = "none";

            current_page++;
            document.getElementById(`page-${current_page}`).style.display = "block";

            return;
        }
    });
}