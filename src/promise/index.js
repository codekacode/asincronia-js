//ES6
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(false) {
      resolve('Hey is correct!')
    } else {
      reject('Upss!')
    }

  });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))