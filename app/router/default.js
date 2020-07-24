module.exports = app => {
    const {router, controller} = app
    //http://127.0.0.1:7001/default/index
    router.get('/default/index', controller.default.home.index)
    //http://127.0.0.1:7001/default/getArticleList
    router.get('/default/getArticleList', controller.default.home.getArticleList)
    //http://127.0.0.1:7001/default/getArticleById
    router.get('/default/getArticleById/:id', controller.default.home.getArticleById)
}