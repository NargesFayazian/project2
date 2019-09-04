
    $("#search").click( function (event) {
    console.log("hi");
    var friend = $("#search").val().trim();
    friend = friend.replace(/\s+/g, "").toLowerCase();
    console.log(friend);
    $.get("/api/"+friend, function(data) {
        console.log(friend);
        if (data) {
            var name=data.frist_name;
            var email=data.Email;
            var newRow = $("<tr>").append(
                $("<td>").text(name),
                $("<td>").text(email),
                $("<td><button type='button' class='btn btn-success' id='accept' style='background-color: #92c800' ;'value='Submit'>" + "Follow Me" + "</button>"),);
            $("#table").append(newRow);
        }
     });
     $("#search").val("");
});

//============buy===================

$("#buyit1").click( function (event) {
    $(".buy1").show();
});
var store1 = $(".store1").text();
$("#store_name").attr("placeholder", store1);

  var locate1 = $(".loc1").text();
$("#order_location").attr("placeholder", locate1);


$("#order1").click( function (event) {
   var order=$("#order_info").val();
   var size=$("#size").val();
   var quantity=$("#quantity").val();
    var newrow=order+","+quantity+","+size;
    console.log(newrow)
    $(".card-body").append(newrow);
});








$("#buyit2").click( function (event) {
    
    $(".buy2").show();
});
$("#buyit3").click( function (event) {
    
    $(".buy3").show();
});