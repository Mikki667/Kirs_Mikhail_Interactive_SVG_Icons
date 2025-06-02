console.log("JavaScript File is linked");

const svgs = document.querySelectorAll("#svgs svg")

console.log(svgs);

function logId() {
    console.log(this.id);
}
svgs.forEach(svg => svg.addEventListener("click", logId));