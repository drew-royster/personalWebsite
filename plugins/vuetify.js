import Vue from 'vue'
import Vuetify from 'vuetify'
import moment from 'moment';

Vue.prototype.$moment = moment;

Vue.use(Vuetify, {
  theme: {
    primary: '#88BBD6',
    accent: '#CDCDCD',
    secondary: '#E9E9E9',
    info: '#FFF8E1',
    warning: '#FF9800',
    error: '#F44336',
    success: '#4CAF50'
  }
})
