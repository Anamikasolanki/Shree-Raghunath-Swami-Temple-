function form(){
    var form_name = document.getElementById('name').value;
    if(form_name==""){
        document.getElementById('err_name').innerHTML="*Please enter your name";
        return false;
    }
    if(!form_name.match(/^[a-zA-Z]/)){
        document.getElementById('err_name').innerHTML="*Please enter your name";
        return false;
    }

    var form_city=document.getElementById('city').value;
    if(form_city==""){
        document.getElementById('err_city').innerHTML="*Please enter your city name";
        return false;
    }

    var form_con = document.getElementById('contact').value;
    if(form_con==""){
        document.getElementById('err_con').innerHTML="*Please enter your number";
        return false;
    }
    if(!form_con.match(/^[0-9]/)){
        document.getElementById('err_con').innerHTML="*Please enter valid number";
        return false;
    }

    var form_text=document.getElementById('text').value;
    if(form_text==""){
        document.getElementById('err_text').innerHTML="*Please enter your message";
        return false;
    }

}
// Dark light button start

// Dark light button end