var Login = function() {
    
    var handlePublicSubmitForm = function() {
        
        var form = $('#project-opportunity-form');
        var error = $('.alert-danger', form);
        var success = $('.alert-success', form);
        
        $("#submit-project-opportunity-form").click(function(){
            $(".form-group").removeClass('has-error');
            $(".form-group").find(".help-block").hide();
            $("#project-opportunity-form").find("#cap-error").hide();
            success.show();
            error.hide();
            Metronic.scrollTo(success, -200);
        });
        
        $('#project-opportunity-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                deve_name: {
                    required: true
                },
                deve_email: {
                    required: true,
                    email: true
                },
                deve_confirm_email: {
                    required: true,
                    email: true,
                    equalTo: 'deve_email'
                },
                deve_contact_fname: {
                    required: true
                },
                deve_contact_lname: {
                    required: true
                },
                deve_prj_location: {
                    required: true
                },
                deve_prj_date: {
                    required: true,
                    date: true
                },
                deve_prj_control: {
                    required: true
                },
                deve_prj_dev_statge: {
                    required: true
                },
                deve_prj_ppa: {
                    required: true
                },
                deve_prj_fy_production: {
                    required: true
                },
                deve_prj_ppa_rate: {
                    required: true
                },
                deve_prj_ppa_team: {
                    required: true
                },
                deve_prj_ppa_escalator: {
                    required: true
                },
                cap: {
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

        $('#project-opportunity-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('#project-opportunity-form').validate().form()) {
                    $('#project-opportunity-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    }
    
    var handleLogin = function() {

        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                username: {
                    required: "Username is required."
                },
                password: {
                    required: "Password is required."
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.login-form')).show();
                $('.alert-success', $('.login-form')).show();
            },

            highlight: function(element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function(form) {
                form.submit(); // form validation success, call ajax form submit
            }
        });

        $('.login-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    }

    var handleForgetPassword = function() {
        $('.forget-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                email: {
                    required: "Email is required."
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit   

            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function(form) {
                form.submit();
            }
        });

        $('.forget-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        jQuery('#forget-password').click(function() {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    var handleRegister = function() {

        function format(state) {
            if (!state.id) return state.text; // optgroup
            return "<img class='flag' src='img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
        }

        if (jQuery().select2) {
	        $("#select2_sample4").select2({
	            placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
	            allowClear: true,
	            formatResult: format,
	            formatSelection: format,
	            escapeMarkup: function(m) {
	                return m;
	            }
	        });


	        $('#select2_sample4').change(function() {
	            $('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
	        });
    	}

        $('.register-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {

                fullname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true
                },
                city: {
                    required: true
                },
                country: {
                    required: true
                },

                username: {
                    required: true
                },
                password: {
                    required: true
                },
                rpassword: {
                    equalTo: "#register_password"
                },

                tnc: {
                    required: true
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                tnc: {
                    required: "Please accept TNC first."
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit   

            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },

            submitHandler: function(form) {
                form.submit();
            }
        });

        $('.register-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });

        jQuery('#register-btn').click(function() {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }
    
    var handleEmailTemplateSystemForm = function() {
        
        var form = $('#email_template_system');
        var error = $('.alert-danger',form);
        var success = $('.alert-success',form);
        
        $('#email_template_system #system_template_save').click(function(){
            $(".inbox-form-group").removeClass('has-error');
            $(".inbox-form-group").find(".help-block").hide();
            success.show();
            error.hide();
            Metronic.scrollTo(success, -200);
            return false;
        });
        
        form.validate({
            ignore: ':hidden:not("#email_template_msg_system")',
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            errorPlacement: function(error, element) { },
            rules: {
                subject_system: {
                    required: true
                },
                email_template_msg_system: {
                    required: true
                },
                template_name_system: {
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
                console.log(element);                  
                $(element).closest('.inbox-form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element).closest('.inbox-form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.inbox-form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success.show();
                error.hide();
                form.submit(); // form validation success, call ajax form submit
            }
        });

        /*$('#email_template_system input').keypress(function(e) {
            if (e.which == 13) {
                if (form.validate().form()) {
                    form.submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });*/
    }
    
    var handleEmailTemplateDirectForm = function() {
        
        var form = $('#email_template_direct');
        var error = $('.alert-danger',form);
        var success = $('.alert-success',form);
        
        $('#email_template_direct #direct_template_save').click(function(){
            $(".inbox-form-group").removeClass('has-error');
            $(".inbox-form-group").find(".help-block").hide();
            success.show();
            error.hide();
            Metronic.scrollTo(success, -200);
            return false;
        });
        
        form.validate({
            ignore: ':hidden:not("#email_template_msg_direct")',
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            errorPlacement: function(error, element) { },
            rules: {
                subject_direct: {
                    required: true
                },
                direct_message: {
                    required: true
                },
                choosen_template: {
                    required: true
                },
                template_direct: {
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
                console.log(element);                  
                $(element).closest('.inbox-form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element).closest('.inbox-form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.inbox-form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success.show();
                error.hide();
                form.submit(); // form validation success, call ajax form submit
            }
        });

        /*$('#email_template_system input').keypress(function(e) {
            if (e.which == 13) {
                if (form.validate().form()) {
                    form.submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });*/
    }
    
    /* Sign Form */
    var handleSignForm = function() {
        
        /* Begin for note form tool validation -------------------------------  */
        var form = $('#sign_form');
        var error = $('.alert-danger', form);
        var success = $('.alert-success', form);
        
       /* $("#save_template_direct").click(function(){
            $(".inbox-form-group, .form-group").removeClass('has-error');
            $(".inbox-form-group, .form-group").find(".help-block-error").hide();
            success.hide();
            error.hide();
            //Metronic.scrollTo(success, -200);
        });*/
        
        form.validate({
            ignore: ':hidden:not("#sign_pad")',
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            errorPlacement: function(error, element) { },
            rules: {
                f_name: {
                    required: true
                },
                l_name: {
                    required: true
                },
                title: {
                    required: true
                },
                sign_pad: {
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
                //success.show();
                error.hide();
                form.submit(); // form validation success, call ajax form submit
            }
        });

        $('#sign_form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('#sign_form').validate().form()) {
                    $('#sign_form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
         /* End for note form tool validation ------------------------------- */
    }

    return {
        //main function to initiate the module
        init: function() {

            handleLogin();
            handleForgetPassword();
            handleRegister();
            handlePublicSubmitForm();
            handleEmailTemplateSystemForm();
            handleEmailTemplateDirectForm();
            handleSignForm();
        }

    };

}();