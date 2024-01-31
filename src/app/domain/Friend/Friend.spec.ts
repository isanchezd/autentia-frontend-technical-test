import { Friend } from "./Friend";

describe('Friend Domain', () => {
    it('Should be created', () => {
        const friend = new Friend(1, 'Iván', 'Sanchez')
        expect(friend).toBeTruthy();
    });

    it('When new amount is created and the Amount prop id is 0, this should be throw an error', () => {
        expect(() => new Friend(0, 'Iván', 'Sánchez')).toThrowError('Invalid Id');
    })

    it('When new amount is created an the Currency prop name is empty, this should be throw an error', () => {
        expect(() => new Friend(56.73, '', 'Sanchez')).toThrowError('Invalid Name');
    })

    it('When new amount is created an the Currency lastname prop is empty, this should be throw an error', () => {
        expect(() => new Friend(56.73, 'Iván', '')).toThrowError('Invalid Lastname');
    })
});
