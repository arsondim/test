<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>

<mode />

  <div>
    <div>

      

    </div>
    <h1>Nuxt Routing set up successfully!</h1>
    <h2 class="font-extrabold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis maiores voluptatem nisi vero et. Hic ea consectetur voluptate, perspiciatis dolores rerum assumenda blanditiis beatae quam aliquid voluptatibus sequi commodi suscipit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni unde voluptatem nostrum id molestiae, ab exercitationem non ullam dolores neque accusamus pariatur ducimus assumenda harum ex, reiciendis amet architecto.</h2>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>


