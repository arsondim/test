<template>
    <div>

        <Head>
            <Title> {{ product.title }} </title>
            <Meta name="Description" :content="product.description" />
        </Head>
        <Menu />
    </div>
    <div class="grid grid-cols-4 gap-5">

        <div>
            <ProductSingle :product="product" />

        </div>

    </div>
</template>




<script setup>

const { id } = useRoute().params

definePageMeta({
    layout: 'fullwidth'
})

const uri = 'https://fakestoreapi.com/products/' + id
const { data: product } = await useFetch(uri);

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Jezu', fatal: true })
}


const route = useRoute()
</script>