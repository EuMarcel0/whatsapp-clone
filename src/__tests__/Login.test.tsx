import { render, screen } from '@testing-library/react';
import { Login } from '../pages/login/Login';


describe('Buttons in page Login', () => {
	it('should have this button in Login page', () => {
		render(<Login />);
		const button = screen.getByTestId('google-button');
		expect(button).toBeInTheDocument();
	});
});
