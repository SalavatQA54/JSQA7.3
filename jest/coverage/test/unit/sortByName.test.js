const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
    ]);
  });

  test("Not sorting because a = b", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Гарри Поттер",
      ])
    ).toEqual([
        "Гарри Поттер",
        "Гарри Поттер"
    ]);
  });

  test("Not sorting because already sorted", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ])
    ).toEqual([
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
    ]);
  });

});