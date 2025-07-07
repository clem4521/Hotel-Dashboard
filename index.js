const name = document.getElementById("nameTag");
const unoccupiedBoxesGrid = document.getElementById("unocupiedBoxes");
const occupiedBoxesGrid = document.getElementById("occupiedBoxes");
const homeBox = document.getElementById("home");



let roomsinfo = `[
        {
            "roomNumber":"1A",
            "floor":"1",
            "beds":"2",
            "bedType":"Queen",
            "maxCap":"4",
            "cost":"340",
            "status":"Clean",
            "occupied":true
        },
        {
            "roomNumber":"2A",
            "floor":"1",
            "beds":"4",
            "bedType":"Queen",
            "maxCap":"8",
            "cost":"780",
            "status":"Clean",
            "occupied":true
        },
        {
            "roomNumber":"3A",
            "floor":"1",
            "beds":"4",
            "bedType":"Queen",
            "maxCap":"8",
            "cost":"780",
            "status":"Clean",
            "occupied":false
        }
    ]
     

`;
const obj = JSON.parse(roomsinfo);

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
    const occupiedBox = document.createElement("div");
    
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
            
    
   
    
    let count = 0;
    while(count<obj.length){
        if(obj[count].occupied){
            occupiedBoxesGrid.append(newBox);
        }else{
            unoccupiedBoxesGrid.append(newBox);
        }
        count++;
    }
    
    //Adding styles
    newBox.className = "box";
}

function displayRooms(){
    for(let i = 0;i<obj.length;i++){
        emptyRoom(
            obj[i].roomNumber,
            obj[i].floor,
            obj[i].beds,
            obj[i].bedType,
            obj[i].maxCap,
            obj[i].cost,
            obj[i].status
        );

    }
}

function goToRooms(){
    homeBox.style.display = "none";
}
function goBackHome(){
    homeBox.style.display = "block";
}
console.log(obj[0]);
addName("Bob");
displayRooms();

