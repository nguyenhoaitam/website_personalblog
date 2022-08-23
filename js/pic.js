var imgSlider = document.querySelector('.img-slider')
var listImg = document.querySelectorAll('.list-images img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var curentIndex = 0

function updateImageByIndex(index) {
    document.querySelectorAll('.list-images div').forEach(item=>{
        item.classList.remove('active')
    })

    curentIndex = index
    imgSlider.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}



listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click', e=>{
        updateImageByIndex(index)
    })
})


prevBtn.addEventListener('click', e=>{
    if (curentIndex == 0){
        curentIndex = listImg.length - 1
    }
    else {
        curentIndex--
    }

    imgSlider.style.animation = ''
    setTimeout(()=>{
        updateImageByIndex(curentIndex)
        imgSlider.style.animation = 'slideL 0.75s ease-in-out forwards'
    }, 200)
})

nextBtn.addEventListener('click', e=>{
    if (curentIndex == listImg.length - 1){
        curentIndex = 0
    }
    else {
        curentIndex++
    }

    imgSlider.style.animation = ''
    setTimeout(()=>{
        updateImageByIndex(curentIndex)
        imgSlider.style.animation = 'slideR 0.75s ease-in-out forwards'
    }, 200)
})

updateImageByIndex(0)

var pics = document.querySelectorAll(".hover-like")
