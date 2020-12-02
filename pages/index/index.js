
const app = getApp();

Page({
    data: {
        mild_isChecked: false,
        moderate_isChecked: false,
        several_isChecked: false,
    },
    onLoad() {

        this.setData({
            text:"请选择一个适合你们的程度吧",
            ul:app.data.ul


        });
        const CanvasContext = swan.createCanvasContext("myCanvas");
        CanvasContext.setFillStyle('#ffff00');
        CanvasContext.arc(100, 100, 50, 0, 2 * Math.PI);
        CanvasContext.fill();
        CanvasContext.draw();
        CanvasContext.drawImage("../../images/zxh.gif")
        // 监听页面加载的生命周期函数

        this.animation = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-in-out',
            delay: 0,
            transformOrigin: '50% 50% 0'
        });

    },
    onshow(){
        console.log("32134")
        swan.setPageInfo({
            title: '小西的说真话和大冒险',
            keywords: '百度，真心话，大冒险',
            description: '朋友、亲友聚会玩儿的真心话大冒险游戏',
            image: [
                '../../images/background.png'
            ]
        })
    },
    mild(){
        app.data.rank=0;
        this.setData({
            text:"",
            mild_isChecked: true,
            moderate_isChecked: false,
            several_isChecked: false,
        })
    },
    moderate(){
        app.data.rank=1;
        this.setData({
            text:"",
            mild_isChecked: false,
            moderate_isChecked: true,
            several_isChecked: false,
        })
    },
    several(){
        app.data.rank=2;
        this.setData({
            text:"",
            mild_isChecked: false,
            moderate_isChecked: false,
            several_isChecked: true,
        })
    },
    change_text() {
        //var leng = length(app.data.zxh)
        if(app.data.id<20){
            app.data.id=Math.floor(Math.random() * 20 + 1) + 0
        }
        if(app.data.id==20){
            app.data.id=0;
        }

        if(app.data.select_num==0){
            this.setData({
                text:app.data.zxh[app.data.rank][app.data.id]
            })
        }
        if(app.data.select_num==1){

            this.setData({
                text:app.data.dmx[app.data.rank][app.data.id]
            })
        }

    },

    customize_select(){

        if(app.data.zxhid<app.data.zxhnum){
            app.data.zxhid=Math.floor(Math.random() * app.data.zxhnum + 1) + 0
        }
        if(app.data.zxhid==app.data.zxhnum){
            app.data.zxhid=0;
        }//随机抽取一个真心话id

        if(app.data.dmxid<app.data.dmxnum){
            app.data.dmxid=Math.floor(Math.random() * app.data.dmxnum + 1) + 0
        }
        if(app.data.dmxid==app.data.dmxnum){
            app.data.dmxid=0;
        }//随机抽取一个大冒险id


        if(app.data.select_num==0){
            this.setData({
                //text:app.data.customize_zxh[app.data.zxhid]
                text:app.data.zxh_items[app.data.zxhid].text
            })

        }
        if(app.data.select_num==1){

            this.setData({
                //text:app.data.customize_dmx[app.data.dmxid]
                text:app.data.dmx_items[app.data.dmxid].text
            })
        }

    }





})
