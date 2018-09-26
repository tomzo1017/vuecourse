class Errors {
    constructor() {
        this.errors = {};
    }
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
    record(errors) {
        return this.errors = errors;
    }
    clear(field) {
        if (field) delete this.errors[field];

        this.errrors = {};
    }


}

class Form {
    constructor(data) {
        this.data = data;

    for (let field in data) {
        this[field] = data[field];
    }
    this.errors = new Errors();

    }

    data() {
       let data = Object.assign({}, this);

       delete data.originalData;
       delete data.errors;

       return data;
    }

    reset() {
        for (let field in originalData) {
            this[field] = '';
        }
    }
    submit(requestType, url) {
        axios[requestType](url, this.data())
           .then(this.onSuccess.bind(this))
           .catch(this.onFail.bind(this))
          
    }
    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
    }

    onFail(error) {
        this.form.errors.record(error.response.data);
    }
}


new Vue({
    el: '#app',
   

    data: {
      form: new Form ({

        name: '',
        description: ''
      }),
      errors: new Errors()
    },

    methods: {
        onSubmit() {
           this.form.submit('post', '/projects');
           },

        }
     
});