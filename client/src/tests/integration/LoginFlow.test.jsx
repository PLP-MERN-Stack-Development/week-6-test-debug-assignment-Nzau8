import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../../pages/Login';
import api from '../../services/api';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../services/api');

test('logs in user and stores JWT', async () => {
  api.post.mockResolvedValue({ data: { token: 'fake-jwt' } });
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@test.com' } });
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
  fireEvent.click(screen.getByText(/login/i));
  await waitFor(() => expect(localStorage.getItem('token')).toBe('fake-jwt'));
}); 