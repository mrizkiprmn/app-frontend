<template>
  <div class="card mb-1">
    <div class="row">
      <div class="col-4">
        <img :src="image" class="card-img py-4 ml-3" :alt="name" />
      </div>
      <div class="col-8">
          <p style="font-family: sans-serif; font-size: 0.9rem;" class="card-text pt-3 mb-2">{{ name }}</p>
          <div style="padding-top: 0.2rem; font-size: 1rem;" class="btn bg-light btn-m" @click="delCart(id)">-</div>
          <div style="font-size: 0.9rem;" class="btn ml-1 mr-1">{{ qty }}</div>
          <div style="padding-top: 0.2rem; font-size: 1rem;" class="btn bg-light btn-m" @click="addCart(cart)">+</div>
          <p style="font-family: sans-serif; font-size: 0.9rem;" class="font-weight-bold card-title pt-2">{{toRupiah(price * qty)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "Cart",
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    cart: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(['addCart', 'delCart']),
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
