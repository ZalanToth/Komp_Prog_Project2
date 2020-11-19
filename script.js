function ErettsegiTeszt(){
    var szobeli = parseInt(document.getElementById("szobeli").value);
    var irasbeli = parseInt(document.getElementById("irasbeli").value);
    var ossz = (szobeli+irasbeli)/2;

    if (ossz >= 60 && szobeli >= 12 && irasbeli >= 12)
    {
        alert("Átmentél! Osztályzat: 5");
    }
    else if (ossz >= 47 && ossz <= 59 && szobeli >= 12 && irasbeli >= 12)
    {
        alert("Átmentél! Osztályzat: 4");
    }
    else if (ossz >= 33 && ossz <= 46 && szobeli >= 12 && irasbeli >= 12)
    {
        alert("Átmentél! Osztályzat: 3");
    }
    else if (ossz >= 25 && ossz <= 32 && szobeli >= 12 && irasbeli >= 12)
    {
        alert("Átmentél! Osztályzat: 2");
    }
    else if (ossz <= 24 && szobeli >= 12 && irasbeli >= 12)
    {
        alert("Nem mentél át! Osztályzat: 1");
    }
    else if (szobeli <= 12 && irasbeli >= 12)
    {
        alert("Nem mentél át! A szóbeli százaléka nem éri el a 12-t");
    }
    else if (szobeli >= 12 && irasbeli <= 12){
        alert("Nem mentél át! Az írásbeli százaléka nem éri el a 12-t");
    }
    else if (szobeli <= 12 && irasbeli <= 12){
        alert("Nem mentél át! Sem a szóbeli, sem az írásbeli százaléka nem érte el a 12-t");
    }
}
