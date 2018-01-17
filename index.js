import Vue from 'vue/dist/vue'
import './index.css';

new Vue({
  el: '#app'
});

if (module.hot) {
  module.hot.accept();
}
