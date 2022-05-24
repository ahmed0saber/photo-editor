let imageContainer = document.getElementsByClassName('image-container')[0]
const setImageContainerSize = () => imageContainer.style.height = imageContainer.offsetWidth + "px"
setImageContainerSize()

var foto
window.onload = () => {
    foto = new Foto()
}
const makeGrayScale = () => {
    foto.grayscale()
}
const makeBright = () => {
    foto.makeBright()
}
const makeDark = () => {
    foto.makeDark()
}
const makeBlur = () => {
    foto.applyBlurFilter()
}
const makeEmboss = () => {
    foto.applyEmbossFilter()
}
const makeSharp = () => {
    foto.applySharpFilter()
}
var imageImported = false
const importImage = () => {
    document.getElementById("foto-file").click()
    imageImported = true
}
const downloadImage = () => {
    if(!imageImported){
        return
    }
    foto.export()
}