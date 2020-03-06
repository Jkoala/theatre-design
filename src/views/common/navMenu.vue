<template>
    <div class="menu-container">
        <el-menu :default-active="activeIndex" mode="horizontal">
            <el-menu-item index="1" @click="dialogFormVisible = true">创建房间</el-menu-item>
            <el-menu-item index="3">匹配</el-menu-item>
        </el-menu>


        <!--        弹出框-->
        <el-dialog title="创建房间" :visible.sync="dialogFormVisible">
            <el-form :model="form" action="/movie">
                <el-form-item label="房间名" :label-width="formLabelWidth">
                    <el-input v-model="form.roomname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label='影片选择' :label-width="formLabelWidth">
                    <el-input v-model="form.moviename" placeholder="请搜索" @blur="search" list="movielist"></el-input>
                    <datalist id="movielist">
                        <option v-for="movie in movies">
                            {{ movie.name}}
                        </option>
                        <!--                        <option value="A计划"></option>-->
                        <!--                        <option value="Asss"></option>-->
                    </datalist>
                </el-form-item>
                <el-form-item label="房间类型" :label-width="formLabelWidth">
                    <el-select v-model="form.kind" placeholder="">
                        <el-option label="公开" value="shanghai"></el-option>
                        <el-option label="私密" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="房间人数" :label-width="formLabelWidth">
                    <el-input-number v-model="form.num" @change="handleChange" :min="1" :max="10"
                                     label="ss"></el-input-number>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="" @click="createRoom">确 定</el-button>
            </div>
        </el-dialog>
        <!--        弹出框-->
        <!--        搜索框 下拉-->
        el-
    </div>

</template>

<script>

    export default {
        name: "navMenu",
        data() {
            return {
                activeIndex: '1',
                dialogFormVisible: false,
                movies: {},
                form: {
                    roomname: '美少女计划',
                    moviename: '小',
                    kind: 'public',
                    num: 5,
                },
                formLabelWidth: '120px'
            };
        },
        methods: {
            createRoom() {
                console.log(this.form)
                this.$router.push({name: 'movie', params: this.form})

                // this.$http.post('/movie',this.form).then((res)=>{
                //     console.log(res)
                // })

            },
            handleChange(value) {
                console.log(value);
            },
            search() {
                let moviename = this.form.moviename;
                this.$http.get('/searchMovie?key=' + moviename).then(({data: res}) => {
                    console.log(res.data.movie1)
                    this.movies = res.data
                })

            },
            clearTimer() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
            }
        }
    }

</script>

<style scoped>
    .el-menu {
        width: 100%;
    }
</style>