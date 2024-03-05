<template>
    <div>
        <Product v-for="product in filteredItems" :key="product.id" :product="product"/>
    </div>
</template>

<script>
import Product from '@/components/Product.vue';

export default {
    components: { Product },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Lavazza coffee',
                    price: 19.99,
                    img: require('@/assets/img/product1.png'),
                    sale: '$29.99',
                },
                {
                    id: 2,
                    name: 'Lavazza coffee',
                    price: 19.99,
                    img: require('@/assets/img/product2.png'),
                },
                {
                    id: 3,
                    name: 'Lavazza coffee',
                    price: 19.99,
                    img: require('@/assets/img/product1.png'),
                },
                {
                    id: 4,
                    name: 'Lavazza coffee',
                    price: 19.99,
                    img: require('@/assets/img/product1.png'),
                    sale: '$29.99',
                },
                {
                    id: 5,
                    name: 'Lavazza coffee',
                    price: 19.99,
                    img: require('@/assets/img/product2.png'),
                },
                {
                    id: 6,
                    name: 'Lavazza coffee',
                    price: 19.99,
                    img: require('@/assets/img/product1.png'),
                    sale: '$29.99',
                },
            ]
        }
    },
    props:{
        displayCount: {
      type: Number,
      default: 6
    }
    },
    computed:{
        filteredItems(){
            return this.products.slice(0, this.displayCount);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>