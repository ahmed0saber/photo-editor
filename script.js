let imageContainer = document.getElementsByClassName('image-container')[0]
const setImageContainerSize = () => imageContainer.style.height = imageContainer.offsetWidth + "px"
setImageContainerSize()

var foto
window.onload = () => {
    foto = new Foto()
}
const makeGrayScale = () => {
    if(!imageImported){
        return
    }
    foto.grayscale()
}
const makeBright = () => {
    if(!imageImported){
        return
    }
    foto.makeBright()
}
const makeDark = () => {
    if(!imageImported){
        return
    }
    foto.makeDark()
}
const makeBlur = () => {
    if(!imageImported){
        return
    }
    foto.applyBlurFilter()
}
const makeEmboss = () => {
    if(!imageImported){
        return
    }
    foto.applyEmbossFilter()
}
const makeSharp = () => {
    if(!imageImported){
        return
    }
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