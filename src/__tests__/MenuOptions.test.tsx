import { MenuOptions } from '../shared/components';
import { render, screen } from '@testing-library/react';

it('Should have a chat item', () => {
	render(<MenuOptions />);
	expect(screen.getByText('Novo grupo')).toBeInTheDocument();
});
