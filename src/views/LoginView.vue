<template>
  <div class="container d-flex align-items-center justify-content-center content">
    <div class="row justify-content-center">
      <h1 class="h3 m-4 text-center">後台登入頁面</h1>
      <div class="col-8">
        <form id="form" class="form-signin m-auto">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">請輸入帳號為 Email</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">請輸入密碼</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
          <a href="" class="btn btn-lg btn-outline-primary w-100 mt-3">回到首頁</a>
        </form>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2022~∞ - 感謝六角學院用心教學
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.content{
  height: 100vh;
  .form-signin{
    width: 360px;
  }
}
</style>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },

  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}amdin/signin`;

      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data;

          document.cookie = `apiToken=${token};expires=${new Date(expired)}; path=/`;
          this.$router.push('/admin/products');
        })
        .catch(() => {
          alert('登入錯誤，請重新輸入帳號密碼。');
          this.user.username = '';
          this.user.password = '';
        });
    }
  }
};
</script>
