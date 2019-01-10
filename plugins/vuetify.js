import Vue from 'vue'
import Vuetify from 'vuetify'
import moment from 'moment';

Vue.prototype.$moment = moment;

Vue.use(Vuetify, {
  theme: {
    primary: '#FFC107',
    accent: '#FFECB3',
    secondary: '#FFCA28',
    info: '#FFF8E1',
    warning: '#FF9800',
    error: '#F44336',
    success: '#4CAF50'
  }
})
