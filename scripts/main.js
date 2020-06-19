let miImage = document.querySelector('img');

miImage.onclick = function () {

    let misrc = miImage.getAttribute(('src'));
    if(misrc === 'images/zorro.png'){
        miImage.setAttribute('src', 'images/zorro2.png');
    } else {
        miImage.setAttribute('src', 'images/zorro.png');
    }


}