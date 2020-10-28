import Vue from 'vue'
import myFooter from 'components/fotter'

Vue.config.productionTip = false

new Vue({
    el: '#vueLayout',
    data: function() {
return {
        message: "Small footer"
    };
},
    template: '<myFooter/>',
    compoents: { myFooter }
}) 