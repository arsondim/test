<template>
    <div>
        <header>

            <ul class="flex gap-3">
                <li><nuxt-link to="/products/">home</nuxt-link></li>
                <li><nuxt-link to="/products/mario">Mario</nuxt-link></li>
                <li><nuxt-link to="/products/luigi">Luigi</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>

            </ul>

        </header>

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