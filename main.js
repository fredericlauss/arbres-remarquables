
// function closePop() {
//     var toClose = document.getElementById("pop-up");
//     toClose.style.display="none";
// }
function popUp(popupId) {
    var popups = document.getElementsByClassName('popclass');
    for (let i = 0; i < popups.length; i++) {
        const element = popups[i];
        element.style.display="none";
        
    }
    var popUp = document.getElementById(popupId);
    popUp.style.display="flex";
}



var tableau;
var result;
var result2;
var comptemature = 0;

// var du nb d'arbres 
var arrondissement = 0;
var arrondissement1 = 0;
var arrondissement2 = 0;
var arrondissement3 = 0;
var arrondissement4 = 0;
var arrondissement5 = 0;
var arrondissement6 = 0;
var arrondissement7 = 0;
var arrondissement8 = 0;
var arrondissement9 = 0;
var arrondissement10 = 0;
var arrondissement11 = 0;
var arrondissement12 = 0;
var arrondissement13 = 0;
var arrondissement14 = 0;
var arrondissement15 = 0;
var arrondissement16 = 0;
var arrondissement17 = 0;
var arrondissement18 = 0;
var arrondissement19 = 0;
var arrondissement20 = 0;

// var cumul de la taille des arbres
var tailleCUmule1 =0;
var tailleCUmule2 =0;
var tailleCUmule3 =0;
var tailleCUmule4 =0;
var tailleCUmule5 =0;
var tailleCUmule6 =0;
var tailleCUmule7 =0;
var tailleCUmule8 =0;
var tailleCUmule9 =0;
var tailleCUmule10 =0;
var tailleCUmule11 =0;
var tailleCUmule12 =0;
var tailleCUmule13 =0;
var tailleCUmule14 =0;
var tailleCUmule15 =0;
var tailleCUmule16 =0;
var tailleCUmule16 =0;
var tailleCUmule17 =0;
var tailleCUmule18 =0;
var tailleCUmule19 =0;
var tailleCUmule20 =0;

