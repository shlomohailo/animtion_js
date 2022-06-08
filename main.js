var divelemnt = document.getElementById("elemntdiv");
var heightelemnt = 0;
var internalid;


function startPlay() {
    internalid = setInterval(() => { divelemnt.style.height = heightelemnt++ + "px"; }, 10);

}

function stopPlay() {
    clearInterval(internalid);
}

function eneter(enter) {
    if (event.key == "Enter") {
        stopPlay();
    }
}

var changeColorDiv = document.getElementById('changecolordiv')

function changeColor() {
    setInterval(() => {
        var randomColor = Math.floor(Math.random() * 16777215)

        changeColorDiv.style.backgroundColor = "#" + randomColor;
    }, 1000)
}


var userDiv = document.getElementById('divuser');
var inputhaigt = document.getElementById('input_user_heigt');
var inputwifth = document.getElementById('input_user_width');
var heighstart = 0;
var widthstart = 0;
var internalid;




function getFromUserHandW() {
    internalid = setInterval(() => {
        if (heighstart == inputhaigt.value || widthstart == inputwifth) {
            return;
        }
        userDiv.style.height = heighstart++ + 'px';
        userDiv.style.width = widthstart++ + 'px';

    }, 100)
}

function stopuser(sapce) {
    if (event.key == " ") {
        sropall()
    }
}

function sropall() {

    clearInterval(internalid)
}


var colorsarray = [];
var username;
var usercolor = document.getElementById('user_color');
var printname = document.getElementById('colors');



function namefunc() {
    username = document.getElementById('user_name').value;
}


function userColorsInput() {
    if (colorsarray.length < 5) {
        colorsarray.push(usercolor.value);

    }
}

function printnamecolor() {
    printname.innerText = username;
    internalid = setInterval(() => {
        var randomColor = Math.floor(Math.random() * colorsarray.length);
        printname.style.color = colorsarray[randomColor];

    }, 1000)
}


function stopPrint() {
    clearInterval(internalid)
}

function stopuser(shift) {
    if (event.key == "Shift") {
        sropall()
    }
}