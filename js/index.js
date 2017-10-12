$.getJSON( "https://levelbot.com/hiring/companies.json", function( data ) {                 //data request
    var info = data;
    /*-------------------------------------------- GET for name, url and id---------------------------------------*/
    /*for (var i=0; i<info.length; i++) {

        var showData    = data[i].name;                                                     //Data request: name
        var showData2   = data[i].homepage_url;                                             //Data request: url                       
        var showData3   = data[i]._id.$oid;                                                 //Data request: id

        console.log("Nombre: "+showData+" y su web: "+showData2+" y su ID: "+showData3);
    }*/

    /*-------------------------------------------- GET for company object-----------------------------------------*/
    //No me queda claro es es showData1 o showData3
    /*for (var i=0; i<info.length; i++) {

        var showData    = data[i];                                                     //Data request: name           
        var showData3   = data[i]._id;                                                 //Data request: id object

        console.log(" Object: "+showData);
        console.log(" Object: "+showData3);
    }*/

    /*-------------------------------------------- GET for name and products---------------------------------------*/
    for (var i=0; i<info.length; i++) {

        var showData    = data[i].name;                                                 //Data request: name
        var showData2   = data[i].products;

        for (var j=0; j<showData2.length; j++) {

            var prod    = showData2[j].name;                                            //Data request: products by name
            console.log("Nombre : "+showData+" productos: "+prod);                      
        }
    }
    console.log(info);

});