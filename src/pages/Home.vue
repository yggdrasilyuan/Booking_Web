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
      <div id="top-div" :style="{backgroundColor: this.colorCard.color3}">
        <div id="search-div">
          <div class="tab-div">
            <span type="info" class="tag-info">搜索酒店</span>
            <el-input v-model="searchContext" placeholder="请输入搜索内容..." style="width: 200px"></el-input>
          </div>
          <div class="tab-div">
            <span type="info" class="tag-info">入住时间</span>
            <el-date-picker
                v-model="startTime"
                type="datetime"
                placeholder="选择时间"
                align="right"
                :picker-options="pickerOptions">
            </el-date-picker>
          </div>
          <div class="tab-div">
            <span type="info" class="tag-info">退房时间</span>
            <el-date-picker
                v-model="endTime"
                type="datetime"
                placeholder="选择时间"
                align="right"
                :picker-options="pickerOptions">
            </el-date-picker>
          </div>
          <div class="tab-div">
            <span type="info" class="tag-info">选择人数</span>
            <el-input-number :min="1" v-model="people"></el-input-number>
          </div>
          <el-button type="primary" icon="el-icon-search" @click="onSearch">搜索</el-button>
        </div>
        <div class="select-div" v-for="(data,i) in selector" :key="data.title">
          <span class="select-title">{{data.title}}</span>
          <span v-for="(item,index) in data.items" :key="item"
                :class="'select-item'+(index==data.chosen? '-chosen':'')"
                @click="onSelect(i,index)">{{item}}</span>
        </div>
      </div>
      <div id="banner">
        <!--动态将图片轮播图的容器高度设置成与图片一致-->
        <el-carousel :height="bannerHeight + 'px'"  >
          <!--遍历图片地址,动态生成轮播图-->
          <el-carousel-item v-for="item in imagebox" :key="item.id">
            <img :src="item.idView" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="body-div" :style="{backgroundColor: this.colorCard.color5}">
        <hotel-card v-for="(card,i) in hotels" :key="i" v-bind="card"
                    class="hotel-card"></hotel-card>
      </div>


    </div>
</template>

<script>
  import HotelCard from "@/components/HotelCard";

    export default {
        name: "Home",
        components:{HotelCard},
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
              searchContext: '',
              startTime: '',
              endTime: '',
              people: 1,
              pickerOptions: {
                shortcuts: [{
                  text: '今天',
                  onClick(picker) {
                    picker.$emit('pick', new Date());
                  }
                }, {
                  text: '昨天',
                  onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                  }
                }, {
                  text: '一周前',
                  onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                  }
                }]
              },
              selector: [
                {
                  title: '类别',
                  items: ['全部','民宿','酒店','轰趴'],
                  chosen: 0
                },
                {
                  title: '地区',
                  items: ['全部','江苏','上海','北京'],
                  chosen: 0
                }
              ],
              hotels: [
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
                {
                  hotelName: '姬哥酒店',
                  cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2339646227,2088146489&fm=26&gp=0.jpg',
                  price: 1000,
                  stars: 4.6,
                  commentNumber: 1024
                },
              ],

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
          onSearch() {
            console.log(this.searchContext, this.startTime, this.endTime)
          },
          onSelect(i, j) {
            this.selector[i].chosen = j
          }
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
      },

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
    #top-div {
      padding: 10px;
    }

    #search-div {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 20px;
    }
    .tab-div {
      display: flex;
      flex-direction: column;
    }
    .tag-info {
      font-size: large;
      padding: 5px;
      font-weight: bold;
    }

    .select-div {
      display: flex;
      align-items: center;
      margin: 10px;
    }
    .select-title {
      font-size: larger;
      font-weight: bold;
      margin-left: 20%;
    }
    .select-item {
      font-size: large;
      margin-left: 20px;
      cursor: pointer;
    }
    .select-item-chosen {
      font-size: large;
      margin-left: 20px;
      cursor: pointer;
      color: blue;
    }

    #body-div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-left: 10%;
      padding-right: 10%;
      padding-bottom: 50px;
    }
    .hotel-card {
      width: 300px;
      margin: 20px;
    }
    #banner{
      padding-top: 25px;
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

