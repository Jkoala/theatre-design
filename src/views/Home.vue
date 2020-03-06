<template>
    <div class="home-container">
        <el-container>
            <el-header>
                <navMenu></navMenu>
            </el-header>
            <el-container class="home-main">
                <el-aside width="200px">Aside</el-aside>
                <!--                主页框-->
                <el-main>
                    <!--                    房间卡片-->
                    <el-row>
                        <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../assets/image/movie.jpg" class="image">
                                <div style="padding: 14px;">
                                    <span>天赋异禀</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ currentDate }}</time>
                                        <el-button type="text" class="button">enter</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../assets/image/movie.jpg" class="image">
                                <div style="padding: 14px;">
                                    <span>天赋异禀</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ currentDate }}</time>
                                        <el-button type="text" class="button">enter</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../assets/image/movie.jpg" class="image" href="">
                                <div style="padding: 14px;">
                                    <span v-text="movieName">天赋异禀</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ currentDate }}</time>
                                        <el-button type="text" class="button" @click="enter">enter</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
            <comFooter></comFooter>
        </el-container>
    </div>


</template>

<script>
    import comFooter from "./common/comFooter";
    import navMenu from "./common/navMenu";

    export default {
        name: "home",
        components: {navMenu, comFooter},
        data() {
            return {
                movieName: '天赋异禀',
                currentDate: new Date().getMinutes()
            };
        },
        methods: {
            enter() {

            }
        }

    }
</script>

<style scoped lang="less">
    .el-header {
        padding: 0px;
    }

    .home-container > .el-container > .el-container {
        width: 1350px;
        align-self: center;
        height: 960px;

        .el-aside {
            background-color: #b4ff5b;
        }

        //main下面的
        .el-main {
            .time {
                font-size: 13px;
                color: #999;
            }

            .bottom {
                margin-top: 13px;
                line-height: 12px;
            }

            .button {
                padding: 0;
                float: right;
            }

            .image {
                width: 100%;
                display: block;
            }

            .clearfix:before,
            .clearfix:after {
                display: table;
                content: "";
            }

            .clearfix:after {
                clear: both
            }
        }
    }

    //

</style>