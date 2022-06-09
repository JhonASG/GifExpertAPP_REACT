import React from 'react';
import { render, screen } from "@testing-library/react";
import { GifGridItem } from '../../components/GifGridItem.js';

describe ('Pruebas para el componente GifGridItem', () => {
    const title = "Goku";
    const url = "https://GokuElMasFuerte.org";
    let view;

    const renderComponent = () => {
        view = render(<GifGridItem title={title} url={url} />);
    }

    beforeEach (() => {
        renderComponent();
    })

    test('Funcionamiento del componente', () => {
        expect(view).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo buscando', () => {
        expect(screen.getByText(title)).toContainHTML('p');
    });

	test('Debe tener la imagen igual al url y alt de los props', () => {
		const imgSrc = screen.getByRole('img').getAttribute('src');
		const imgAlt = screen.getByRole('img').getAttribute('alt');

		expect(imgSrc).toBe(url);
		expect(imgAlt).toBe(title);
	});

	test('Debe tener como estilo el contenedor div -> animate__rotateInDownLeftt', () => {
		const container = screen.getByTestId('container').className;

		expect(container).toContain('animate__rotateInDownLeft');
	});
});