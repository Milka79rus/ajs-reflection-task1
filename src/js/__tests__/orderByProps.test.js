import orderByProps from '../orderByProps';

test('должен сортировать свойства по заданному списку и по алфавиту', () => {
    const obj = {
        name: 'мечник',
        health: 10,
        level: 2,
        attack: 80,
        defence: 40,
    };
    const sortOrder = ['name', 'level'];

    const result = orderByProps(obj, sortOrder);

    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ];

    expect(result).toEqual(expected);
});

test('должен корректно работать, если массив сортировки пустой', () => {
    const obj = { b: 2, a: 1, c: 3 };
    const sortOrder = [];

    const result = orderByProps(obj, sortOrder);

    const expected = [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
        { key: 'c', value: 3 },
    ];

    expect(result).toEqual(expected);
});

test('должен игнорировать ключи из sortOrder, которых нет в объекте', () => {
    const obj = { name: 'мечник' };
    const sortOrder = ['name', 'nonexistent']; // 'nonexistent' нет в объекте

    const result = orderByProps(obj, sortOrder);

    const expected = [
        { key: 'name', value: 'мечник' },
    ];

    expect(result).toEqual(expected);
});