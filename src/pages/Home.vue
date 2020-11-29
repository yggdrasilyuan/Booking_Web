<template>
    <div>
        <el-button id="dock-btn" icon="el-icon-caret-right" @click="dockVisible=true"></el-button>
        <el-drawer
                direction="ltr"
                :visible.sync="dockVisible"
                :with-header="false"
                title="Title"
                id="dock">
            <el-menu
                    id="dock-nav"
                    :default-active="'1'"
                    class="el-menu-demo"
                    @select="dockSelect"
                    background-color="#409EFF"
                    text-color="#fff"
                    active-text-color="rgba(255,150,0,1)">
                <el-menu-item index="1" class="el-menu-item">全部</el-menu-item>
                <el-menu-item index="2" class="el-menu-item">类别</el-menu-item>
            </el-menu>
        </el-drawer>
        <div id="container">
            住宿
        </div>
      <template>
        <div id="banner">
          <!--动态将图片轮播图的容器高度设置成与图片一致-->
          <el-carousel :height="bannerHeight + 'px'"  >
            <!--遍历图片地址,动态生成轮播图-->
            <el-carousel-item v-for="item in imagebox" :key="item.id">
              <img :src="item.idView" class="image">
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                dockVisible: false,
              imagebox:[{id:0,idView:require('../assets/timg.jpg')},
                {id:1,idView:require('../assets/timg1.jpg')},
                {id:2,idView:require('../assets/timg2.jpg')},
                {id:3,idView:require('../assets/timg3.jpg')},
                //imagebox是assets下一个放图片的文件夹
              ],
                // 图片父容器高度
                bannerHeight :1000,
                // 浏览器宽度
                screenWidth :0,
            }
        },
        methods: {
            dockSelect(index) {
                console.log(index)
            },
          setSize:function () {
            // 通过浏览器宽度(图片宽度)计算高度
            this.bannerHeight = 400 / 1920 * this.screenWidth;
          },
        },
          mounted() {
          // 首次加载时,需要调用一次
          this.screenWidth =  window.innerWidth;
          this.setSize();
          // 窗口大小发生改变时,调用一次
          window.onresize = () =>{
          this.screenWidth =  window.innerWidth;
          this.setSize();
        }
      }
    }
</script>

<style scoped>
    #dock-btn {
        position: fixed;
        left: 0;
        top: 40%;
        width: 20px;
        height: 100px;
        z-index: 1;
        padding: 0;
        background-color: #409eff;
        color: #409eff;
    }
    #container {
        padding: 10px;

    }
    #dock {
        width: 1000px;
    }
    #dock-nav {
        width: 100%;
        height: 100%;
    }
    #banner{
      padding-left: 450px;
      padding-right: 450px;
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    img{
      /*设置图片宽度和浏览器宽度一致*/
      width:100%;
      height:inherit;
    }
</style>

