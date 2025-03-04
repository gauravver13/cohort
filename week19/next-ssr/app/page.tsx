import axios from 'axios';

export default async function Home() {
  const loading = true;
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

  console.log(`Request went out!!`);
  const data = response.data;

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>{data.id}</h2>
      <h2>{data.name}</h2>
      <h2>{data.email}</h2>
    </div>
  );
}