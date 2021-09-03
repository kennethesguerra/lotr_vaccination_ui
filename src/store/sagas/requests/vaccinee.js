import axios from 'axios';

const url = "http://localhost:3000/vaccinees";

export function getVaccinees() {
  return axios.request({
    method: "get", 
    url
  })
}

export function createVaccinee(data) {
  return axios.request({
    method: "post", 
    url, 
    data
  })
}

export function getVaccinee(vaccineId) {
  return axios.request({
    method: "get", 
    url: url + '/get/' + vaccineId
  })
}

export function updateVaccinee(data){
  return axios.request({
    method: "patch", 
    url, 
    data
  })
}

export function deleteVaccinee(vaccineeId) {
  return axios.request({
    method: "delete", 
    url: url + "/" + vaccineeId
  })
}