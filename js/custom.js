$(document).ready(
    console.log('TEST')
)

const triggerResponsive = () => {
    let ghostNav = document.getElementById("ghost-nav")
    if(ghostNav.style.display === "block"){
        ghostNav.style.display = "none"
    } else {
        ghostNav.style.display = "block"
    }
}