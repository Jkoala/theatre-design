<template>
    <div class="login-container">

        <div class="login-box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form :model="loginForm" status-icon label-width="100px" class="login-form" :rules="loginFormRules"
                     ref="loginFormRef">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名或者邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="loginForm.password" autocomplete="on"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login" class="btn">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: "admin",
                    password: "admin123"
                },
                loginFormRules: {
                    password: [
                        {required: true, message: "请输入登录名称", trigger: "blur"},
                        {min: 6, max: 20, message: "长度在 3 到 10 个字符", trigger: "blur"}
                    ],
                    username: [
                        {required: true, message: "请输入登录密码", trigger: "blur"},
                        {min: 3, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur"}
                    ]
                }
            };
        },
        methods: {
            login() {
                this.$refs.loginFormRef.validate(async valid => {
                    if (!valid) return;
                    const {data: res} = await this.$http.post('login', this.loginForm)
                    console.log(res)
                    if (res.meta.status != 200) return this.$message.error('登入失败')
                    this.$message.success('登入成功')

                    //登入成功以后把 token 对象纯进去
                    window.sessionStorage.setItem('token', res.data.token)
                    //进去主业
                    this.$router.push('/home')
                })


            }
        }

    };
</script>

<style type='text/less' lang="less" scoped>
    .login-container {
        background-image: url(../assets/image/bg1.jpg);
        height: 100%;
    }

    .login-box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .avatar_box {
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }

    .login-form {
        position: absolute;
        bottom: 0;
        align-self: center;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .btn {
        width: 300px;
        position: relative;
        align-self: center;
        text-align: center;
    }

</style>