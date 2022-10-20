let gameRoundIsOver = false;
let elements = [];



function onElementClick(elementRow, column){
    if(gameRoundIsOver)
        return

    initializeElementsArray();
}

function initializeElementsArray(){
    let docElements = document.getElementsByClassName("element");
    let elementRow = [];
    let columnIndex = 0;

    for(docElement of docElements){
        
        elementRow[columnIndex] = element;

        // console.log(elementRow[columnIndex])
        console.log(element)
        // console.log(elementRow);

        if(columnIndex < 2)
            columnIndex++
        else{
            columnIndex = 0;
            // console.log(elementRow)
            elements.push(elementRow);
        }
    }
    console.log(elements);
}