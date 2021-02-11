<template>
  <div class="card mb-1">
    <div class="row">
      <div class="col-4">
        <img :src="image" class="card-img py-4 ml-3" :alt="name" />
      </div>
      <div class="col-8">
          <p class="card-text pt-3 mb-2">{{ name }}</p>
          <div style="padding-top: 0.2rem; font-size: 1.3rem;" class="btn bg-light btn-m font-weight-bold" @click="delCart(id)">-</div>
          <div class="btn border border-bold ml-1 mr-1 font-weight-bold">{{ qty }}</div>
          <div class="btn btn-info btn-m mr-3 font-weight-bold" @click="addCart(cart)">+</div>
          <p class="card-title pt-2 font-weight-bold">{{toRupiah(price * qty)}}</p>
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
      type: String,
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
