// II

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(resp => {return resp.json()})
//   .then(data => {
//     data.forEach(user => {
//       const nomeri = `<li>${user.id}: ${user.title} </li>`;

//       document.getElementById('ul1').insertAdjacentHTML('beforeend', nomeri)
//     })
//   })
//   .catch(err => console.log(err))


// III, IV, V


const Fighter = {
  name: 'Jorge',
  username: 'Gamebred',
  lastName: 'Masvidal',
  fought: {
    opponent: 'Ben Askren',
    time: '5 seconds',
    win: 'By knockout'
  }
}


async function doAnything(Fighter) {
  return new Promise((res, rej) => {
    if (typeof Fighter !== 'object') {
      rej(new Error("let's do an object, mate"))
    } else {
      setTimeout(() => {
        let jobDone = JSON.parse(JSON.stringify(Fighter));
        res(jobDone);
      })
    }
  })
}


doAnything(Fighter).then (mamali => {console.log(mamali)}).catch(err => {console.log(err)})


