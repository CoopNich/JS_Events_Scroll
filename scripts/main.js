const audrey = document.getElementById("audrey")
const container = document.getElementById("container")


document.addEventListener("scroll", function () {
    let widthToPixels = window.scrollY / 3.33;
audrey.style.width = `${widthToPixels}px`;
audrey.style.minWidth = `50px`;
    let heightToPixels = window.scrollY / 4;
audrey.style.height = `${heightToPixels}px`;
audrey.style.minHeight = `100px`
})