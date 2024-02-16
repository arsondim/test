<template>
    <mode />
    <div>
        <h1>hello, {{ route.slug }}</h1>
    </div>
</template>



<script setup>
const route = useRoute()
</script>