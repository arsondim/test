<template>
    <div class="bg-black py-4">

        <div class="container m-auto">

        <header class="flex justify-between">

            <div class="logo font-black">.LOGO</div>

            <ul class="flex gap-3">
                <li><nuxt-link class="hover:text-freshGreen" to="/products/">Home</nuxt-link></li>
                <li><nuxt-link class="hover:text-freshGreen" to="/products/mario">Mario</nuxt-link></li>
                <li><nuxt-link class="hover:text-freshGreen" to="/products/luigi">Luigi</nuxt-link></li>
                <li><nuxt-link class="hover:text-freshGreen" to="/about">About</nuxt-link></li>

            </ul>

        </header>
    </div>
    </div>

    <div>
        <mode />
    </div>

</template>


<style lang="postcss">
.router-link-exact-active {
    @apply text-freshGreen
}
</style> 