<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
     
    </head>
    <body>
       <div id="app">
        <ul>
            <li v-for="skill in skills"> @{{ skill }}</li>
        </ul>
       </div>
       <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
        <script src="./js/app.js/"></script>
    </body>
</html>
