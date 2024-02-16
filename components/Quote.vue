<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl">
    <div>
      <span class="inline-flex items-center justify-center p-2 dark:bg-reLime bg-freshGreen rounded-md shadow-lg">
        <BeakerIcon class="h-6 w-6 text-white" /></span>
    </div> 
    <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
    <p class="text-gray-500 dark:bg-reRime mt-2 text-sm">
      The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
    </p> 
  
    <div class="py-4">
    <UProgress :value="Math.random(1,100)*100" />
  </div>
  </div>



</template>
 
<script setup>
import { BeakerIcon } from '@heroicons/vue/24/solid'
</script>