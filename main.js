
$(document).ready(function () {
    console.log("ready je..")
    var osmosmjerka = new Array(8)
    initializeTable()
    fillTable()
    drawTable()

    $("dodaj").click(function(){
        console.log("dodaj...")
    })

    var row, column, word, words, method;
    words = ["macka", "djeca", "pas", "olovka"]
    index = 0
    do {
        word = words[index]
        method = row = Math.floor(Math.random() * 2)
        row = Math.floor(Math.random() * 8)
        column = Math.floor(Math.random() * 8)
        if (method == 0 && processRow()) {
            drawTable()
            index++
        }
        if (method == 1 && processDiagonale()) {
            drawTable()
            index++
        }
        else {
            row = Math.floor(Math.random() * 8)
            column = Math.floor(Math.random() * 8)
        }
    } while (index < 4)


    // ========== diagonale functions =======
    function processDiagonale() {
        var state = false
        // diagonale- up to down 
        
        if (column + word.length <= 8 && (row+1)-word.length >=0 && checkDiagonale(0)) {
            writeDiagonale(0)
            state = true
        }
        if ((column+1) - word.length >= 0 && row+word.length <=8 && checkDiagonale(1)) {
            writeDiagonale(1)
            state = true
        }
        return state
    }
    function checkDiagonale(value) {
        var state = true
        if(value==0){
            for(var i = 0;i<word.length;i++){
                if(osmosmjerka[row-i][column+i]!='-'){
                    state = false
                }
            }
        }
        if(value==1){
            for(var i = 0;i<word.length;i++){
                if(osmosmjerka[row+i][column-i]!='-'){
                    state = false
                }
            }
        }
        /* if(state) {console.log("slobodna diagonala")}
        else {console.log("nije slobodna diagonala")} */
        return state
    }
    function writeDiagonale(value) {
        // write - up to down
        if (value == 0) {
            for(var i = 0;i<word.length;i++){
                osmosmjerka[row-i][column+i] = word[i]
            }
        }
        if (value == 1) {
            for(var i = 0;i<word.length;i++){
                osmosmjerka[row+i][column-i] = word[i]
            }
        }
    }

    // ========== row functions =============
    function processRow() {
        var state = false
        // row- up to down 
        if (row + word.length <= 7 && checkRow(0)) {
            writeInRow(0)
            state = true
        }
        // row- down to up 
        if ((row + 1) - word.length >= 0 && checkRow(1)) {
            writeInRow(1)
            state = true
        }
        return state
    }
    function writeInRow(value) {
        // write - up to down
        if (value == 0) {
            for (var i = 0; i < word.length; i++) {
                osmosmjerka[row+i][column] = word[i]
            }
        }
        // write - down to up
        if (value == 1) {
            for (var i=0;i<word.length;i++) {
                osmosmjerka[row-i][column] = word[i]
            }
        }
    }
    function checkRow(value) {
        var state = true
        if (value == 0) {
            for (var i = 0; i < word.length; i++) {
                if (osmosmjerka[row+i][column] != '-') {
                    state = false
                }
            }
        }
        if (value == 1) {
            var rowCounter = 0
            for (var i = 0; i < word.length; i++) {
                if (osmosmjerka[row-i][column] != '-') {
                    state = false
                }
            }
        }
        return state

    }

    // ========== table functions =============
    function initializeTable() {
        for (var i = 0; i < 8; i++) {
            osmosmjerka[i] = new Array(8)
        }
    }
    function fillTable() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                osmosmjerka[i][j] = '-'
            }
        }
    }
    function drawTable() {
        $('tr').empty()
        for (var i = 0; i < 8; i++) {
            $('#myTable').append('<tr><td>' + osmosmjerka[i][0] + '</td>' +
                '<td>' + osmosmjerka[i][1] + '</td>' +
                '<td>' + osmosmjerka[i][2] + '</td>' +
                '<td>' + osmosmjerka[i][3] + '</td>' +
                '<td>' + osmosmjerka[i][4] + '</td>' +
                '<td>' + osmosmjerka[i][5] + '</td>' +
                '<td>' + osmosmjerka[i][6] + '</td>' +
                '<td>' + osmosmjerka[i][7] + '</td></td>');
        }
    }
    //============================================================
})