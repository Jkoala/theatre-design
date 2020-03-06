const express = require('express')
const app = express()


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.post('/login', function (req, res) {
    //res.header('Access-Control-Allow-Origin', '*');
    data = {
        data: {
            display_name: '虹猫'
        },
        meta: {
            status: 200,
        }
    }
    res.send(data)
})

app.post('/movie', function (req, res) {
    console.log(req.query)

    res.send(data)
})

app.get('/searchMovie', function (req, res) {
    console.log(req.query)
    movies = {
        movie1: {
            name: '小妇人',
            url: '../assets/movies/lin.flv'
        },
        movie2: {
            name: '小妇2',
            url: '../assets/movies/lin.flv'
        },
        movie3: {
            name: '小妇人3',
            url: '../assets/movies/lin.flv'
        }

    }
    res.json({data: movies})
    // res.send(movies)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})