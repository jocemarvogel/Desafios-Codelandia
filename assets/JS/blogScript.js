const curdido = document.querySelectorAll("#coracao")

for (let curtir of curdido) {
    curtir.addEventListener('click', () => liked(curtir));
}

function liked(item) {
    if (item.classList.contains("coracao")) {
        item.classList.remove("coracao");
        item.classList.add("coracaoClicado");
    } else {
        item.classList.remove("coracaoClicado");
        item.classList.add("coracao")
    }
}
