import { http, delay, HttpResponse } from 'msw';
// Import the user list
import users from '../auth-users/users_list.json';

const isAuthenticated = (username, password) => {
  // return username === 'assiduous' && password === 'KC0001';

  // Convert both the input and stored values to lowercase for case-insensitive comparison
  const user = users.data.find(
    (user) =>
      user.name.toLowerCase().trim() === username.toLowerCase().trim() &&
      user.code.toLowerCase().trim() === password.toLowerCase().trim()
  );

  // Find the user in the list
  // console.log('Users:', users);

  // console.log('matching user:', user);

  if (user) {
    // Store the matched user object in local storage
    localStorage.setItem('authenticatedUser', JSON.stringify(user));
  }
  return !!user;
};

export const handlerAuth = [
  http.post('/api/auth/login', async ({ request }) => {
    const { username, password } = (await request.json()) as { username: string; password: string };
    // console.log(username, password);
    const statusCode = isAuthenticated(username, password) ? 200 : 400;
    const data = isAuthenticated(username, password)
      ? {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg',
          expires_in: 1000000
          // expires_in: 86400
        }
      : {
          errorCode: '400',
          errorMessage: 'Auth Failed.'
        };
    await delay(1000);
    return HttpResponse.json(data, { status: statusCode });
  })
];
