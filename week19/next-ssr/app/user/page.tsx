import axios from 'axios';

export default async function User() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

  console.log(`Request went out!!`);

  await new Promise((resolve) => setTimeout(resolve, 5000));


  const data = response.data;




  return (
    <div>
      <h1>Home</h1>
      <h2>{data.id}</h2>
      <h2>{data.name}</h2>
      <h2>{data.email}</h2>
    </div>
  );
}