// preis extern beachten


 const csv_preismodell = {

    saison: ["Sommerferien", "Silvester", "Osterferien", "Herbstferien", "Offseason"],

    extern: [110, 80, 80, 80, 60]

}

var saison = document.getElementById("saison");

var vonDate = document.getElementById("Von");
var bisDate = document.getElementById("Bis");

var res_tage = document.getElementById("res_tage");

var preisProNacht = document.getElementById("price_night");

saison.addEventListener("input",insertValues);

vonDate.addEventListener("input", add_Bis);
bisDate.addEventListener("input", berechne_Tage);

//preisProNacht.addEventListener("input",preis_pro_nacht);

document.getElementById("price_night").innerHTML =    csv_preismodell.extern[csv_preismodell.saison.indexOf(saison.value)] ;

function preis_pro_nacht(){

    document.getElementById("price_night").innerHTML = csv_preismodell.extern[csv_preismodell.saison.indexOf(saison.value)] ;


    
}


function insertValues() {

    preis_pro_nacht();

    console.log("insert values");

var tmp_index=csv_preismodell.saison.indexOf(saison.value);

let totalprice = csv_preismodell.extern[tmp_index]*res_tage.value;


console.log("priceextern" + csv_preismodell.extern[tmp_index] + "toprice" + totalprice);

document.getElementById("sum_price").innerHTML = totalprice;
document.getElementById("sum_days").innerHTML = res_tage.value;

}



function add_Bis() {



    if (!isNaN(new Date(vonDate.value))) {

        console.log("test kat feature");
        bisDate.value = vonDate.value;

        document.getElementById("res_tage").innerHTML = "Deine Anzahl an Nächten beträgt: 0";

        berechne_Tage();
        insertValues();
    }


}



function berechne_Tage() {

 


    console.log(new Date(vonDate.value));
    console.log(new Date(bisDate.value));
    console.log("von " + !isNaN(new Date(vonDate.value)));
    console.log("bis " + !isNaN(new Date(bisDate.value)));


    console.log("vor if")
    if (!isNaN(new Date(vonDate.value)) && !isNaN(new Date(bisDate.value))) {

        var anreise = new Date(vonDate.value);
        var abreise = new Date(bisDate.value);

        console.log("rechne");
        console.log((abreise - anreise) / 1000 / 60 / 60 / 24);
        res_tage.value = (abreise - anreise) / 1000 / 60 / 60 / 24;

       res_tage.innerHTML = "Deine Anzahl an Nächten beträgt: " + res_tage.value;

    }


    //insert values in table
    insertValues();

    //insert price night
    preis_pro_nacht();

}

