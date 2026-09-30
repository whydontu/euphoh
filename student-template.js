"use strict";

// Практическая работа №4
// Тема: массивы и строки.
// Заполните только участки TODO.
// Названия функций, параметры и module.exports не изменяйте.

// 1. Сумма элементов массива
// Вернуть сумму всех чисел массива numbers.
// Гарантируется, что массив не пуст и содержит только числа.
function sumArray(numbers) 
{
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  return sum;
}

// 2. Уникальные значения
// Вернуть новый массив без повторяющихся значений.
// Порядок первого появления элементов нужно сохранить.
// Не изменяйте исходный массив.
function uniqueValues(values) 
{
  const result = [];
  for (let i = 0; i < values.length; i++)
  {
    if (result.indexOf(values[i]) === -1)
    {
      result.push(values[i]);
    }
  }
  return result;
}

// 3. Минимум и максимум
// Вернуть массив [min, max].
// Гарантируется, что numbers содержит хотя бы одно число.
// Math.min() и Math.max() в этой задаче не используйте.
function minMax(numbers)
{
  let min = numbers[0];
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++)
  {
    if (numbers[i] < min)
    {
      min = numbers[i];
    }
    if (numbers[i] > max)
    {
      max = numbers[i];
    }
  }
  return [min, max];
}

// 4. Сокращение текста
// Если слов больше maxWords, оставить первые maxWords слов и добавить многоточие.
// Если получившийся фрагмент уже заканчивается точкой, добавить только две точки.
// Если слов не больше maxWords — вернуть текст без изменений по смыслу, но без пробелов по краям.
// В условии гарантируется, что слова разделены одним пробелом.
function shortenText(text, maxWords) 
{
  const clean = text.trim();
  const words = clean.split(" ");

  if (words.length <= maxWords) 
  {
    return clean;
  }

  const part = words.slice(0, maxWords).join(" ");

  if (part[part.length - 1] === ".")
  {
    return part + "..";
  }

  return part + "...";
}

// 5. Поменять две части строки местами
// Строка состоит ровно из двух непустых частей, разделённых одним пробелом.
// Пример: swapParts("hello world") -> "world hello"
function swapParts(text) 
{
  const parts = text.split(" ");
  return parts[1] + " " + parts[0];
}

// 6. Разбор URL без объекта URL
// Вернуть массив [protocol, domain, uri, query].
// Входная строка содержит протокол, домен, путь и query-параметры.
// Пример:
// parseUrlParts("https://site.ru/catalog/?id=5")
// -> ["https", "site.ru", "/catalog/", "id=5"]
function parseUrlParts(url)
{
  const protocolEnd = url.indexOf("://");
  const protocol = url.slice(0, protocolEnd);

  const rest = url.slice(protocolEnd + 3);
  const queryStart = rest.indexOf("?");

  const query = rest.slice(queryStart + 1);
  const withoutQuery = rest.slice(0, queryStart);

  const slash = withoutQuery.indexOf("/");
  const domain = withoutQuery.slice(0, slash);
  const uri = withoutQuery.slice(slash);

  return [protocol, domain, uri, query];
}

module.exports = 
{
  sumArray,
  uniqueValues,
  minMax,
  shortenText,
  swapParts,
  parseUrlParts,
};
