<template>
<div>
    <section class="promo">
        <div class="center">
            <div class="promo__info">
                <h1 class="promo__title">Roasted coffee best choice</h1>
                <p class="promo__txt">The coffee is brewed by first roasting the green coffee beans over hot
                                coals in a brazier. given an opportunity to sample.</p>
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
                    <img src="@/assets/img/article1.jpg" alt="" class="article__img">
                </div>
                <div class="article__info">
                    <h2 class="article__title">Roasted Coffee</h2>
                    <p class="article__txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
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
import { mapState } from 'vuex';
import ProductList from '@/components/ProductList.vue';
    export default {
        components:{ ProductList },
        computed:{
            ...mapState(['data', 'news'])
        },
            mounted() {
        console.log('Data:', this.data);
        console.log('News:', this.news);
    }
    }
</script>

<style lang="scss" scoped>

</style>