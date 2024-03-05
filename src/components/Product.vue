<template>
                    <div class="catalog__item">
                        <routerLink to="/productdetails" class="catalog__item-link" >
                            <div class="catalog__img-wrp">
                                <img :src="product.img" alt="" class="catalog__img">
                            </div>
                        </routerLink>
                            <h3 class="catalog__subtitle">{{ product.name }}</h3>
                            <div class="catalog__container">
                                <p class="catalog__price">${{ product.price }} <span>{{ product.sale }}</span></p>
                                <span class="catalog__favorite" @click="toggleFavorite" :style="{ background: favoriteBackground }"></span>
                        </div>
                    </div>
</template>

<script>
    export default {
        props: {
            product:Object,
    },
        data() {
        return {
            isFavorite: false,
            favoriteCount:0,
        };
    },
    computed: {
        favoriteBackground() {
            return this.isFavorite ? 'url(' + require('@/assets/img/like.png') + ')' : 'url(' + require('@/assets/img/favorite1.png') + ')';
        }
    },
    methods: {
        toggleFavorite() {
            this.isFavorite = !this.isFavorite;
            this.favoriteCount += this.isFavorite ? 1 : -1;
        }
    }
    }
   
</script>

<style lang="scss" scoped>

</style>