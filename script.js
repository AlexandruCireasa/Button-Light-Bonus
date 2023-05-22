var index = 0
const colors = ['yellow', 'green', 'red'];

function changeColor() {
    button.style.backgroundColor = colors[index];
    ++index
    if(index == colors.length) {
        index = 0
    }
}

button.addEventListener('click', function onClick() {
    changeColor();
});

setInterval(changeColor, 10000);