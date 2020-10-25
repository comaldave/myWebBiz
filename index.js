import Vue from 'vue'
import myFooter from 'components/fotter'

Vue.config.productionTip = false

new Vue({
    el: '#vueLayout',
    data: {
        message: "Small footer"
    },
    template: '<myFooter/>',
    compoents: { myFooter }
}) 