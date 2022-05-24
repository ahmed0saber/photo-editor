let imageContainer = document.getElementsByClassName('image-container')[0]
const setImageContainerSize = () => imageContainer.style.height = imageContainer.offsetWidth + "px"
setImageContainerSize()

let image = document.getElementsByClassName('image')[0], 
imageFile = document.getElementsByClassName('image-file')[0]
window.addEventListener('load', function() {
    imageFile.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            image.onload = () => {
                URL.revokeObjectURL(image.src)
            }
            image.src = URL.createObjectURL(this.files[0])
        }
    })
})

let blurFilter = document.getElementsByClassName('filters')[0], 
brightnessFilter = document.getElementsByClassName('filters')[1], 
contrastFilter = document.getElementsByClassName('filters')[2], 
grayscaleFilter = document.getElementsByClassName('filters')[3], 
invertFilter = document.getElementsByClassName('filters')[4], 
huerotateFilter = document.getElementsByClassName('filters')[5], 
saturateFilter = document.getElementsByClassName('filters')[6], 
sepiaFilter = document.getElementsByClassName('filters')[7]
const changeFilter = () => {
    image.style.filter = `blur(${blurFilter.value/20}px) 
    brightness(${brightnessFilter.value}%) 
    contrast(${contrastFilter.value*1.8}%) 
    grayscale(${grayscaleFilter.value}%) 
    invert(${invertFilter.value}%) 
    hue-rotate(${huerotateFilter.value*3.6}deg) 
    saturate(${saturateFilter.value/10}) 
    sepia(${sepiaFilter.value}%)`
}
changeFilter()

function saveImage(){
    html2canvas(imageContainer, {
            onrendered: function(canvas) {
            return Canvas2Image.saveAsPNG(canvas)
        }
    })
}