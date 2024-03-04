<template>
<div>
    <section class="promo">
        <div class="center">
            <div class="promo__info">
                <h1 class="promo__title">{{ $t('promoTitle') }}</h1>
                <p class="promo__txt">{{ $t('promoTxt') }}</p>
                <div class="promo__btn">
                    <router-link class="promo__btn-link" to="/">Buy now</router-link>
                    <router-link class="promo__btn-link promo__btn-link--color" to="/productDetails">Read more</router-link>
                </div>
            </div>
        </div>
    </section>
    <main class="main">
        <div class="center">
            <article class="article">
                <div class="article__img-wrp">
                    <img :src="data.image" alt="" class="article__img">
                </div>
                <div class="article__info">
                    <h2 class="article__title">{{  data.name }}</h2>
                    <p class="article__txt">{{ data.description }}</p>
                </div>
            </article>
            <section class="catalog">
                <h2 class="catalog__title">Catalog</h2>
                    <ProductList class="catalog__list" />
            </section>
            <section class="news">
                <h2 class="news__title">News</h2>
                <div class="news__info">
                    <article class="news__article" v-for="item in news" :key="item.id">
                        <div class="news__article-img">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="news__article-wrp">
                            <h3 class="news__article-title">{{ item.name }}</h3>
                            <p class="news__article-txt">{{ item.description }}</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </main>
</div>
</template>

<script>
 import { mapState, mapMutations } from 'vuex';
import i18n from '@/i18n';
import ProductList from '@/components/ProductList.vue';
    export default {
        i18n,
        components:{ ProductList },
        computed:{
            ...mapState(['data', 'news', 'currentLanguage'])
        },
        methods: {
            ...mapMutations(['setLanguage']),
      changeLanguage(lang) {
        this.setLanguage(lang);
      },
        },
    }
</script>

<style lang="scss" scoped>

</style>