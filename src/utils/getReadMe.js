import axios from 'axios';

/**
 * I use this fetch function to get repository's ReadMe
 * @param {*} api
 * @param {*} cancelToken 
 */
export const getReadMe = (repoId, userId, cancelToken) => {


    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BASE_API_URL}/repos/${userId}/${repoId}/readme`, { cancelToken })
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