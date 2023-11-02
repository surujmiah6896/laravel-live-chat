import './bootstrap';
$(document).ready(function(){
    $(document).on('click',"#send_message",function(e){
        e.preventDefault();

        let user_name = $('#user_name').val();
        let message = $('message').val();
        // alert(user_name);
        if(user_name == '' || message == ''){
            alert('Please Enter both username and message')
            return false;
        }

        $.ajax({
            method: 'post',
            url: '/send-message',
            data:{user_name: user_name,message:message},
            success: function(data){
                //
            }
        });
    });
});

window.Echo.channel('chat').listen('.message',(e)=>{
    $('#messages').append('<p><strong>' + e.user_name + '</strong>' + ': ' + e.message + '</p>');
    $('#message').val('');
})
