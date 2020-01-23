import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2fc02b22ad399e9602b6cdb954c9a2a7762b14f5b3e93c94d71e49147d6907a4'
  }
})
