<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">

    <style>
    body { padding-top: 40px;}

    </style>
</head>
<body>
    <div id="app" class="container">
      
    <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
    
    <div class="field">
  <label class="label"> Project Name </label>
  <div class="control">
    <input class="input" name="name" type="text" placeholder="e.g  My project.." id="name" v-model="form.name">
    <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>

  </div>
</div>

<div class="field">
  <label class="label"> Project Description: </label>
  <div class="control">
    <input class="input" id="description" name="description"type="text" placeholder="e.g. database.." v-model="form.description">
    <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('.escription')"></span>

  </div>


  <div class="control">
<button class="button-is-primary" :disabled="errors.any()"> Create </button>
  
  </div>
</div>
    
    
    </form>
    
    
    
    </div>
    
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    <script src="/js/app.js"></script>

    
    </body>
</html>