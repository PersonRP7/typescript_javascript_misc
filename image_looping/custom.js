window.addEventListener('load', () => {
    images = document.getElementsByTagName('img')
    for (let start = 0; start < images.length; start++) {
        const element = images[start]
        console.log(`ID: ${element.id}, Width: ${element.width}, Height: ${element.height}`);
    }
})

window.addEventListener('load', () => {
    images = document.getElementsByTagName('img');
    for (const image of images) {
        console.log(`ID: ${image.id}, Width: ${image.width}, Height: ${image.height}`);
    }
})

window.addEventListener('load', () => {
    images = document.getElementsByTagName('img');
    images.forEach(image => {
        console.log(`ID: ${image.id}, Width: ${image.width}, Height: ${image.height}`);
    });
});
