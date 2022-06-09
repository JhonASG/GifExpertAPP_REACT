import useFecthGifs from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas en el hook useFecthGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        // Con renderHook estamos creando un componente virtual donde podemos ejecutar el custom hook
        const { result, waitForNextUpdate } = renderHook( () => useFecthGifs( 'Dragon Ball' ) );

        // Obtenemos la información actual del custom hook
        const { data, loading } = result.current;
        await waitForNextUpdate();

        // Se Evalua que la el custom hook inicialmente tenga una data vacia y loading en true
        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y un loading en false', async() => {
        /*
            waitForNextUpdate -> Función que regresa una promesa para indicar cuando ha sucedido un cambio
            en el estado del custom hook, con esto simulas el useEffect() o cambio de estado
        */
        const { result, waitForNextUpdate } = renderHook( () => useFecthGifs( 'Dragon Ball' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBeFalsy();
    });
});