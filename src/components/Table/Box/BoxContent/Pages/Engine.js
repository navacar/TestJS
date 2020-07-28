var root = document.querySelector(':root');

export const propertiesChange = (
fisrtOpacity, secondOpacity, thirdOpacity, fouthOpacity, fifthOpacity,
firstFontWeight, secondFontWeight, thirdFontWeight, fouthFontWeight, fifthFontWeight
) => {
    root.style.setProperty('--firstOpacity', fisrtOpacity);
    root.style.setProperty('--secondOpacity', secondOpacity);
    root.style.setProperty('--thirdOpacity', thirdOpacity);
    root.style.setProperty('--fouthOpacity', fouthOpacity);
    root.style.setProperty('--fifthOpacity', fifthOpacity);

    root.style.setProperty('--firstFontWeight', firstFontWeight);
    root.style.setProperty('--secondFontWeight', secondFontWeight)
    root.style.setProperty('--thirdFontWeight', thirdFontWeight)
    root.style.setProperty('--fouthFontWeight', fouthFontWeight)
    root.style.setProperty('--fifthFontWeight', fifthFontWeight)
}

export const pageNumberChange = (pageNumber, pageArray) => {
    if(pageNumber == (pageArray.length - 1))
        return (pageNumber - 1)
    if(pageNumber == (pageArray[0]))
        return (pageNumber + 1)
}