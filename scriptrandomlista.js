const names = [
    "Accordini",
    "Badalini",
    "Bajardo",
    "Bonura",
    "Corso",
    "Faccincani",
    "Faedo",
    "Fossati",
    "Francavilla",
    "Gaburo",
    "Gatti",
    "ManzaTi",
    "Perantoni",
    "Perotti",
    "Pozzerle",
    "Rettore",
    "Righetti",
    "Rigo",
    "Romano",
    "Somma",
    "Todorovic",
    "Giovanni",
    "Teresa",
    "Troccoli",
    "Zancarli",
    "Zanotti",
];

function shuffle(array) {
    var tmp, current, top = array.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}


$("#test").click(function () {
    for (var a = [], i = 0; i < 26; ++i) a[i] = i;
    a = shuffle(a);
    $('#list').html('');
    for(j=0; j<26; j++){
        $('#list').append(`<li>${names[a[j]]}</li>`);
    }
    
});