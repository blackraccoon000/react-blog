import axios from "axios"

// axios.get("https://dog.ceo/api/breeds/image/random").then(res => console.log(res))


// const test = axios.get("https://dog.ceo/api/breeds/image/random").then(res => res)
// console.log(test)

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => console.log(res.data))

const apiUrl = process.env.MICRO_CMS_API_URL
const apiKey = process.env.MICRO_CMS_API_KEY
const config = {headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey
}}

axios.get(apiUrl,config).then(res => console.log(res))