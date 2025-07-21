import { render, screen, fireEvent } from '@testing-library/react';
import MessageInput from '../../components/MessageInput';

test('MessageInput allows typing', () => {
  const handleSend = jest.fn();
  render(<MessageInput onSend={handleSend} />);
  const input = screen.getByPlaceholderText(/type a message/i);
  fireEvent.change(input, { target: { value: 'Hello' } });
  expect(input.value).toBe('Hello');
}); 