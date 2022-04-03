<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
    <div class="carousel-inner" data-bs-interval="3000">
      <div class="carousel-item active">
        <img
          src="@/assets/images/banner001.jpg"
          class="d-block w-100 "
          alt="banner001"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>小人國系列-沈浸徜徉</h5>
          <p>金玉水草平文創工作室，提供 設計/繪畫/插圖/似顏繪。</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/banner002.jpg"
          class="d-block w-100 "
          alt="banner002"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>#許允樂 #只想活得漂亮</h5>
          <p>客製化水彩＆寫實風格人物肖像，找出屬於你的美麗。</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/banner003.jpg"
          class="d-block w-100 "
          alt="banner003"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>我的吐司計劃</h5>
          <p>讓吐司不只是吐司，而是生活回憶的篇章。</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss">
.carousel-item{
  img{
    height: 100%;
  }
}
</style>
