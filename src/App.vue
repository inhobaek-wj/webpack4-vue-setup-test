<template>
  <div class="container center-content">
    <!-- <h1>Hello World</h1> -->
    <HelloComponent name="jake" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
  components: {

    HelloComponent
    /*  eslint-disable-next-line vue/no-unused-components */
  }
}
</script>
