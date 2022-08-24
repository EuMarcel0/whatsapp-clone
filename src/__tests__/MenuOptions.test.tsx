import { MenuOptions } from '../shared/components';
import { render } from '@testing-library/react';

it('Should have a exist', () => {
	const { getByText } = render(<MenuOptions />);

	expect(getByText('Novo grupo')).toBeInTheDocument();
	expect(getByText('Mensagens com estrela')).toBeInTheDocument();
	expect(getByText('Configurações')).toBeInTheDocument();
	expect(getByText('Mudar tema')).toBeInTheDocument();
	expect(getByText('Sair')).toBeInTheDocument();
});
