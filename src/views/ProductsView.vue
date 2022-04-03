<template>
  <h1>產品頁面</h1>
  <div v-for="product in products" :key="product.id">
    <div>
      <img :src="product.imageUrl" :alt="product.title">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    };
  },

  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then(res => {
        this.products = res.data.products;
      });
    }
  },

  mount () {
    this.getProducts();
  }
};
</script>
