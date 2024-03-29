addEventListener("wheel", (event) => {
    if(event.deltaY > 0){
        getPositionHeader()
    }})

function getPositionHeader() {
    const headerElement = document.getElementsByTagName("header")[0];
    let rect = headerElement.getBoundingClientRect(),
        scroolTop = window.pageYOffset

    console.log(rect)
}