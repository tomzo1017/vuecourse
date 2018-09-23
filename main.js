/* Vue.component('tabs', {
    template: `
    <div>
    <div class="tabs">
  <ul>
    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"> <a :href="tab.href" @click="selectTab(tab)" >{{ tab.name }} </a> </li>
  </ul>
</div> 

    <div class="tabs-details">
        <slot></slot>
    </div>
    </div>
    `,

        data() {
            return { tabs: []}
        },
        created() {
            this.tabs = this.$children;
            
        },

        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name)
                });
            }
        }
});


Vue.component('tab', {
    template: `
    <div v-show="isActive">
    
    <slot></slot>
    
    
    </div>`,

    props: {
        name: {
            required: true
        },
        selected: { default: false }
    },

    data() {

        return {
        isActive: false
        };
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },


    mounted() {
        this.isActive = this.selected;
    }
});

*/ 


/*Vue.component('modal', {
    template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">  
        <slot name="header"></slot> 

        </p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
       <slot> </slot>
      </section>
      <footer class="modal-card-foot">
            <slot name="footer"> </slot>
        
            <button class="button">Okay</button>
      </footer>
    </div>
  </div>`
})


new Vue({
    el: '#root'
});






/* window.Event = new class {
            constructor() {
                this.vue = new Vue();
            }

    fire(event, data = null) {
            this.vue.$emit(event, data);
    }

    listen(event, callback) {
            this.vue.$on(event, callback);
    }       
}

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
          Event.fire('applied');
        }
    }   
});


new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },
    

   created() {
        Event.listen('applied', () => alert('Handling it!'));
   }
});



*/





Vue.component('progress-view', {

    data() {
        return { completionRate: 50 }
    }

});



new Vue ({
    el: '#root',
});