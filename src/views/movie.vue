<template>
    <div class="movie-container">
        <el-container>
            <el-header>
                <navMenu></navMenu>
            </el-header>
            <el-container class="home-main">
                <el-main>

                </el-main>
                <el-aside>Aside</el-aside>
            </el-container>
            <com-footer></com-footer>
        </el-container>
    </div>
</template>
<script>

    /*
    * 自己的组件是-
    * 命名是驼峰
    * 导出来是驼峰
    * */
    import RtmpLive from "./common/RtmpLive";
    import FLV from './common/flv'
    import HttpFlv from './common/httpFlv'
    import navMenu from "./common/navMenu";
    import comFooter from "./common/comFooter";

    export default {
        name: "home",
        components: {navMenu, comFooter, HttpFlv, FLV, RtmpLive},
        title: 'web 播放视频流/直播',
        subtitle: '使用 vue-video-player、flv.js 播放 RTMP、HLS、HTTP-FLV 视频流',
        videoInfo: [
            {title: '香港卫视', videoSrc: 'rtmp://live.hkstv.hk.lxdns.com/live/hks1'},
            {title: '香港财经', videoSrc: 'rtmp://202.69.69.180:443/webcast/bshdlive-pc'},
            {title: '湖南卫视', videoSrc: 'rtmp://58.200.131.2:1935/livetv/hunantv'},
            {title: '美国中文电视', videoSrc: 'rtmp://media3.sinovision.net:1935/live/livestream'}
        ],
        imgSrc: '', // 图片路径
        canvas: '',
        context: '',
        videoTag: ''
    }
</script>

<style scoped lang="less">
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 0px;
    }


    .el-aside {
        display: inline-block;
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 350px;
    }

    .el-main {
        display: inline-block;
        width: 960px;
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        /*margin-bottom: 40px;*/
    }

    .home-main {
        width: 1350px;
        align-self: center;
        height: 100%;
    }


</style>