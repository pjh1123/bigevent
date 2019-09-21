
var user = {
    user_login:function(userName,password,callback){
        $.post(URL.ulogin_url,{user_name:userName,password:password},function(res){
            callback(res);
        })

    },
    user_logout:function(callback){
         $.post(URL.ulogout_url,function(res){
            callback(res);
         }) 
    },
    user_msg:function(callback){
        $.get(URL.ugetMsg_url,function(res){
            callback(res);
        })
    }
}