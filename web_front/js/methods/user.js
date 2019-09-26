

/**
 *普通游客权限：查看文章
 */
var article_list = {
    list_search:function(obj,callback){
    //这里文章搜索不但需要全部搜索，还可以按条件搜索，
    //所以需要多次发送不同请求，请求的参数个数并不能确定，所以以对象的形式传入比较合适
        $.get(URL.article_list_search,obj,function(res){
            callback(res)
        });

        }
    
}

