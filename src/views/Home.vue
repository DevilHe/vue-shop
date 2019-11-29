<template>
  <div class="container">
    <!-- 头部 -->
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="5000">
        <van-swipe-item
          class="carousel-item"
          v-for="(item, index) in carouselItem"
          :key="index"
        >
          <img :src="item.imgSrc" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 今日推荐 -->
    <div class="hot">
      <p class="hot-title">今日推荐</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img" alt />
            <div>{{ item.name }}</div>
            <div>￥{{ item.price }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      carouselItem: [
        {
          name: "img1",
          imgSrc: require("../assets/images/img1.jpg")
          // imgSrc: "https://img.yzcdn.cn/vant/apple-1.jpg"
        },
        {
          name: "img2",
          imgSrc: require("../assets/images/img2.jpg")
        },
        {
          name: "img3",
          imgSrc: require("../assets/images/img3.jpg")
        }
      ],
      hotProducts: [
        {
          name: "花牛苹果",
          img: require("../assets/images/img-apple.png"),
          price: "29.90"
        },
        {
          name: "琯溪蜜柚",
          img: require("../assets/images/img-pomelo.png"),
          price: "58.80"
        },
        {
          name: "车厘子",
          img: require("../assets/images/img-cherry.png"),
          price: "129.00"
        },
        {
          name: "柑橘",
          img: require("../assets/images/img-citrus.png"),
          price: "59.90"
        },
        {
          name: "草莓",
          img: require("../assets/images/img-strawberry.png"),
          price: "76.80"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      }
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  background-color: #eee;
}
.nav-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.carousel {
  margin-top: 1rem;
  height: 3rem;
  &-item {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
.hot {
  margin-top: 0.2rem;
  background-color: #fff;
  &-title {
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper {
    &-content {
      width: 2rem;
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
// 热门商品
.variety {
  margin-top: 0.2rem;
  background-color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    flex-basis: 45%;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
