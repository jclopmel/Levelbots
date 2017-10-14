$.getJSON( "https://levelbot.com/hiring/companies.json", function( data ) {                 //data request
    var info    = data;
    var names   = [];
    /*-------------------------------------------- GET for name, url and id---------------------------------------*/
    for (var i=0; i<info.length; i++) {

        var showData    = data[i].name;                                                     //Data request: name
        var showData2   = data[i].homepage_url;                                             //Data request: url                       
        var showData3   = data[i]._id.$oid;                                                 //Data request: id

        names.push(showData);
        $("select").append("<option value="+showData+">"+showData+"</option>");

        if (showData == $("select").val()){
            $("select").append("<h3>"+showData+"</h3>");
            $("select").append("<h3>"+showData+"</h3>");

        }

    }

    

    /*-------------------------------------------- GET for company object-----------------------------------------*/
    //No me queda claro es showData1 o showData3
    /*for (var i=0; i<info.length; i++) {

        var showData    = data[i];                                                     //Data request: name           
        var showData3   = data[i]._id;                                                 //Data request: id object

        console.log(" Object: "+showData);
        console.log(" Object: "+showData3);
    }*/

    /*-------------------------------------------- GET for name and products---------------------------------------*/
    /*for (var i=0; i<info.length; i++) {

        var showData    = data[i].name;                                                 //Data request: name
        var showData2   = data[i].products;

        for (var j=0; j<showData2.length; j++) {

            var prod    = showData2[j].name;                                            //Data request: products by name
            console.log("Nombre : "+showData+" productos: "+prod);                      
        }
    }*/

    /*-------------------------------------------- GET for name, staff and position---------------------------------------*/
    
    //Mantiene un filtro según los que trabajan actualmente o no
    /*for (var i=0; i<info.length; i++) {

        var showData    = data[i].name;                                                 //Data request: name
        var showData2   = data[i].relationships;

        for (var j=0; j<showData2.length; j++) {

            var current         = showData2[j].is_past;                                             //Data request: staff currently working
            if(!current){

                var staffName       = showData2[j].person.first_name;                               //Data request: staff by first_name
                var staffSurname    = showData2[j].person.last_name;                                //Data request: staff by last_name
                var title           = showData2[j].title;                                           //Data request: staff by title

                console.log("Empresa : "+showData+" nombre: "+staffName+" "+staffSurname+" y su puesto es: "+title);

            }                      
        }
    }*/


    console.log(names);

});