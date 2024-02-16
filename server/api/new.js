export default defineEventHandler((event) => {
    const { data } = useFetch('https://fakestoreapi.com/products/')
    return data
})