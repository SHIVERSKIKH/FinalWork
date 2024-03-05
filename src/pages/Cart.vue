<template>
    <div>
<section class="cart">
<div class="center">
    <h2 class="cart__title">Cart</h2>
    <ul class="cart__list">
      <li class="cart__item">
        <div class="cart__item-wrp">
            <div class="cart__item-img">
                <img src="@/assets/img/product1.png" alt="">
            </div>
            <div class="cart__item-info">
                <h3 class="cart__item__title">Lavazza Crema E Gusto</h3>
                <p class="cart__item-txt">xl</p>
                <select class="cart__item-select">
                    <option class="option">1</option>
                    <option class="option">2</option>
                    <option class="option">3</option>
                </select>
            </div>
        </div>
      </li>
      <li class="cart__item">
        <div class="cart__item-wrp">
            <div class="cart__item-img">
                <img src="@/assets/img/product1.png" alt="">
            </div>
            <div class="cart__item-info">
                <h3 class="cart__item__title">Lavazza Crema E Gusto</h3>
                <p class="cart__item-txt">xl</p>
                <select class="cart__item-select">
                    <option class="option" value="1">1</option>
                    <option class="option" value="2">2</option>
                    <option class="option" value="3">3</option>
                </select>
            </div>
        </div>
      </li>
    </ul>
</div>
</section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    addItemToCart(product) {
      this.cartItems.push(product);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>