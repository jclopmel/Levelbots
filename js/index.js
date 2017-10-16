    function containerClean (){
        $("#maincontainer").empty();
    }

    var companiesJson = [];

    $.getJSON( "https://levelbot.com/hiring/companies.json", function( data ) {                 //data request
        var info    = data;
        var names   = [];

        var showData,showData2,showData3,showData4,showData5;


        /*-------------------------------------------- Scrapping and constructor---------------------------------------*/

        for (var i=0; i<info.length; i++) {

            showData    = data[i].name;                                                     //Data request: name
            showData2   = data[i].homepage_url;                                             //Data request: url                       
            showData3   = data[i]._id.$oid;                                                 //Data request: id
            showData4   = data[i].products;
            showData5   = data[i].relationships;

            var constructor = {
                    name    :showData,
                    url     :showData2,
                    id      :showData3,
                    products:showData4,
                    members :showData5
            }

            companiesJson.push(constructor);

            names.push(showData);
            $("select").append("<option value="+showData+">"+showData+"</option>");
        
        }

    });

        
        /*-------------------------------------------- Selected options---------------------------------------*/

$("select").change(choose);

function choose(){
    containerClean();

    for (var i=0; i<companiesJson.length; i++){
        if (companiesJson[i].name == $("select").val()){

            $("#maincontainer").append("<h3>"+companiesJson[i].name+"</h3>");
            $("#maincontainer").append("<spam>"+companiesJson[i].url+"</spam>");
            $("#maincontainer").append("<p>"+companiesJson[i].id+"</p>");
            $("#maincontainer").append("<h4> List of products</h4>");
            $("#maincontainer").append("<ol class='list-group'></ol>");
            $("#maincontainer").append("<h4>Currently active staff</h4>");
            $("#maincontainer").append("<ul class='list-group'></ul>");

            
            if($("#productbox").prop('checked')){
                for (var j=0; j<companiesJson[i].products.length; j++){                                //Products
                    $("ol").append("<il>"+companiesJson[i].products[j].name+"</il>");
                }
            }
             
            if($("#staffbox").prop('checked')){                                             
                for (var j=0; j<companiesJson[i].members.length; j++){                                      //Staff

                    var firstname   = companiesJson[i].members[j].person.first_name;
                    var lastname    = companiesJson[i].members[j].person.last_name;
                    var title       = companiesJson[i].members[j].title;
                    var current     = companiesJson[i].members[j].is_past;

                    if(!current){
                        $("ul").append("<il class='list-group-item'>First name: "+firstname+" Last name: "+lastname+" Title: "+title+"</il>");
                    }
                }
            }
        }

    }
}