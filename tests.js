"use strict";

const assert = require("node:assert/strict");
const student = require("./student-template.js");

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(`  ${error.message}`);
    process.exitCode = 1;
  }
}

test("1. Сумма элементов массива", () => {
  assert.equal(student.sumArray([1, 2, 3, 4, 5]), 15);
  assert.equal(student.sumArray([10]), 10);
  assert.equal(student.sumArray([-5, 5, 10]), 10);
  assert.equal(student.sumArray([1.5, 2.5, 3]), 7);
});

test("2. Уникальные значения", () => {
  const first = [1, 2, 1, 3, 2, 4];
  const copy = first.slice();
  assert.deepEqual(student.uniqueValues(first), [1, 2, 3, 4]);
  assert.deepEqual(first, copy);

  assert.deepEqual(student.uniqueValues([5, 5, 5]), [5]);
  assert.deepEqual(student.uniqueValues([3, 2, 1]), [3, 2, 1]);
  assert.deepEqual(student.uniqueValues([]), []);
});

test("3. Минимум и максимум", () => {
  assert.deepEqual(student.minMax([3, 1, 7, -2, 10]), [-2, 10]);
  assert.deepEqual(student.minMax([5]), [5, 5]);
  assert.deepEqual(student.minMax([-10, -3, -20]), [-20, -3]);
  assert.deepEqual(student.minMax([1.5, 9.2, 4.4]), [1.5, 9.2]);
});

test("4. Сокращение текста", () => {
  assert.equal(student.shortenText("один два три четыре пять", 3), "один два три...");
  assert.equal(student.shortenText("один два. три четыре", 2), "один два...");
  assert.equal(student.shortenText("  один два три  ", 5), "один два три");
  assert.equal(student.shortenText("JavaScript", 1), "JavaScript");
});

test("5. Поменять части строки местами", () => {
  assert.equal(student.swapParts("hello world"), "world hello");
  assert.equal(student.swapParts("Java Script"), "Script Java");
  assert.equal(student.swapParts("first second"), "second first");
});

test("6. Разбор URL", () => {
  assert.deepEqual(
    student.parseUrlParts("https://dns-shop.ru/catalog/personal/?price=20000&brand=asus"),
    ["https", "dns-shop.ru", "/catalog/personal/", "price=20000&brand=asus"]
  );

  assert.deepEqual(
    student.parseUrlParts("https://example.com/catalog/item/?id=15&lang=ru"),
    ["https", "example.com", "/catalog/item/", "id=15&lang=ru"]
  );

  assert.deepEqual(
    student.parseUrlParts("http://site.local/path?x=1"),
    ["http", "site.local", "/path", "x=1"]
  );
});

if (!process.exitCode) {
  console.log("\nВсе тесты пройдены.");
}
