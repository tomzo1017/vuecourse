<template>
  <div id="app">
   <message> Hello There </message>
      <message> Hello There Again </message>

  </div>
</template>

<script>
import message from './components/message.vue';
export default {
  name: 'app',
  components: {
    message
  },
 
}
</script>

<style lang="scss">

</style>
