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
  </div>
</template>

<script>
export default {
  name: "home",
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
          // imgSrc: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "img3",
          imgSrc: require("../assets/images/img3.jpg")
          // imgSrc: "https://img.yzcdn.cn/vant/apple-3.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.carousel {
  height: 3rem;
  &-item {
    img {
      width: 100rem;
      height: 3rem;
    }
  }
}
</style>
