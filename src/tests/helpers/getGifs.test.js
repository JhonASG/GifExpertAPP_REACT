import { getGifs } from '../../helpers/getGifs.js';

describe('Pruebas con el helper getGifs Fetch', () => {
    test('Debe traer 10 elementos cuando getGifs recibe una parametro (categoria)', async() => {
        const gifs = await getGifs('Marvel');

        expect( gifs.length ).toBe( 10 );
    });

    test('getGifs no recibe ningun parametro o categoría', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });
});