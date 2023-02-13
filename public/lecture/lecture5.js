// jquery has its own entrypoint
console.log(jQuery) // jQuery is a function

const $rooms = $('#rooms')
$rooms.html('<h3>33</h3>')
const roomH3 = $('<h3>33</h3>')
// change style
$rooms.css('color', 'red')
$rooms.css('background-color', 'yellow')

// do multiple transformations with json
roomH3.css({
    'color':'red',
    'background-color':'yellow' // this isn't working because of a span
})
$rooms.html(roomH3)

const jList = $('#jlist')
jList.append('<li>Alice</li>')
jList.append('<li>Bob</li>')
jList.append('<li>Charlie</li>')

// remember this is global namespace, everyone can see everything declared before
for(let k=0;k<students2.length;k++) {
    jList.append(<li>${students2[k].name}</li>)
}