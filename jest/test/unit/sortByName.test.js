const sorting = require("../../app");                               //импортируем тестируемую функцию, указывая путь

describe("Books names test suit", () => {                           //метод из теста или набора тестов
  it("Books names should be sorted in ascending order", () => {     //метод из отдельного теста
    const data = [                                                  //подготовавливаем данные для проверки функции
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [                                               //ожидаемый результат
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(data);                         //передаем в тестируемую функцию подготовленные данные и получаем результат

    expect(result).toEqual(expected);                                //сравниваем результат тестируемой функции с ожидаемым результатом
  });

  it("Should throw an exception when calling", () => {               
    expect(() => sorting.sortByName()).toThrow();
  })

  it("Should be sorting even if Books names recurring", () => {
    const data = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ];

    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(data);                       

    expect(result).toEqual(expected);                              
  });

});