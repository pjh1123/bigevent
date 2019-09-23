
/**
 *管理员权限：
 1.管理员用户登录
 2.管理员用户退出
 3.管理员获取个人信息
 */
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

/*
文章类别
1.文章类别查询、
2.文章类别增减、
3.文章类别删除
4.文章类别修改
 */

var article_category = {
    article_search:function(callback){
        $.get(URL.article_search,function(res){
            callback(res)
        })
    },
    article_add:function(name,slug,callback){
        $.post(URL.article_add,{name:name,slug:slug},function(res){
            callback(res);
         }) 
    },
    article_change:function(id,name,slug,callback){
        $.post(URL.article_change,{id:id,name:name,slug:slug},function(res){
            callback(res);
         })
    },
    article_del:function(id,callback){
        $.post(URL.article_del,{id:id},function(res){
            callback(res);
         })
    },


}