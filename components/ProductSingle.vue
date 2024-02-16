<template>
    <div class="bg-white text-slate-900 p-5 rounded-sm shadow-lg">

        <div class="name text-xl">

            <i class="material-icons m-2">add_shopping_cart</i>

            <NuxtLink :to="`/products/${product.id}`"> {{ product.title }} </NuxtLink>
        </div>
        <div class="price text-small ">{{ product.price }}</div>
        <div class="name text-base">{{ product.description }}</div>
        <div class="img p-4">
            <img :src="product.image" alt="Discover Nuxt 3" />
        </div>

    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>
