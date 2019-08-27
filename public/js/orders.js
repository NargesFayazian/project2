console.log("hi");

    $("#submit").click( function (event) {
        event.preventDefault();
        var newOrders = {
            store_name: $("#store_name").val().trim(),
            order_location: $("#order_location").val().trim(),
            order_info: $("#order_info").val().trim(),
            size: $("#size").val(),
            quantity: $("#quantity").val(),
            expier_time: $("#expier_time").val().trim()
        };

        $.post("/api/orders",newOrders).then(function (data) {
            console.log(data);
        });
//=======make empty =================================================
$("#store_name").val("");       
$("#order_location").val("");
        $("#order_info").val("");
        $("#size").val("");
        $("#quantity").val("");
        $("#expier_time").val("");
    });
