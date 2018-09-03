// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
<<<<<<< HEAD
import FastClick from 'fastclick'
import { Button, Input } from 'element-ui';
import './config/rem'
<<<<<<< HEAD

	Vue.use(Button)
	Vue.use(Input)	


=======
>>>>>>> aeccd680188620212a942bb0e9c6b7ab31a3842c
Vue.config.productionTip = false



if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
<<<<<<< HEAD
 
=======
=======

Vue.config.productionTip = false
>>>>>>> parent of 036144c... new update

>>>>>>> aeccd680188620212a942bb0e9c6b7ab31a3842c

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
