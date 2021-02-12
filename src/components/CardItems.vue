<template>
  <div class="d-flex justify-content-center pb-5">
    <div class="p-0" style="width: 19rem;">
      <div :class="hoverShow ? 'hover show' : 'hide'"></div>
      <img :src="images" :alt="name" class="btn card-img-top border-radius-0" />
      <div class="card-body">
        <h5 style="font-family: sans-serif; font-size: 1rem;">{{ name }}</h5>
        <h3 style="font-family: sans-serif; font-size: 0.9rem;" class="font-weight-bold">{{toRupiah (price) }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Card",
    return: {
      hoverShow: false,
    },
  props: {
    images: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions(['addCart']),
    toRupiah(value) {
      return (
        "Rp. " +
        Math.round(value)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")
      );
    },
  }
}
</script>

<style scoped>
  .hover {
    background: blue;
    color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 50%;
    position: absolute;
    border-radius: 7px;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>
