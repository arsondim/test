export default defineEventHandler(async(event) => {

    const { code } = event.context.params
    const { apiKey } = useRuntimeConfig()
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${code}&base_currency=EUR`)
    return data
})

