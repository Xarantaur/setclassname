console.log("setclassname")

const pbSetClassname = document.getElementById("pbSetStyle")
const inpElementName = document.getElementById("elementName")
const inpStyleName = document.getElementById("styleName")

function setClassName(){
    const elementName = inpElementName.value
    console.log(elementName)
    const testTag = document.getElementsByTagName(elementName)
    console.log(testTag)

    const elem = document.querySelector("." + elementName)
    console.log(elem)
    //elem.className=inpStyleName.value virkede ikke. det omdøbte class navnet så det ikke kunne kaldes igen.
    elem.className=""
    elem.classList.add(elementName)
    elem.classList.add(inpStyleName.value)
}
pbSetClassname.addEventListener('click',setClassName)