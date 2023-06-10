let Total = (x, y) => {
    if (isNaN(x) && isNaN(y)) {
        return "Parameters must be numbers";
    }
    else{
        let sum = 0
        for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
            sum += i;
        }
        return sum;
    }
}


let btn = document.getElementById('btn');
let box = document.getElementById('box');
let currentWidth = 200;
let currentHeight = 200;

btn.onclick = () => {
    currentWidth += 50;
    currentHeight += 20;
    box.style.width = currentWidth + 'px';
    box.style.height = currentHeight + 'px';
}
