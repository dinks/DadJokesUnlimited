import React from 'react-native';

const API_URL = 'https://icanhazdadjoke.com/'

export default class Api {
  getData(cb) {
    return fetch(API_URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((responseData) => responseData.joke);
  }
}
