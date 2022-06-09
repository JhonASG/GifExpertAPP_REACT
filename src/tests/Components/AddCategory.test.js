import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddCategory from "../../components/AddCategory";

describe('Pruebas en el componente Add Category', () => {
    // jest.fn(), simula una función
	const setCategories = jest.fn();
    let view;

    let renderComponent = () => {
        view = render(<AddCategory setCategories={setCategories}/>);
    };

    beforeEach(() => {
		jest.clearAllMocks();
        renderComponent();
    })
    
    test('Debe renderizarse correctamente el componente', () => {
        expect(view).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
		const input = screen.getByRole('textbox');
		const value = "Hola Mundo";

		fireEvent.change(input, {target: {value: value}});

		const valueInput = input.getAttribute('value'); 
		expect(valueInput).toBe(value);
    });

	test('No debe de postear la información con submit', () => {
		const form = screen.getByTestId('form');

		fireEvent.submit(form, { preventDefault(){} });

		// Es verificar cuando al no hemos pasado ningún valor al evento handleInputChange
		expect( setCategories ).not.toHaveBeenCalled();
	});

	test('debe de llama el setCategories y limpiar la caja de texto', () => {
		// Simular inputChange
		const input = screen.getByRole('textbox');
		const value = "Goku";

		fireEvent.change(input, {target: {value: value}});

		// Simular Submit
		const form = screen.getByTestId('form');

		fireEvent.submit(form, { preventDefault(){} });

		// setCategories se debe de haber llamado
		expect(setCategories).toHaveBeenCalled();
		// Verificar que setCategories se halla llamado como una función
		expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

		// inputValue debe estar '' (vacio)
		const valueInput = input.getAttribute('value');
		expect(valueInput).toBe('');
	});
});