const container = document.querySelector('.container');
const mainheading = document.querySelector('h1');
const collage = document.querySelector('.collage');
const header = document.querySelector('header');



const ranCol = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

function changeheadingColor() {
    const x = ranCol()
    console.log(x);
    mainheading.style.color = x;
    // header.style.borderBlockStart= ranCol();

}


function ranNum(num) {
    return Math.random() * num + 50 + "px";
}


// const { scrollHeight, scrollTop, clientHeight } = container;
// console.log(scrollHeight)
// console.log(scrollTop)
// console.log(clientHeight)

setInterval(changeheadingColor,1000);


const loadMoreMiniblocks = () => {
    for (let i = 0; i < 100; i++) {
        const collagebox = document.createElement('div');
        collagebox.classList.add('collagebox');
        collagebox.style.width = ranNum(200);
        collagebox.style.height = ranNum(200);
        collagebox.style.backgroundColor = ranCol();
        collage.appendChild(collagebox);
    }

    container.appendChild(collage);
}

// const loadMoreBlocks = () => {
//     for (let i = 0; i < 2; i++) {
//         const child = document.createElement('div');
//         child.classList.add('child');
//         child.style.backgroundColor = ranCol();
//         childdiv.appendChild(child);
//     }
// }


loadMoreMiniblocks();


container.addEventListener("scroll", (e) => {
    const { scrollHeight, scrollTop, clientHeight } = container;
    if (scrollHeight <= scrollTop + clientHeight) {
        console.log('at bottom')
        loadMoreMiniblocks();
    }
})



