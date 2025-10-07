const cursorCollection = document.getElementsByClassName("cursor");
const links = document.getElementsByClassName("link");
const customCursor = cursorCollection[0];

Array.prototype.forEach.call(links, (link) => {
    link.addEventListener("mouseenter", () => {
        customCursor.classList.replace("cursor", "hover");
    });

    link.addEventListener("mouseleave", () => {
        customCursor.classList.replace("hover", "cursor");
    });

    link.addEventListener("mousedown", () => {
        customCursor.classList.add("clicked"); // pressed state
    });

    link.addEventListener("mouseup", () => {
        customCursor.classList.remove("clicked"); // released state
    });
});

window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    customCursor.style.left = `${x}px`;
    customCursor.style.top = `${y}px`;
});