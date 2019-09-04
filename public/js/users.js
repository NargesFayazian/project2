
    console.log("hi");
   
//===============================================================================================
    $("#signup2").click( function (event) {
        event.preventDefault();
        var newUser = {
            frist_name: $("#frist_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            phone: $("#phone").val().trim(),
            Email: $("#Email").val().trim(),
            password: $("#password").val()
        };

        $.post("/api/users", newUser).then(function (data) {
            console.log(data);
        });
            $(".form").hide();
            $(".alert").show();
    });
   