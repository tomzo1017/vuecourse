new Vue({
    el: '#app',

    data: {
        skills: []
    },


    mounted() {
        // Make an ajax request to our server, then render response - /skills
        axios.get('/skills').then(response => this.skills = response.data);
    }
});