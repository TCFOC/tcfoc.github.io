///// To fit text, set class to "fit-text" /////

function fitText(el, maxPercent = 300) {
    const parent = el.parentElement;

    // Available width = parent's width minus its left/right padding
    const cs = getComputedStyle(parent);
    const availableWidth =
        parent.clientWidth -
        parseFloat(cs.paddingLeft) -
        parseFloat(cs.paddingRight);

    // Maximum font size (e.g. 300%)
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const maxPx = rootFontSize * (maxPercent / 100);

    // Start at maximum
    el.style.fontSize = maxPx + "px";
    el.style.whiteSpace = "nowrap";

    // Shrink until it fits
    while (
        el.scrollWidth > availableWidth &&
        parseFloat(el.style.fontSize) > 1
    ) {
        el.style.fontSize =
            (parseFloat(el.style.fontSize) - 1) + "px";
    }
}

function fitAllText(maxPercent = 300) {
    document.querySelectorAll(".fit-text").forEach(el => fitText(el, maxPercent));
}

window.addEventListener("load", () => fitAllText());
window.addEventListener("resize", () => fitAllText());

// Optional: automatically refit if page contents change
new ResizeObserver(() => fitAllText()).observe(document.body);