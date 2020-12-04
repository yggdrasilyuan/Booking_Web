<template>
    <div id="app">
        <div id="header">
            <div id="header-main">
                <div id="header-body">
                  <a href="https://sm.ms/image/uJhLV4HT7XtragD" target="_blank"><img src="https://i.loli.net/2020/11/27/uJhLV4HT7XtragD.png" style="width:150px;height: 25px;padding-top: 15px"></a>
                </div>
                <el-menu
                        id="nav"
                        :default-active="'1'"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#037CF9"
                        text-color="#FFFFFF"
                        active-text-color="rgba(255,150,0,1)">
                    <!--<el-menu-item index="1" class="el-menu-item">首页</el-menu-item>-->
                    <el-button type="primary" icon="el-icon-s-home">住宿</el-button>
                    <el-button type="primary" icon="el-icon-s-promotion">机票</el-button>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </el-menu>
            </div>
            <div id="header-user">
                <el-dropdown v-if="this.$store.state.user.token" style="margin-right: 10px">
                    <span class="el-dropdown-link">
                        {{this.$store.state.user.nickName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button type="text" v-else :style="{color: this.colorCard.textColor}"
                         id="login-btn" @click="login">登录/注册</el-button>
                <el-avatar :size="80" fit="fill" :src="this.$store.state.user.icon"></el-avatar>
            </div>
        </div>
        <router-view style="position: absolute;width: 100%;"/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        methods: {
            handleSelect(index) {
                console.log(index)
            },
          login() {
            this.$router.push('/Login')
          }
        },
        created() {},
      computed: {
        iconSrc() {
          if(this.$store.state.user.token) return this.$store.state.user.icon;
          else return 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
        },
      },
    }
</script>

<style>
    html {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
    body {
        margin: 0;
    }
    #app {
        width: 100%;
        height: 100%;
    }
    #header {
        width: 100%;
        background-color: #037CF9;
        display: flex;
        align-items: center;
    }
    #header-main {
        width: 70%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        justify-content: space-around;
    }
    #header-body {
        width: 90%;
        display: flex;
        justify-content: flex-start;
    }
    #nav {
        width: 90%;
    }
    #header-user {
        width: 25%;
        height: 100px;
        display: flex;
        color:#FFFFFF;
        align-items: center;
        justify-content: flex-end;
    }
    .el-avatar{

    }
    .el-dropdown-link {
        cursor: pointer;
        color: #FFFFFF;
        font-size: 20px;
    }
    #login-btn {
      font-size: 20px;
      margin-right: 10px;
    }
</style>
