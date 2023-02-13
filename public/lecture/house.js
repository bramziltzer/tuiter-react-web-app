
// json
const house = {
rooms: 3,
baths: 2,
sqft: 1500
}

// these now reference the above divs, we can inject content into them
const roomsDiv = document.getElementById('rooms')
const bathsDiv = document.getElementById('baths')
const sqftDiv = document.getElementById('sqft')

// injecting
roomsDiv.innerText = house.rooms
bathsDiv.innerText = house.baths
sqftDiv.innerText = house.sqft
