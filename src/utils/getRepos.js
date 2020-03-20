import axios from 'axios';

/**
 * I use this fetch function in main page and to get user's repositories
 * @param {*} api
 * @param {*} cancelToken 
 */
export const getRepos = (userName, cancelToken) => {


    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BASE_API_URL}/users/${userName}/repos`, { cancelToken })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                  } else if (error.message === 'Request failed with status code 404') {
                      resolve([])
                  } else {
                      reject(error);
                  }
            });
    })
}