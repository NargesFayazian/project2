$(document).ready(function(){
    $.get("/api/all", function(data) {
        if (data.length !== 0) {
    
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].user_Name)
                    var name=data[i].user_Name;
                    var phone=data[i].phone;
                    var location=data[i].id.location;
                    var store=data[i].id.store;
                    var order=data[i].id.order_info;
                    var newRow = $("<tr>").append(
                    $("<td>").text(name),
                    $("<td>").text(phone),
                    $("<td>").text(location),
                    $("<td>").text(store),
                    $("<td>").text(order),
                    $("<td><button type='button' class='btn btn-success' id='accept' style='background-color: #92c800' ;'value='Submit'>" + "submit" + "</button>"),
                );
                $("#table").append(newRow);
            } 
    
    }
    });
});