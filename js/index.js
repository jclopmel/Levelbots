$.getJSON( "https://levelbot.com/hiring/companies.json", function( data ) {                 //data request
    var info = data;
    for (var i=0; i<info.length; i++) {

        var showData    = data[i].name;                                                     //Data request: name
        var showData2   = data[i].homepage_url;                                             //Data request: url                       
        var showData3   = data[i]._id.$oid;                                                 //Data request: id

        console.log("Nombre: "+showData+" y su web: "+showData2+" y su ID: "+showData3);
    }

    console.log(info);

});