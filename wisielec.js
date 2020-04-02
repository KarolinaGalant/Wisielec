var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();
var length = password.length;
var password1 = "";
var litery = new Array(35);
var ileskuch = 0;

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

for (i = 0; i < length; i++) {
    if (password.charAt(i) == " ") { //tutaj mamy fun charAt która jest zamiennikiem tablicy[] w łańcuchach znaków
        password1 = password1 + " ";
    } else password1 = password1 + "_";
}


function unsubscribePassword() {
    document.getElementById("panel").innerHTML = password1;

}
// window.onload = unsubscribePassword;
window.onload = start;

function start() {

    var contents = "";
    for (i = 0; i < 35; i++) {
        var element = "lit" + i;
        contents = contents + '<div class="letter" onclick="check(' + i + ')" id=' + element + '>' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) contents = contents + '<div style="clear:both"></div>';
    }

    document.getElementById("alphabet").innerHTML = contents;
    unsubscribePassword();

}

String.prototype.ustawZnak = function(miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function check(nr) {
    var trafiona = false;
    for (i = 0; i < length; i++) {
        if (password.charAt(i) == litery[nr]) {
            password1 = password1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona == true) {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000 ";
        document.getElementById(element).style.cursor = "default ";

    } else {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000 ";
        document.getElementById(element).style.cursor = "default ";
        document.getElementById(element).setAttribute("onclick", ";"); // dzięki temu kolejne kliknięcia nie wykonują f onclick

        ileskuch++;
        var obraz = "img/s" + ileskuch + ".jpg";
        document.getElementById("hangman").innerHTML = '<img src="' + obraz + '"alt=""/>'

    }
    unsubscribePassword();

    //wygrana
    if (password == password1) {
        document.getElementById("alphabet").innerHTML = "Podano prawidłowe hasło: <br/>" + password + '<br/><br/> <span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }

    //przegrana
    if (ileskuch >= 9) {
        document.getElementById("alphabet").innerHTML = "Przegrana. Prawidłowe hasło to: <br/>" + password + '<br/><br/> <span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

    }
}