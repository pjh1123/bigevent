
var user = {
    user_login:function(userName,password,callback){
        $.post(URL.ulogin_url,{user_name:userName,password:password},function(res){
            callback(res);
        })

    },
    user_logout:function(){

    }
}