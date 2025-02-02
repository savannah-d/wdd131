const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector("nav");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("nav");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);
handleResize();

function viewerTemplate(pic, alt) {
    return `<div class="viewer show">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedImage = event.target;
    const imageSrc = clickedImage.src;

    // Log the image src to check the path
    console.log(imageSrc);
    
    const fullImageSrc = imageSrc.replace("-sm", "-full");

    console.log("Full image path:", fullImageSrc);

    // Create the modal HTML and insert it
    const modalHTML = viewerTemplate(fullImageSrc, clickedImage.alt);
    document.body.insertAdjacentHTML("afterbegin", modalHTML);

    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}

const gallerySection = document.querySelector(".gallery");
gallerySection.addEventListener("click", viewHandler);
