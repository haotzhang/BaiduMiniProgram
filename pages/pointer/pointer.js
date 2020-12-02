const app = getApp()
Page({
    data: {
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
        swan.setPageInfo({
            title: '小西的说真话和大冒险',
            keywords: '百度，真心话，大冒险',
            description: '朋友、亲友聚会玩儿的真心话大冒险游戏',
            image: [
                '../../images/3.gif',
                '../../images/background.png'
            ]
        })

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
    whirl(){
        app.data.i=Math.floor(Math.random() * 1000 + 1) + 0
        this.setData({
            i : app.data.i
        })
    },
    imageLoad(e) {
        console.log('image', e.type);
    },
    imageError(e) {
        console.log('image', e.type);
    },
    onLoad() {
        this.animation = swan.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
            delay: 0,
            transformOrigin: '50% 50%'
        });
    },
    rotate() {
        this.animation.rotate(Math.random() * 4500 - 360).step();
        this.setData({
            animation: this.animation.export()
        });
    }
});