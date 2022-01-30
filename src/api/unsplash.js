import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZJ8vIV9b-cUCC9Ssu-WSAlhPt3LXIpbfhxxTbiTiwng'
  }
})