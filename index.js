const name = document.getElementById("nameTag");
const boxesGrid = document.getElementById("boxes");

function addName(input){
    name.innerText = input;
}
function emptyRoom(
    roomNumInput,
    floorNumInput,
    bedInput,
    bedTypeInput,
    maxCapInput,
    costInput,
    statusInput
    ){
        
    //Creating the elements
    
    const newBox = document.createElement("div");
    
    const roomNum = document.createElement("p");
    const floorNum = document.createElement("p");
    const beds = document.createElement("p");
    const bedType = document.createElement("p");
    const maxCap = document.createElement("p");
    const cost = document.createElement("p");
    const status = document.createElement("p");
    
     //Information about the room
    
    roomNum.innerText = `Room Number: ${roomNumInput}`;
    floorNum.innerText = `Floor: ${floorNumInput} floor`;
    beds.innerText = `Beds: ${bedInput}`;
    bedType.innerText = `Bed Type: ${bedTypeInput}`;
    maxCap.innerText = `Max Capacity: ${maxCapInput} People`;
    cost.innerText = `Cost per Night: $${costInput}`;
    status.innerText = `Status: ${statusInput}`;
    
    //Putting the elements that was create in the box
    
    newBox.append(roomNum);
    newBox.append(floorNum);
    newBox.append(beds);
    newBox.append(bedType);
    newBox.append(maxCap);
    newBox.append(cost);
    newBox.append(status);
    
    //Adding the box to the box grid
    
    boxesGrid.append(newBox);
    
    //Adding styles
    newBox.className = "box";
}
addName("Bob");
emptyRoom("1A","1","2","Queen","4","340","Clean");

