Feature: Проверка раздела "Промо" неавторизованным пользователем

  Scenario Outline: Как неавторизованный пользователь я могу проверить раздел "Промо"

    Given Открыть сайт на Промо
    When Кликнуть Статусы
    Then Статус Elite отображается
    When Кликнуть Турниры
    Then Points турнир отображается
    When Кликнуть Бонус
    Then Бонус на ДР отображается
    When Кликнуть Лотереи
    Then Кнопки Узнать больше отображается на лотереях Rox Chart и Jingle Bells
    When Кликнуть Кэшбэк
    Then Информация o получении кэшбэка отображается