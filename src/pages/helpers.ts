export const getAccessories = async () => {
  console.log('begin');
  await fetch('http://localhost:3000/accessories', {
    method: 'GET'
  }).then((resp) => {
    resp.text().then((result) => {
      console.log(result);

    });
  })
}