fetch("arbres.json")
    .then(res=> res.json())
    .then(data=> {
        // console.log(JSON.stringify(data[0]["fields"]["arrondissement"]))
        tableau = JSON.stringify(data[0])
        for(var i =0; i<data.length; i++){
            result = data[i]["fields"]["arrondissement"];
            if (result == "PARIS 1ER ARRDT") {
                arrondissement1++;
                tailleCUmule1 = tailleCUmule1 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 2E ARRDT") {
                arrondissement2++;
                tailleCUmule2 = tailleCUmule2 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 3E ARRDT") {
                arrondissement3++;
                tailleCUmule3 = tailleCUmule3 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 4E ARRDT") {
                arrondissement4++;
                tailleCUmule4 = tailleCUmule4 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 5E ARRDT") {
                arrondissement5++;
                tailleCUmule5 = tailleCUmule5 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 6E ARRDT") {
                arrondissement6++;
                tailleCUmule6 = tailleCUmule6 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 7E ARRDT") {
                arrondissement7++;
                tailleCUmule7 = tailleCUmule7 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 8E ARRDT") {
                arrondissement8++;
                tailleCUmule8 = tailleCUmule8 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 9E ARRDT") {
                arrondissement9++;
                tailleCUmule9 = tailleCUmule9 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 10E ARRDT") {
                arrondissement10++;
                tailleCUmule10 = tailleCUmule10 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 11E ARRDT") {
                arrondissement11++;
                tailleCUmule11 = tailleCUmule11 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 12E ARRDT") {
                arrondissement12++;
                tailleCUmule12 = tailleCUmule12 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 13E ARRDT") {
                arrondissement13++;
                tailleCUmule13 = tailleCUmule13 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 14E ARRDT") {
                arrondissement14++;
                tailleCUmule14 = tailleCUmule14 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 15E ARRDT") {
                arrondissement15++;
                tailleCUmule15 = tailleCUmule15 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 16E ARRDT") {
                arrondissement16++;
                tailleCUmule16 = tailleCUmule16 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 17E ARRDT") {
                arrondissement17++;
                tailleCUmule17 = tailleCUmule17 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 18E ARRDT") {
                arrondissement18++;
                tailleCUmule18 = tailleCUmule18 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 19E ARRDT") {
                arrondissement19++;
                tailleCUmule19 = tailleCUmule19 + (data[i]["fields"]["hauteurenm"]);
            }
            if (result == "PARIS 20E ARRDT") {
                arrondissement20++;
                tailleCUmule20 = tailleCUmule20 + (data[i]["fields"]["hauteurenm"]);
            }
            
        }

        // calcul nb "arbres mature"
        for(var a =0; a<data.length; a++){
            result2 = data[a]["fields"]["stadedeveloppement"];
            if (result2 == "Mature") {
                comptemature++;
            }
        }

        // calcul moyen 
        var moyenTailler1 = tailleCUmule1 / arrondissement1;
        var moyenTailler2 = tailleCUmule2 / arrondissement2;
        var moyenTailler3 = tailleCUmule3 / arrondissement3;
        var moyenTailler4 = tailleCUmule4 / arrondissement4;
        var moyenTailler5 = tailleCUmule5 / arrondissement5;
        var moyenTailler6 = tailleCUmule6 / arrondissement6;
        var moyenTailler7 = tailleCUmule7 / arrondissement7;
        var moyenTailler8 = tailleCUmule8 / arrondissement8;
        var moyenTailler9 = tailleCUmule9 / arrondissement9;
        var moyenTailler10 = tailleCUmule10 / arrondissement10;
        var moyenTailler11 = tailleCUmule11 / arrondissement11;
        var moyenTailler12 = tailleCUmule12 / arrondissement12;
        var moyenTailler13 = tailleCUmule13 / arrondissement13;
        var moyenTailler14 = tailleCUmule14 / arrondissement14;
        var moyenTailler15 = tailleCUmule15 / arrondissement15;
        var moyenTailler16 = tailleCUmule16 / arrondissement16;
        var moyenTailler17 = tailleCUmule17 / arrondissement17;
        var moyenTailler18 = tailleCUmule18 / arrondissement18;
        var moyenTailler19 = tailleCUmule19 / arrondissement19;
        var moyenTailler20 = tailleCUmule20 / arrondissement20;





        // resultat myene taille arbre par arrondissment
    
        document.getElementById('stat2').innerHTML = moyenTailler1.toFixed(1);
 
        document.getElementById('stat2_2').innerHTML = moyenTailler2.toFixed(1);

        document.getElementById('stat2_3').innerHTML = moyenTailler3.toFixed(1);

        document.getElementById('stat2_4').innerHTML = moyenTailler4.toFixed(1);
   
        document.getElementById('stat2_5').innerHTML = moyenTailler5.toFixed(1);
  
        document.getElementById('stat2_6').innerHTML = moyenTailler6.toFixed(1);
   
        document.getElementById('stat2_7').innerHTML = moyenTailler7.toFixed(1);
 
        document.getElementById('stat2_8').innerHTML = moyenTailler8.toFixed(1);

        document.getElementById('stat2_9').innerHTML = moyenTailler9.toFixed(1);
 
        document.getElementById('stat2_10').innerHTML = moyenTailler10.toFixed(1);
  
        document.getElementById('stat2_11').innerHTML = moyenTailler11.toFixed(1);
     
        document.getElementById('stat2_12').innerHTML = moyenTailler12.toFixed(1);

        document.getElementById('stat2_13').innerHTML = moyenTailler13.toFixed(1);
       
        document.getElementById('stat2_14').innerHTML = moyenTailler14.toFixed(1);
 
        document.getElementById('stat2_15').innerHTML = moyenTailler15.toFixed(1);

        document.getElementById('stat2_16').innerHTML = moyenTailler16.toFixed(1);
    
        document.getElementById('stat2_17').innerHTML = moyenTailler17.toFixed(1);
     
        document.getElementById('stat2_18').innerHTML = moyenTailler18.toFixed(1);
      
        document.getElementById('stat2_19').innerHTML = moyenTailler19.toFixed(1);

        document.getElementById('stat2_20').innerHTML = moyenTailler20.toFixed(1);



        // resultat nb arbres par arrondissement 
        document.getElementById('stat1').innerHTML = arrondissement1;
        
        document.getElementById('stat1_2').innerHTML = arrondissement2;
        
        document.getElementById('stat1_3').innerHTML = arrondissement3;
        
        document.getElementById('stat1_4').innerHTML = arrondissement4;
        
        document.getElementById('stat1_5').innerHTML = arrondissement5;
        
        document.getElementById('stat1_6').innerHTML = arrondissement6;
        
        document.getElementById('stat1_7').innerHTML = arrondissement7;
        
        document.getElementById('stat1_8').innerHTML = arrondissement8;
        
        document.getElementById('stat1_9').innerHTML = arrondissement9;
        
        document.getElementById('stat1_10').innerHTML = arrondissement10;
        
        document.getElementById('stat1_11').innerHTML = arrondissement11;
        
        document.getElementById('stat1_12').innerHTML = arrondissement12;
        
        document.getElementById('stat1_13').innerHTML = arrondissement13;
        
        document.getElementById('stat1_14').innerHTML = arrondissement14;
        
        document.getElementById('stat1_15').innerHTML = arrondissement15;
        
        document.getElementById('stat1_16').innerHTML = arrondissement16;
        
        document.getElementById('stat1_17').innerHTML = arrondissement17;
        
        document.getElementById('stat1_18').innerHTML = arrondissement18;
        
        document.getElementById('stat1_19').innerHTML = arrondissement19;
        
        document.getElementById('stat1_20').innerHTML = arrondissement20;

        // quelques chiffres

        // stat nb arbres 

        var nbarbres2 = arrondissement1 + arrondissement2 + arrondissement3 + arrondissement4 + arrondissement5 + arrondissement6 + arrondissement7 + arrondissement8 + arrondissement9 + arrondissement10 + arrondissement11 + arrondissement12 + arrondissement13 + arrondissement14 + arrondissement15 + arrondissement16 + arrondissement17 + arrondissement18 + arrondissement19 + arrondissement20;
        document.getElementById('stat2_2_2').innerHTML = nbarbres2;

        // nb maure
        document.getElementById('stat2_2_3').innerHTML = comptemature;
       })
       
