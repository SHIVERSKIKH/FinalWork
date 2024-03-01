<template>
    <div>
<section class="projectDetails">
    <div class="center">
        <h2 class="projectDetails__title">Lavazza Crema E Gusto</h2>
        <div class="projectDetails__info">
            <div class="projectDetails__image-wrp">
                <div class="projectDetails__image">
                    <img src="@/assets/img/product1.png" alt="">
                </div>
            </div>
            <div class="projectDetails__price">
                <div class="projectDetails__wrp">
                    <p class="projectDetails__txt">$19.99</p>
                    <span class="projectDetails__txt-span">$29.99</span>
                </div>
                <div class="projectDetails__size">
                    <button :class="{ 'projectDetails__size-btn--active': activeSize === 'l' }" @click="setActiveSize('l')" class="projectDetails__size-btn">l</button>
                    <button :class="{ 'projectDetails__size-btn--active': activeSize === 'xl' }" @click="setActiveSize('xl')" class="projectDetails__size-btn">xl</button>
                    <button :class="{ 'projectDetails__size-btn--active': activeSize === 'xxl' }" @click="setActiveSize('xxl')" class="projectDetails__size-btn">xxl</button>
                </div>
                <router-link to="/cart" class="addCart" @click="addItemToCart">Add to cart</router-link>
            </div>
        </div>
        <section class="projectDetails__description">
            <h3 class="projectDetails__subtitle">Description</h3>
            <div class="projectDetails__text-wrp">
                <p class="projectDetails__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
        </section>
    </div>
</section>
<section class="projectDetails__product">
    <div class="center">
        <h2 class="projectDetails__product-title">Other Products</h2>
        <ProductList  class="catalog__list" />
    </div>
</section>
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import { mapActions } from 'vuex';
    export default {
        components:{ ProductList },
        data() {
        return {
            activeSize: 'xl',
        };
    },
    methods: {
        setActiveSize(size) {
            this.activeSize = size;
        },
        addItemToCart() {
      const product = {
        name: 'Lavazza Crema E Gusto',
        price: 19.99
      };
      this.addToCart(product); // Вызываем действие addToCart из Vuex Store
    },
    ...mapActions(['addToCart']) // Используем mapActions для упрощения вызова действия из хранилища
  }
}
</script>

<style lang="scss" scoped>

</style>