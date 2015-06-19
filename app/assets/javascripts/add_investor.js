var Login = function() {

    var handlePublicSubmitForm = function() {

        var form = $('#investor_create');
        var error = $('.alert-danger', form);
        var success = $('.alert-success', form);

        $("#submit_investor").click(function(){
            $(".form-group").removeClass('has-error');
            $(".form-group").find(".help-block-error").hide();
            success.show();
            error.hide();
            Metronic.scrollTo(success, -200);
        });

        $('#investor_create').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                add_inv1: {
                    required: true
                },
                add_inv2: {
                    required: true
                },
                add_inv3: {
                    required: true
                },                
                add_inv4: {
                    required: true,
                    minlength: 8
                },
                add_inv5: {
                    required: true
                }
            },

            messages: {

            },

            invalidHandler: function(event, validator) { //display error alert on form submit   
                success.hide();
                error.show();
                Metronic.scrollTo(error, -200);
            },

            highlight: function (element) { // hightlight error inputs                    
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success.show();
                error.hide();
                form.submit(); // form validation success, call ajax form submit
            }
        });

        $('#investor_create input').keypress(function(e) {
            if (e.which == 13) {
                if ($('#investor_create').validate().form()) {
                    $('#investor_create').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    


    }


 return {
        //main function to initiate the module
        init: function() {

            handlePublicSubmitForm();
        }

    };
}();