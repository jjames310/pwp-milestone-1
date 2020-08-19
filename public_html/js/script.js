$(document).ready(function () {
    /**
     * jQuery Validate Function
     *
     * This function provides front-end validation for your form.
     * If all tests set up here pass, the form data is AJAX submitted
     * to the mailer.php file.
     *
     * Update this file as needed for your form.
     * All ids and name values must match up to your form here.
     *
     * @author Rochelle Lewis <rlewis37@cnm.edu>
     **/
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        errorLabelContainer: '#output-area',
        errorElement: 'div',

        // rules here define what is good or bad input
        //each rule starts with the form input element's NAME attribute
        rules: {
            name: {
                required: true,
            },
            email: {
                email: true,
                required: true,
            },
            message: {
                required: true,
                maxlength: 2000,
            },
        },
        //error message to display to the end user when rules above dont pass
        messages: {
            name: {
                required: 'Name is a required field',
            },
            email: {
                required: 'Email is a required field',
                email: 'Please provide a valid email address',

            },
            message: {
                required: 'Message is a required field',
                maxlength: 'Message is to long',
            },

        },
        submitHandler: function (form) {
            $("#contact").ajaxSubmit({
                type: "POST",
                url: $('#contact').attr('action'),
                success: function (ajaxOutput) {
                    $("#output-area").css("display", "")
                    $("#output-area").html(ajaxOutput)

                    if($(".alert-success").length >= 1) {
                        $("#contact")[0].reset()

                    }

                }

            })

        }

    })

})