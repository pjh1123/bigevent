
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


// 文章列表管理
/**
 1.文章列表查询 全部动态显示
 2.文章列表删除
 3.发布文章
 4.文章编辑
 */
var article_list = {
    list_search:function(obj,callback){
    //这里文章搜索不但需要全部搜索，还可以按条件搜索，
    //所以需要多次发送不同请求，请求的参数个数并不能确定，所以以对象的形式传入比较合适
        $.get(URL.article_list_search,obj,function(res){
            callback(res)
        });

        },


    list_delete:function(id,callback){
        $.get(URL.article_list_del,{id:id},function(res){
            callback(res)
        })
        },

    //文章发布，因为涉及到formdata，所以应该自己写ajax请求
    article_publish:function(fd,callback){
        $.ajax({
            url: URL.article_publish,
            type:'post',
            data:fd,
            processData:false,
            contentType:false,
            success:function(res){
                callback(res);
            }
         })
    },

    //文章编辑
    article_edit:function(fd,callback){
        $.ajax({
            url: URL.article_edit,
            type:'post',
            data:fd,
            processData:false,
            contentType:false,
            success:function(res){
                callback(res);
            }
         })
    },

}

