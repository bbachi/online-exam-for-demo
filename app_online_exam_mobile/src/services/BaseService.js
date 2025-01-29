import { getEnvironmentUrl } from '../config/config';

export async function postData(url, data) {
    
    const API_URL = getEnvironmentUrl();
    const response = await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function getData(url) {


    const API_URL = getEnvironmentUrl();
    const response = await fetch(`${API_URL}${url}`, 
    {
        method: 'GET'
    })
    return await response.json();
}

export async function updateInfo(url, data) {
    const response = await fetch(`${url}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json',
          'Ocp-Apim-Subscription-Key': '581ce4a8a14e4f7dbbdc6c64afe5509b'
        },
      body: JSON.stringify(data)
    });
    console.log(response)
    return await response.json();
}

export async function DeleteInfo(url, data) {
    const response = await fetch(`${url}`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json',
      'Ocp-Apim-Subscription-Key': '581ce4a8a14e4f7dbbdc6c64afe5509b'},
      body: JSON.stringify(data)
    });
    return await response.json();
}

export async function getInfoMockAPI(url) {
    console.log("*** executing parent getInfo ***")
    const response = await fetch(`${url}`, 
    {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'a07e3fa63cca49d1bb4a6a4eb29fc527'
        },
    })
    return await response.json();
}