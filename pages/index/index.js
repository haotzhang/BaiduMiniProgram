/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {

    },
    onLoad() {
        const CanvasContext = swan.createCanvasContext("myCanvas");
        CanvasContext.setFillStyle('#ffff00');
        CanvasContext.arc(100, 100, 50, 0, 2 * Math.PI);
        CanvasContext.fill();
        CanvasContext.draw();
        CanvasContext.drawImage("../../images/zxh.gif")
        // 监听页面加载的生命周期函数
        swan.setPageInfo({
            title: 'XXXX',
            keywords: 'XXXX',
            description: 'XXXXX',
            image: [
                'XXXXX'
            ]
        })
    },
    select_zxh(){
        app.data.select_num = 0;
        this.setData({
            text:app.data.zxh[0]
        })
    },
    select_dmx(){
        app.data.select_num = 1;
        this.setData({
            text:app.data.dmx[0]
        })
    },
    change_text() {
        //var leng = length(app.data.zxh)
        if(app.data.id<5){
            app.data.id++;
        }
        if(app.data.id==5){
            app.data.id=0;
        }
        if(app.data.select_num==0){
            this.setData({
                text:app.data.zxh[app.data.id]
            })
        }
        if(app.data.select_num==1){
            this.setData({
                text:app.data.dmx[app.data.id]
            })
        }


    },
    imageLoad(e) {
        console.log('image', e.type);
    },
    imageError(e) {
        console.log('image', e.type);
    }



})
