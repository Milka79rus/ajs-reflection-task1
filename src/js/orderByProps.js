export default function orderByProps(obj, sortOrder) {
  const result = [];
  const otherProps = [];

  // 1. Сначала проходим по массиву приоритетной сортировки
  for (const key of sortOrder) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  // 2. Используем for...in для поиска всех остальных свойств
  for (const key in obj) {
    // Проверяем, что свойства нет в уже добавленных (result)
    if (!sortOrder.includes(key)) {
      otherProps.push({ key, value: obj[key] });
    }
  }

  // 3. Сортируем "остальные" свойства по алфавиту (по ключу)
  otherProps.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  // 4. Объединяем оба массива
  return [...result, ...otherProps];
}