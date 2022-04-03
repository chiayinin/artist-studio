<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <Carousel></Carousel>
    </div>
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/FrontNavbar.vue';
import Footer from '@/components/FrontFooter.vue';
import Carousel from '@/components/FrontCarousel.vue';

export default {
  components: {
    Navbar,
    Footer,
    Carousel
  }
};
</script>
