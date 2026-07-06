///// To fit text, set class to "fit-text" /////

function fitText(el, maxPercent = 300, margin = 10) {
    const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const maxPx = rootFont * maxPercent / 100;

    el.style.whiteSpace = "nowrap";
    el.style.fontSize = maxPx + "px";

    const maxWidth = window.innerWidth - margin * 2;

    while (el.getBoundingClientRect().width > maxWidth &&
           parseFloat(el.style.fontSize) > 1) {
        el.style.fontSize = (parseFloat(el.style.fontSize) - 1) + "px";
    }
}

function fitAllText() {
    document.querySelectorAll(".fit-text").forEach(fitText);
}

window.addEventListener("load", fitAllText);
window.addEventListener("resize", fitAllText);
document.fonts?.ready.then(fitAllText);