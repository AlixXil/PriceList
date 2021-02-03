// список всех расценок
// долно быть отсортировано по категории!!!
let pricelist = [
{"category": "Электрика", "name": "Монтаж люстры", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж люстры со сборкой", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж бра", "unit": "шт", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Замена разетки/выключателя", "unit": "шт", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж разетки/выключателя с подразетником", "unit": "шт", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж вентилятора", "unit": "шт", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж автомата", "unit": "шт", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Штроба кирпич", "unit": "м.п", "cost": 55, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Прокладка кабеля", "unit": "м.п", "cost": 25, count: "", "sum": 0, filtered: false},

// ----------

{"category": "Пол", "name": "Настил фанеры", "unit": "м2", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Пол", "name": "Укладка ламината", "unit": "м2", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Пол", "name": "Настил линолиума", "unit": "м2", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Пол", "name": "Монтаж плинтуса", "unit": "м.п", "cost": 80, count: "", "sum": 0, filtered: false},
{"category": "Пол", "name": "Стяжка цементная до 50мм", "unit": "м2", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Пол", "name": "Заливка ровнителем до 15мм", "unit": "м2", "cost": 120, count: "", "sum": 0, filtered: false},
{"category": "Пол", "name": "Установка мояков", "unit": "м.п", "cost": 30, count: "", "sum": 0, filtered: false},

// ----------

{"category": "Плитка", "name": "Укладка плитки менее 20х30", "unit": "м2", "cost": 850, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Укладка плиточного плинтуса", "unit": "м.п", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Сверление отверстий в плитке до 50мм", "unit": "шт", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Затирка швов", "unit": "м2", "cost": 70, count: "", "sum": 0, filtered: false},

// ----------

{"category": "Сантехника", "name": "Установка полотенцесушителя на п/п", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка газовой колонки", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж полипропиленовых труб D 32", "unit": "м.п", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж полипропиленовых труб D 20, 25", "unit": "м.п", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж труб канализации D <= 50", "unit": "м.п", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж труб канализации D > 50", "unit": "м.п", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка ванны металлической (сборка, сифон, подключение к каналицации)", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка ванны пластиковой", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка умывальника с тумбой", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка унитаза", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж мойки кухонной", "unit": "шт", "cost": 700, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж фильтра питьевой воды", "unit": "шт", "cost": 800, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Замена смесителя ванна", "unit": "шт", "cost": 600, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка сифона раковины (монтаж)", "unit": "шт", "cost": 100, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Замена сифона для умывальника", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка арматуры к смывному бачку", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка, подключение стиральной машины", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},

// ----------

//расценки на стены
	{"category": "Стены", "name": "Монтаж потолочного плинтуса", "unit": "м.п", "cost": 120, count: "", "sum": 0, filtered: false},
	{"category": "Стены", "name": "Грунтовка стен", "unit": "м2", "cost": 50, count: "", "sum": 0, filtered: false},
	{"category": "Стены", "name": "Зашивка панелями", "unit": "м2", "cost": 300, count: "", "sum": 0, filtered: false},
	{"category": "Стены", "name": "Зашивка панелями без профиля", "unit": "м2", "cost": 200, count: "", "sum": 0, filtered: false},
	{"category": "Стены", "name": "Устройство каркаса под вагонку (ПВХ панели) на стены и потолок", "unit": "м2", "cost": 180, count: "", "sum": 0, filtered: false},
	{"category": "Стены", "name": "Облицовка ГКЛ по каркасу в 1 слой", "unit": "м2", "cost": 350, count: "", "sum": 0, filtered: false},
	{"category": "Стены", "name": "Оштукотуривание штробы", "unit": "м.п", "cost": 50, count: "", "sum": 0, filtered: false},

// ----------

//расценки на двери
  {"category": "Двери", "name": "Монтаж двери", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
	{"category": "Двери", "name": "Монтаж добора", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
	{"category": "Двери", "name": "Врезка замка", "unit": "шт", "cost": 600, count: "", "sum": 0, filtered: false},
	{"category": "Двери", "name": "Установка дверных наличников", "unit": "м.п", "cost": 80, count: "", "sum": 0, filtered: false},
	{"category": "Двери", "name": "Монтаж наличника", "unit": "м.п", "cost": 50, count: "", "sum": 0, filtered: false},

// ----------

//расценки на демонтаж
	{"category": "Демонтаж", "name": "Демонтаж деревянных полов", "unit": "м2", "cost": 70, count: "", "sum": 0, filtered: false},
	{"category": "Демонтаж", "name": "Демонтаж старой двери", "unit": "шт", "cost": 200, count: "", "sum": 0, filtered: false},
	{"category": "Демонтаж", "name": "Демонтаж кафельной плитки", "unit": "м2", "cost": 300, count: "", "sum": 0, filtered: false},
	{"category": "Демонтаж", "name": "Расчеканка труб чугун", "unit": "шт", "cost": 400, count: "", "sum": 0, filtered: false},
	{"category": "Демонтаж", "name": "Демонтаж канализационных труб", "unit": "м.п", "cost": 50, count: "", "sum": 0, filtered: false},

// ----------

//разное
	{"category": "Разное", "name": "Монтаж полочек, мыльниц, крючков и т.п.", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},

// ----------

{"category": "Сайдинг", "name": "Демонтаж винилового сайдинга и комплектующих", "unit": "м2", "cost":	100, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Демонтаж выступающей кирпичной отделки здания", "unit": "м.п", "cost":	400, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Демонтаж выступающей отделки здания", "unit": "м.п", "cost":	180, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Демонтаж гидро-пароизоляции", "unit": "м2", "cost":	50, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Демонтаж обрешетки", "unit": "м2", "cost":	50, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Демонтаж отливов", "unit": "м.п", "cost":	36, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Демонтаж утеплителя", "unit": "м2", "cost":	70, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж винилового сайдинга", "unit": "м2", "cost":	250, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж винилового сайдинга (Подшив кровли)", "unit": "м2", "cost":	300, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж виниловых комплектующих", "unit": "м.п", "cost":	150, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж мет. комплектующих", "unit": "м.п", "cost":	200, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж водосточной системы ( желоб.труба)", "unit": "м.п", "cost":	330, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж гидро-пароизоляционной пленки", "unit": "м2", "cost":	60, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж деревянной обрешетки  (Выравнивающая)", "unit": "м2", "cost":	150, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж деревянной обрешетки по дереву", "unit": "м2", "cost":	100, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж деревянной обрешетки по кирпичу/бетону", "unit": "м2", "cost":	200, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж мет. обрешетки по дереву", "unit": "м2", "cost":	380, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж мет. обрешетки по кирпичу/бетону", "unit": "м2", "cost":	450, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж утеплителя  50 мм", "unit": "м2", "cost":	90, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж утеплителя 100 мм", "unit": "м2", "cost":	170, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Монтаж металлических отливов", "unit": "м.п", "cost": 100, count: "", "sum": 0, filtered: false},
{"category": "Сайдинг", "name": "Установка вентиляционных решеток", "unit": "шт", "cost":	140, count: "", "sum": 0, filtered: false}

// ----------

];
