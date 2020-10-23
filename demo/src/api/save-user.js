export async function saveUser(userObject) {
  const requestObject = {
    user: userObject,
  };
  const body = JSON.stringify(requestObject);
  console.log(requestObject);
  const response = await fetch(
    'https://ct9b2cvf7h.execute-api.us-west-1.amazonaws.com/dev/users',
    {
      method: 'POST',
      body: JSON.stringify(requestObject),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    },
  );
  if (!response.ok) {
    alert(`Well snap, something went wrong`);
  }
  return response.json();
}
