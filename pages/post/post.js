Page({
    data: {
        // postList: [
        //     {
        //         object: {
        //             date: "19.12.04",
        //         },
        //         title: "我们的回忆",
        //         postImg: "/images/post/post-4.jpg",
        //         avatar: "/images/avatar/avatar-5.png",
        //         content: "我们之间的回忆忽远又忽近。",
        //         readingNum: 102,
        //         collectionNum: {
        //             array: [109]
        //         },
        //         commentNum: 8
        //     },
        //     {
        //         object: {
        //             date: "19.12.04",
        //         },
        //         title: "我们的回忆",
        //         postImg: "/images/post/post-5.jpg",
        //         avatar: "/images/avatar/avatar-1.png",
        //         content: "我们之间的回忆忽远又忽近。",
        //         readingNum: 102,
        //         collectionNum: {
        //             array: [109]
        //         },
        //         commentNum: 8
        //     },
        //     {
        //         object: {
        //             date: "19.12.04",
        //         },
        //         title: "我们的回忆",
        //         postImg: "/images/post/post-1.jpg",
        //         avatar: "/images/avatar/avatar-3.png",
        //         content: "我们之间的回忆忽远又忽近。",
        //         readingNum: 102,
        //         collectionNum: {
        //             array: [109]
        //         },
        //         commentNum: 8
        //     },
        // ]
    },
    onLoad: function () {
        var postList = [
            {
                object: {
                    date: "19.12.04",
                },
                title: "我们的回忆",
                postImg: "/images/post/post-4.jpg",
                avatar: "/images/avatar/avatar-5.png",
                content: "我们之间的回忆忽远又忽近。",
                readingNum: 102,
                collectionNum: {
                    array: [109]
                },
                commentNum: 8
            },
            {
                object: {
                    date: "19.12.04",
                },
                title: "我们的回忆",
                postImg: "/images/post/post-5.jpg",
                avatar: "/images/avatar/avatar-1.png",
                content: "我们之间的回忆忽远又忽近。",
                readingNum: 102,
                collectionNum: {
                    array: [109]
                },
                commentNum: 8
            },
            {
                object: {
                    date: "19.12.04",
                },
                title: "我们的回忆",
                postImg: "/images/post/post-1.jpg",
                avatar: "/images/avatar/avatar-3.png",
                content: "我们之间的回忆忽远又忽近。",
                readingNum: 102,
                collectionNum: {
                    array: [109]
                },
                commentNum: 8
            },
        ]
        // this.setData 用来更新 data 中的数据
        this.setData({
            postList:postList
        })
    },
    bindchange(e){
        console.log(e)
    }
})


