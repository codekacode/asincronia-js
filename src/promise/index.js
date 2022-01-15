//ES6
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey is correct!')
    } else {
      reject('Upss!')
    }

  });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('True');
      }, 2000)
    } else {
      const error = new Error('upsss!!!') //nos da un error mas descria para debugear mejor
      reject(error);
    }
  });
};

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err))

//correr promesas encadenadas Promise.all que retoranara una arreglo

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
  console.log('Array de resultados', response)
})
.catch(err => {
  console.error(err);
})