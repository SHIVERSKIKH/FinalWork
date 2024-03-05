import { createStore } from 'vuex';
import article1 from '@/assets/img/article1.jpg';
import news1 from '@/assets/img/news1.jpg';
import article2 from '@/assets/img/article2.jpg';
import article3 from '@/assets/img/article3.jpg';
import i18n from '@/i18n';
export default createStore({
    state:{
        data: 
            {
                id:1,
                name:"Roasted Coffee",
                description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
                image:article1,
        },
    
    news:[
        {
            id:1,
            name:"Lavazza coffee",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            image:article2,
        },
        {
            id:2,
            name:"Lavazza coffee",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. words which don't look even slightly believable.",
            image:news1,
        },
        {
            id:3,
            name:"Lavazza coffee",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            image:article3,
        },
],
cartItems:[],
currentLanguage: 'en',
    },
    getters:{

    },
    mutations:{
        addToCart(state, product) {
            state.cartItems.push(product);
        },
        setLanguage(state, lang) {
            state.currentLanguage = lang;
            i18n.global.locale = lang;
        }
    },
    actions:{
        addToCart({ commit }, product) {
            commit('addToCart', product);
          },
          setLanguage({ commit }, lang) {
            commit('setLanguage', lang);
        }
    },
    modules:{

    },
})