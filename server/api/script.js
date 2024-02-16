export default defineEventHandler(async(event) => {

    const { apiKey } = useRuntimeConfig()
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`)
    return data
 
  
})