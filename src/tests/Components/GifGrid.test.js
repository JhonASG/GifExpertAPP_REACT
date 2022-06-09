import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Pruebas para el componente GifGrid', () => {
    const category = 'Goku';

    test('Debe renderizar correctamente el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

		const view = render(<GifGrid category={category} />);

        const p = screen.queryByTestId('carga').isConnected;

        expect(view).toMatchSnapshot();
        expect(p).toBe(true);
    });

    // Las pruebas deben ser unitarias para evaluarlas por separado
    test('Debe mostrar items cuando se cargan imagenes del hook useFetchGifs', () => {
        const gifs = [{
            id: '123',
            title: "Goku",
            url: "https://Goku.jpg"
        },
        {
            id: '345',
            title: "Gohan",
            url: "https://Goku.jpg"
        }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

		const view = render(<GifGrid category={category} />);
        const p = screen.queryByTestId('carga');

        expect(view).toMatchSnapshot();
        expect(p).toBeNull();
        expect(screen.queryAllByTestId('container').length).toBe(gifs.length);
    });
});