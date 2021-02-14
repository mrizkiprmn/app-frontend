<template>
  <div class="d-flex justify-content-center pb-5">
    <div class="p-0" style="width: 19rem; " @click="addCart(product)">
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
      type:Number,
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
