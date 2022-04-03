<template>
<div class="footer-content
mh-100 border-top border-2 py-4">
  <div class="container h-100">
    <div class="row justify-content-between align-items-center h-100">
      <!-- <GMapMap
        :center="center"
        :zoom="15"
        map-type-id="terrain"
        style="width: 400px; height: 400px"
      >
        <GMapMarker
          :key="marker.id"
          v-for="marker in markers"
          :position="marker.position"
        />
      </GMapMap> -->
      <div class="map col p-3 h-100">
        <img src="@/assets/images/footer.jpg" alt="footerImage">
      </div>
      <ul class="col lh-lg footer-product text-center m-auto py-3 h-100">
        <li>
          <strong>
            所有商品
          </strong>
        </li>
        <li>
          <a href="#">
            客製化似顏繪
          </a>
        </li>
        <li>
          <a href="#">
            插畫文創作品
          </a>
        </li>
        <li>
          <a href="#">
            商業設計邀約
          </a>
        </li>
        <li>
          <a href="#">
            聯名周邊商品
          </a>
        </li>
      </ul>
      <div class="footer-inner col h-100 d-flex flex-column justify-content-start py-3">
        <div class="d-flex align-items-center ">
          <img src="@/assets/images/logoCiel.webp" alt="logo" >
          <div>
            <strong>
            <span class="d-block my-2">
              ｜如果你們看見我
            </span>
            <span class="d-block my-2">
              ｜那就是宇宙投影我的樣子
            </span>
            </strong>
          </div>
        </div>
        <p class="py-3 text-start">
          E-mail：<a href = "mailto: cielgc79@gmail.com">cielgc79@gmail.com</a>
        </p>
        <ul class="d-flex align-items-center fs-2 px-2">
          <li>
            <a target="_blank" href="https://www.facebook.com/JYSCP.cielgc/">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li class="mx-4">
            <a target="_blank" href="https://www.instagram.com/cielgc/">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://shopee.tw/cielgc79?categoryId=68&itemId=7440048451">
              <i class="bi bi-shop"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  <footer class="p-3 text-center border-top border-2">
    <span>
      &copy;2022 Copyright - 金玉水草平文創工作室 JYSCP Ciel - Made by
      <a href="https://github.com/chiayinin" target="_blank">chiayinin</a>
    </span>
  </footer>
</template>

<style lang="scss">
.footer-content {
  height: 324px;
}

.map {
  width: 33%;
  img {
    width: 100%;
    height: 100%;
  }
}

.footer-product{
  width: 33%;
  li {
    a {
      text-decoration: none;
    }
  }
}

.footer-inner {
  width: 33%;
  div {
    img {
      width: 80px;
      height: 80px;
    }
  }
  a {
  text-decoration: none;
  }
}

footer {
  a {
    text-decoration: none;
  }
}

</style>

<script>
export default {
  data () {
    return {
      // 預設經緯度在地址
      // center: {
      //   lat: 25.052020110933388,
      //   lng: 121.53201298388319
      // },
      // markers: [
      //   {
      //     id: 'dfsldjl3r',
      //     position: {
      //       lat: 25.052020110933388,
      //       lng: 121.53201298388319
      //     }
      //   }
      // ]
    };
  }
};
</script>
