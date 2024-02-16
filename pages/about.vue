<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()

const { data } = await useFetch('/api/currency/PLN')

</script>

<template>

  <div>

    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nemo expedita eos dolor, perferendis distinctio ex quibusdam magnam aliquid tempore labore accusamus minus? Odio porro placeat maxime cumque a alias!</p>
    <p>Current route: {{ route.path }}</p>

   
    <div class="font-bold py-2">{{data}}</div>



  </div>
</template>
