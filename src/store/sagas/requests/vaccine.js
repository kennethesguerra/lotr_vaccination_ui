import axios from 'axios';

export function getVaccines() {
  return axios.request({
    method: "get", 
    url: "http://localhost:3000/vaccines"
  })
}
