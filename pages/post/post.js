var dataObj = require('../data/data.js')
Page({
    
    data: {},
    onLoad: function () {
        // this.setData 用来更新 data 中的数据
        this.setData({
            postList: dataObj.postList
        })
    },
    bindchange(e) {
        // console.log(e)
    },
})


