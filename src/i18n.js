import { createI18n } from 'vue-i18n';
const messages = {
    en: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      reservation: 'Reservation',
      promoTitle:'Roasted coffee best choice',
      promoTxt:'The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.',
      buyBtn:'Buy now',
      readBtn:'Read more'
  
    },
    ru: {
      home: 'Главная',
      about: 'О нас',
      menu: 'Меню',
      reservation: 'Бронирование',
      promoTitle:'Обжаренный кофе лучший выбор',
      promoTxt:'Кофе варят путем обжаривания зеленых кофейных зерен на горячих углях в жаровне. дали возможность попробовать.',
      buyBtn:'Купить сейчас',
      readBtn:'Читать далее'

    }
  };
  
  const i18n = createI18n({
    locale: 'en', 
    messages
  });
  
  export default i18n;