function helloBtn() {
    alert('Hello World')
}

const aElement = document.getElementById('A')
const bElement = document.getElementById('B')
const cElement = document.getElementById('C')


const $aElement = $(aElement)
const $bElement = $(bElement)
const $cElement = $(cElement)

function add2() {

    const aValue = parseInt(aElement.value)
    const bValue = parseInt(bElement.value)
    const cValue = aValue + bValue

    cElement.value = cValue
}

function sub2() {

    const aValue = parseInt(aElement.value)
    const bValue = parseInt(bElement.value)
    const cValue = aValue - bValue

    cElement.value = cValue
}

// JQuery method- no onclick in html file
const $addBtn = $("#addBtn")
const $subtractBtn = $("#subtractBtn")
const $multiplyBtn = $("#multiplyBtn")
const $divideBtn = $("#divideBtn")

function add3() {
    const a = parseInt($aElement.val())
    const b = parseInt($bElement.val())
    $cElement.val(a + b)
}
function sub3() {

}
$addBtn.click(add3) // can use click to automate button testing
