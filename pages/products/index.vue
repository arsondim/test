<template>
    <h4>Fajnie</h4>

    <div class="grid grid-cols-4 gap-5">

        <div v-for="p in products">
            <ProductSingle :product="p"/>
        </div>


       

    </div>
</template>




<script setup>
definePageMeta({
    layout: 'fullwidth'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>