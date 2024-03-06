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
import { mapMutations, mapState } from 'vuex';
    export default {
        props: {
            product:Object,
    },
        data() {
        return {
            isFavoriteLike: false,
        };
    },
    computed: {
        favoriteBackground() {
            return this.isFavoriteLike ? 'url(' + require('@/assets/img/like.png') + ')' : 'url(' + require('@/assets/img/favorite1.png') + ')';        
        },
        ...mapState(['isFavorite', 'favoriteCount'])
    },
    methods: {
        toggleFavorite() {
            this.isFavoriteLike = !this.isFavoriteLike;
            if(this.isFavoriteLike) {
                this.incrementFavoriteCount();
            }else {
                this.decrementFavorite();
            }
        },
        ...mapMutations(['incrementFavoriteCount', 'decrementFavorite'])
    }
    }
   
</script>

<style lang="scss" scoped>

</style>