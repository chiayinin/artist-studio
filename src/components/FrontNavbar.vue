<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid  container">
      <h1 class="mt-2">
        <router-link to="/" class="navbar-brand">
          <img
            src="@/assets/images/logoCiel.webp"
            alt="CIEL 金玉水草平 文創工作室 Logo"
            class="d-inline-block align-text"
          />
          CIEL 金玉水草平 文創工作室
        </router-link>
      </h1>
      <!-- 漢堡選單 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav
        class="collapse navbar-collapse flex-grow-0 text-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">品牌故事</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              所有商品
            </a>
            <ul
              class="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
            >
              <li><a class="dropdown-item" href="#">客製化似顏繪</a></li>
              <li><a class="dropdown-item" href="#">插畫文創作品</a></li>
              <li><a class="dropdown-item" href="#">商業設計邀約</a></li>
              <li><a class="dropdown-item" href="#">聯名周邊商品</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">聯絡我們</a>
          </li>
          <div>
            <button type="button" class="btn btn-lg p-1 pe-2">
              <i class="bi bi-cart3"></i>
            </button>
          </div>
          <div>
            <button type="button" class="btn btn-lg p-1 pe-2">
              <i class="bi bi-person-circle"></i>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
h1 {
  width: 100px;
  a {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
