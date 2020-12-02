
const app = getApp()
Page({
    data: {
        animation: {}
    },
    onLoad() {

    },
    onshow(){
        console.log(123)
        swan.setPageInfo({
            title: '小西的说真话和大冒险',
            keywords: '百度，真心话，大冒险',
            description: '朋友、亲友聚会玩儿的真心话大冒险游戏',
            image: [
                '../../images/background.jpg'
            ]
        })

    },

    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    select_dmx(){
       app.data.select_num = 1;
       app.data.ul="../../images/1.2.png";


            },
    select_zxh(){
        app.data.select_num = 0;
        app.data.ul="../../images/1.1.png"
            },


});