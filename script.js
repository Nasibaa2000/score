function changeImg(img) {
    imgMain['src'] = img['target']['src'];
    console.log('on', img['target']['src']);
}

function changeImgToDefault() {
    imgMain['src'] = imgMainURL;
    console.log('off');
}

function makeActive(button) {
    button.classList.remove('.inactive_button')
    button.disabled = false;
}

function makeInactive(button) {
    button.classList.add('.inactive_button')
    button.disabled = true;
}

function checkPositivity() {
   
    if (parseFloat(countInput.value) != parseInt(countInput.value) || parseFloat(countInput.value) <= 0)
        countInput.value = 1;
    if (parseInt(countInput.value) > 1) makeActive(minusButton)
    else makeInactive(minusButton)
}

const imgMain = document.querySelector('.product__images-main');
const imgMainURL = imgMain['src'];
const imgSmall = document.querySelectorAll('.product__images-small');

const minusButton = document.querySelector('.product__info-minus');
const countInput = document.querySelector('.product__info-count');
const plusButton = document.querySelector('.product__info-plus');

imgSmall.forEach(img => {
    img.onmouseover = changeImg;
    img.onmouseout = changeImgToDefault;
}) 

countInput.addEventListener('change', checkPositivity)

minusButton.onclick = function() { countInput.value -= 1; checkPositivity(); }
plusButton.onclick = function() { countInput.value = parseInt(countInput.value) + 1; checkPositivity(); }