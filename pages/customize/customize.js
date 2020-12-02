const app = getApp();
Page({
    data: {
        zxhitems:app.data.zxh_items,
        dmxitems:app.data.dmx_items,
        i:0,
        j:0
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数

        /*
        this.setData({
            zxh_value:app.data.customize_zxh,
            dmx_value:app.data.customize_dmx
        })*/
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
    bindKeyInput_zxh(e){
        app.data.zxh_str=e.detail.value;
    },
    bindKeyInput_dmx(e){
        app.data.dmx_str=e.detail.value;
    },
    submit_zhx(){
        /*
        app.data.customize_zxh[app.data.zxhnum]=app.data.str;
        app.data.zxhnum++;
        this.setData({
            zxh_value:app.data.customize_zxh
        })*/
        app.data.zxh_items[app.data.zxhnum].text=app.data.zxh_str;
        app.data.zxhnum++;
        this.setData({
            zxhitems:app.data.zxh_items,
            zxh_text:""
        })
        swan.showToast({
            title: '提交成功',
            duration:500,
            mask:true,
        });

    },
    submit_dmx(){
        /*
        app.data.customize_dmx[app.data.dmxnum]=app.data.str;
        app.data.dmxnum++;
        this.setData({
            dmx_value:app.data.customize_dmx
        })*/
        app.data.dmx_items[app.data.dmxnum].text=app.data.dmx_str;
        app.data.dmxnum++;
        this.setData({
            dmxitems:app.data.dmx_items,
            dmx_text:""
        })
        swan.showToast({
            title: '提交成功',
            duration:500,
            mask:true,
        });
    },
    checkboxChange_zxh: e => {
         app.data.value_zxh=e.detail.value;
    },
    checkboxChange_dmx: e => {
         app.data.value_dmx=e.detail.value;
    },
    delete(){

        for(this.data.i=0;this.data.i<app.data.value_zxh.length;this.data.i++){
            app.data.zxh_items[app.data.value_zxh[this.data.i]].text="";
        }
        for(this.data.i=0;this.data.i<50;this.data.i++){
            app.data.zxh_items[this.data.i].checked="false";
        }

        app.data.value_zxh=app.data.value_zxh.sort();//按照从小到大排序，存储的是被选中的应该被删除的内容的下标
        for(this.data.i=app.data.value_zxh.length-1;this.data.i>=0;this.data.i--){
            for(this.data.j=app.data.value_zxh[this.data.i];this.data.j<=app.data.zxhnum;this.data.j++){
                 app.data.zxh_items[this.data.j].text= app.data.zxh_items[this.data.j+1].text
            }

        }
        for(app.data.i=app.data.zxhnum-app.data.value_zxh.length;app.data.i<50;app.data.i++){
            app.data.zxh_items[app.data.i].text=""
        }
        app.data.zxhnum=0
        for(this.data.i=0;this.data.i<50;this.data.i++){
            if(app.data.zxh_items[this.data.i].text!=""){
                app.data.zxhnum++;//重新计数
            }
        }
        //删除排序
        this.setData({
            zxhitems:app.data.zxh_items
        })//即时显示





        for(this.data.i=0;this.data.i<app.data.value_dmx.length;this.data.i++){
            app.data.dmx_items[app.data.value_dmx[this.data.i]].text="";
            app.data.dmx_items[app.data.value_dmx[this.data.i]].checked="false"
        }
        app.data.value_dmx=app.data.value_dmx.sort();//按照从小到大排序，存储的是被选中的应该被删除的内容的下标
        for(this.data.i=app.data.value_dmx.length-1;this.data.i>=0;this.data.i--){
            for(this.data.j=app.data.value_dmx[this.data.i];this.data.j<=app.data.dmxnum;this.data.j++){
                 app.data.dmx_items[this.data.j].text= app.data.dmx_items[this.data.j+1].text
            }

        }
        for(app.data.i=app.data.dmxnum-app.data.value_dmx.length;app.data.i<50;app.data.i++){
            app.data.dmx_items[app.data.i].text=""
        }
        app.data.dmxnum=0
        for(this.data.i=0;this.data.i<50;this.data.i++){
            if(app.data.dmx_items[this.data.i].text!=""){
                app.data.dmxnum++;//重新计数
            }
        }
        this.setData({
            dmxitems:app.data.dmx_items
        })




    }
});