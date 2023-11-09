console.log("--- Page 4 ---");

const classes = ["B1H", "B1J", "B1Test", "B1K", "B1L", "B1Test", "B1M", "B1N", "B1P"];

const list = document.querySelector('ul');

for (let i = 0; i < classes.length; i++) {
    const oneClass = classes[i];
    displayClass(oneClass);
}

function displayClass(oneClass){
    if(oneClass != 'B1Test'){
        list.innerHTML += '<li>' + oneClass + '</li>';
    }
}

const lengthArray = [6, 10, 5, 4];
const widthArray = [7, 9, 5, 8];
let totalSurface = 0;
for (let i = 0; i < lengthArray.length; i++) {
    const length = lengthArray[i];
    const width = widthArray[i];
    totalSurface = totalSurface + calculateSurface(length, width);
    
}
console.log(totalSurface);


function calculateSurface(length, width){
    const surface = length * width;
    return surface;
}

