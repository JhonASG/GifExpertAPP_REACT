import React from "react";
import GifExpertApp from "../../GifExpertApp";
import { render, screen } from "@testing-library/react";

describe('Prueba en el componente GifExpertApp', () => {
    test('Debe renderizar correctamente el componente', () => {
        const view = render( <GifExpertApp /> );
        
        expect(view).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ["Naruto", "Dragon Ball", "One Punch", "Marvel"];

        const view = render( <GifExpertApp defaultCategory={ categories } /> );

		expect(screen.queryByRole('list').querySelectorAll('h3').length).toBe(categories.length);
        expect(view).toMatchSnapshot();
    })
});