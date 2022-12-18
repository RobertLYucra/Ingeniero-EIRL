const carousels = document.querySelector(".carousels"),
firstVideo = carousels.querySelectorAll("video")[0],
arrowIcon = document.querySelectorAll(".wrappers i");

let isDragStarts = false, isDraggings = false, prevPageXs, prevScrollLefts, positionDiffs;

const showHideIcon = () => {
    // showing and hiding prev/next icon according to carousels scroll left value
    let scrollWidth = carousels.scrollWidth - carousels.clientWidth; // getting max scrollable width
    arrowIcon[0].style.display = carousels.scrollLeft == 0 ? "none" : "block";
    arrowIcon[1].style.display = carousels.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstVideoWidth = firstVideo.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousels scroll left else add to it
        carousels.scrollLeft += icon.id == "left" ? -firstVideoWidth : firstVideoWidth;
        setTimeout(() => showHideIcon(), 60); // calling showHideIcon after 60ms
    });
});

const autoSlides = () => {
    // if there is no image left to scroll then return from here
    if(carousels.scrollLeft - (carousels.scrollWidth - carousels.clientWidth) > -1 || carousels.scrollLeft <= 0) return;

    positionDiffs = Math.abs(positionDiffs); // making positionDiffs value to positive
    let firstVideoWidth = firstVideo.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousels left to take middle img center
    let valDifference = firstVideoWidth - positionDiffs;

    if(carousels.scrollLeft > prevScrollLefts) { // if user is scrolling to the right
        return carousels.scrollLeft += positionDiffs > firstVideoWidth / 3 ? valDifference : -positionDiffs;
    }
    // if user is scrolling to the left
    carousels.scrollLeft -= positionDiffs > firstVideoWidth / 3 ? valDifference : -positionDiffs;
}

const dragStarts = (e) => {
    // updatating global variables value on mouse down event
    isDragStarts = true;
    prevPageXs = e.pageX || e.touches[0].pageX;
    prevScrollLefts = carousels.scrollLeft;
}

const draggings = (e) => {
    // scrolling images/carousels to left according to mouse pointer
    if(!isDragStarts) return;
    e.preventDefault();
    isDraggings = true;
    carousels.classList.add("draggings");
    showHideIcon();
}

const dragStops = () => {
    isDragStarts = false;
    carousels.classList.remove("draggings");

    if(!isDraggings) return;
    isDraggings = false;
    autoSlides();
}

carousels.addEventListener("mousedown", dragStarts);
carousels.addEventListener("touchstart", dragStarts);

document.addEventListener("mousemove", draggings);
carousels.addEventListener("touchmove", draggings);

document.addEventListener("mouseup", dragStops);
carousels.addEventListener("touchend", dragStops);