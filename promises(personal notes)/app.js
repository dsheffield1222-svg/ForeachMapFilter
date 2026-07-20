// let url = 'https://swapi.dev/api/planets/1/';
// axios.get(url)
//     .then(res => {
//         console.log(res);
//         axios.get(res.data.residents[0])
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.log('ERROR', err)
//         })
//     })
//     .catch(err => console.log('Rejected', err));

let url = 'https://swapi.dev/api/planets/1/';
axios.get(url)
    .then(res => {
       console.log(res.data);
       return axios.get(res.data.residents[0]);
    })
    .then(res => {
        console.log(res.data);
        return axios.get(res.data.films[0]);
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log('Rejected', err));

    function wait3Seconds (){
        return new Promise ((resolve, reject) => {
            setTimeout(resolve, 3000)
            //resolve()
            //reject()

        })
    }

    wait3Seconds()
    .then(() => console.log('all done'))
    .catch(() => console.log('Failed'));

const h1 = document.querySelector('h1');

// setTimeout(() =>  {
//     h1.style.color ='red'
//     setTimeout(() => {
//         h1.style.color = 'orange'
//         setTimeout(() => {
//         h1.style.color = 'yellow'
//         setTimeout(() => {
//         h1.style.color = 'green'
//     }, 1000)
//     }, 1000)
//     }, 1000)
// },1000);

function changeColor(el, color){
    return new Promise ((run, reject) => {
        setTimeout(() => {
            el.style.color = color;
        run()
        }, 1000)
    })
}

changeColor(h1, 'teal')
.then(() => changeColor(h1, 'orange'))
.then(() => changeColor(h1, 'yellow'))
.then(() => changeColor(h1, 'blue'))
.then(() => changeColor(h1, 'green'))
.then(() => changeColor(h1, 'red'))


function mockAjaxReq(){ 
    return new Promise((resolve, reject) => {
    let probSuccess = 0.5;
    let requestTime = 1000;
    //We mock a network reqest using a set timeout

    setTimeout(() => {
        let randomNum = Math.random();
        if (randomNum < probSuccess) {
            let data = 'Data completely loaded';
            resolve(data);
        } else {
            reject('Sorry, request failed');
        }
    }, requestTime);
})};


mockAjaxReq()
.then(data => {
    console.log(data);
    return mockAjaxReq()
})
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

function get(url){
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = () => {
            if(request.readyState !==4) return;

            if(request.status >= 200 && request.status < 300){
                resolve({
                    data: JSON.parse(request.response),
                    status: request.status,
                    request: request
                })
            } else {
                reject({
                    msg: 'Server Error',
                    status: request.status,
                    request: request
            })
            }
            request.onerror = () => {
                request = null;
                reject('NETWORK ERROR')
            };
        }
        request.open("Get", url);
        request.send();
    })

}

get('https://swapi.dev/api/planets/1/')
.then(res => console.log(res))
.catch(err => console.log(err));