Page({
    onTapJump: function (enevt) {
        wx.redirectTo({
            url: '../post/post',
            success: function () {
                console.log("jump success")
            },
            fail: function() {
                console.log("jump fail")
            },
            complete: function() {
                console.log("jump complete")
            }
        });
    }

})