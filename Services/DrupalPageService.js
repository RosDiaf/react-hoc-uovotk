import { API } from './constants'
const axios = require('axios')

async function getPages() {
  try {
    const response = await axios.get(API.url.pages)
  } catch(error) {
    console.log(error);
  }
  return response
}

export default getPages