
document.addEventListener("DOMContentLoaded", function(){

	let list = document.querySelector(".list");
	list.addEventListener("input", onChange);
	list.addEventListener("click", onClick);
	draw(pricelist, list);

	document.querySelector("#search").addEventListener("input", onFilter);
	document.querySelector(".closeLink").addEventListener("click", onClose);
	document.querySelector("#resultList").addEventListener("click", onShow);
	document.querySelector("#koef").addEventListener("input", drawSum);


});

// обработка фильтрации
function onFilter(e) {
	let filterString = e.target.value.trim().toLowerCase();


	pricelist.map((item) => {
		item.filtered = filterString.length <= 0 ? false : !item.name.toLowerCase().includes(filterString);
	})
	draw(pricelist, document.querySelector(".list"))
	
	if (filterString.length > 0) {
		document.querySelectorAll(".item__group").forEach(cat => cat.classList.add("open"))
	}
}

// обработка ввода данных в инпуты
function onChange(e) {
	let key = e.target.dataset.key;
	let val = parseFloat(e.target.value) || 0;
	
	update(key, val);
}
// обновляем значение суммы в массиве и отображение
function update(key, val) {
	// обновляем значение в массиве
	pricelist[key].sum = pricelist[key].cost * val;
	pricelist[key].count = val;

	// обновляем отображение
	document.querySelector("span[data-key=\'"+key+"\']").innerText = pricelist[key].sum +"р.";

	drawSum();
}

function drawSum() {
	let summa = pricelist.reduce((sum, current, index) => {
		return sum + current.sum;
	}, 0)

	let koef = document.querySelector("#koef").value
	summa *= koef

	document.querySelector(".sum").innerText = summa + "р.";
	document.querySelector(".resultSum").innerHTML = summa + "р.";
}

// обработка нажатий кнопок сброса
function onClick(e) {
	
	if(e.target.type == "button") {
		document.querySelector(".countField[data-key=\'"+e.target.dataset.key+"\']").value = '';
		update(e.target.dataset.key, '');
	}
	// открытие\закрытие списков
	if(e.target.classList.contains('item__category')) {
		e.target.parentNode.classList.toggle('open')	
	}
}

//отрисовка списка printList в указанный контейнер
function draw(printList, container) {
	let category = null;
	container.innerHTML = "";
	htmlString = "";
	printList.forEach((item, index) => {
		if(!item.filtered)
		{
			if(!category || item.category !== category) {
					if(htmlString !== "") {
						container.innerHTML += "<div class='item__group'>"+ htmlString+"<span class='item__group-counter'></span></div>"
					}

					htmlString = "<div class='item__category'>"+item.category+"</div>";
					category = item.category;
				}
				htmlString += "<div class='item'><span class='item__name'>"+item.name+"</span>	<div class='item__side'><input type=button class=clearBtn data-key="+index+" value=x /><input type='number' class=countField data-key="+index+" value="+item.count+"><span class=cost>"+item.cost+"р. "+item.unit+"</span><span class=rowSum data-key="+index+">"+item.sum+"р.</span></div></div>";
			}
	})
}


// модальное окно
function onShow() {

	let result = "<table>";
	pricelist.map((item) => {
		if(item.sum > 0){
			result += `<tr>
					<td>${item.name}  </td>
					<td>${item.cost}р.</td>
					<td>${item.count} ${item.unit}</td>
					<td>${item.sum}р.</td>
				</tr>`
		}
	})
	result += "</table>"
	document.querySelector(".resultList").innerHTML = result;

	document.querySelector(".modal").classList.add("active");
	document.body.style.overflow = 'hidden';
}
function onClose(e) {
	e.preventDefault();
	document.querySelector(".modal").classList.remove("active");
	document.body.style.overflow = 'auto';
}


// список всех расценок
// должно быть отсортировано по категории!!!
let pricelist = [
{"category": "Электрика", "name": "Монтаж люстры", "unit": "шт", "cost": 700, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж люстры со сборкой", "unit": "шт", "cost": 1200, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж бра", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Замена розетки/выключателя", "unit": "шт", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Замена розетки/выключателя с подрозетником", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Сверление под подрозетник (кирпич)", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж вентилятора", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж автомата", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Штроба кирпич", "unit": "м.п", "cost": 130, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Прокладка кабеля", "unit": "м.п", "cost": 50, count: "", "sum": 0, filtered: false},
{"category": "Электрика", "name": "Монтаж терморегулятора", "unit": "м.п", "cost": 1500, count: "", "sum": 0, filtered: false},

// ----------

{"category": "Полы", "name": "Настил фанеры на деревянное основание", "unit": "м2", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Настил фанеры на лаги", "unit": "м2", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Укладка ламината", "unit": "м2", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Укладка ламината по диагонали", "unit": "м2", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Настил линолиума", "unit": "м2", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Сварка швов линолиума", "unit": "м.п", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Монтаж плинтуса", "unit": "м.п", "cost": 100, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Монтаж порожков", "unit": "м.п", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Стяжка цементная до 50мм", "unit": "м2", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Заливка ровнителем до 15мм", "unit": "м2", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Протягивание полов", "unit": "м2", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Протягивание полов через фанеру", "unit": "м2", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Полы", "name": "Монтаж теплого пола (кабельный, пленочный)", "unit": "м2", "cost": 500, count: "", "sum": 0, filtered: false},

// ----------

{"category": "Плитка", "name": "Укладка плитки", "unit": "м2", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Укладка плитки крупнофарматной", "unit": "м2", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Укладка плиточного плинтуса", "unit": "м.п", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Заусовка плитки", "unit": "м.п", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Сверление отверстий в плитке до 50мм", "unit": "шт", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Сверление отверстий в плитке более 50мм", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Сверление отверстий в керамограните", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Плитка", "name": "Затирка швов", "unit": "м2", "cost": 150, count: "", "sum": 0, filtered: false},

// ----------

{"category": "Сантехника", "name": "Монтаж полипропиленовых труб D 20, 25", "unit": "м.п", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж полипропиленовых труб D 32", "unit": "м.п", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж труб канализации D <= 50", "unit": "м.п", "cost": 250, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж труб канализации D > 50", "unit": "м.п", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Утепление труб", "unit": "м.п", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка полотенцесушителя на п/п", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка ванны металлической", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка ванны пластиковой", "unit": "шт", "cost": 3000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка раковыны на кронштейн", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка раковыны с тумбой", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка раковыны с тумбой подвисной", "unit": "шт", "cost": 3000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж кухонной раковины накладной", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж кухонной раковины врезной", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж магистрального фильтра", "unit": "шт", "cost": 800, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж фильтра питьевой воды", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка газовой колонки", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка смесителя", "unit": "шт", "cost": 1000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка сифона раковины", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка унитаза", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка инсталяции", "unit": "шт", "cost": 3000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка арматуры к смывному бачку", "unit": "шт", "cost": 1000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка арматуры к смывному бачку со снятием бочка", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка, подключение стиральной машины", "unit": "шт", "cost": 1500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Установка счетчика воды", "unit": "шт", "cost": 600, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Нарезка резьбы", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Монтаж крана", "unit": "шт", "cost": 600, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Замена гибкой подводки", "unit": "шт", "cost": 800, count: "", "sum": 0, filtered: false},
{"category": "Сантехника", "name": "Замена прокладки", "unit": "шт", "cost": 300, count: "", "sum": 0, filtered: false},

// ----------

//расценки на стены
{"category": "Стены", "name": "Грунтовка стен", "unit": "м2", "cost": 70, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Нанесение бетонконтакта", "unit": "м2", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Нанесение гидроизоляции", "unit": "м2", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Монтаж панелей", "unit": "м2", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Монтаж панеляей на потолок", "unit": "м2", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Устройство каркаса под вагонку (ПВХ панели) на стены и потолок", "unit": "м2", "cost": 300, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Облицовка ГКЛ по каркасу в 1 слой", "unit": "м2", "cost": 350, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Монтаж потолочного плинтуса", "unit": "м.п", "cost": 120, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Монтаж утеплителя", "unit": "м2", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Оштукотуривание штробы", "unit": "м.п", "cost": 150, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Штукатурка по маякам", "unit": "м2", "cost": 600, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Установка мояков", "unit": "м.п", "cost": 100, count: "", "sum": 0, filtered: false},
{"category": "Стены", "name": "Подготовка стены (удаление краски)", "unit": "м2", "cost": 400, count: "", "sum": 0, filtered: false},

// ----------

//расценки на двери
{"category": "Двери", "name": "Монтаж двери", "unit": "шт", "cost": 3000, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Монтаж двери распашной", "unit": "шт", "cost": 4500, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Монтаж добора", "unit": "шт", "cost": 500, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Монтаж наличника", "unit": "м.п", "cost": 50, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Врезка замка", "unit": "шт", "cost": 600, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Расширение проема", "unit": "шт", "cost": 1000, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Расширение проема (бетон)", "unit": "м.п", "cost": 1000, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Отделка проема добором", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},
{"category": "Двери", "name": "Отделка откоса", "unit": "шт", "cost": 2000, count: "", "sum": 0, filtered: false},

// ----------

//расценки на демонтаж
{"category": "Демонтаж", "name": "Демонтаж деревянных полов", "unit": "м2", "cost": 200, count: "", "sum": 0, filtered: false},
{"category": "Демонтаж", "name": "Демонтаж двери", "unit": "шт", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Демонтаж", "name": "Демонтаж входной двери", "unit": "шт", "cost": 700, count: "", "sum": 0, filtered: false},
{"category": "Демонтаж", "name": "Демонтаж кафельной плитки", "unit": "м2", "cost": 400, count: "", "sum": 0, filtered: false},
{"category": "Демонтаж", "name": "Расчеканка труб чугун", "unit": "шт", "cost": 1000, count: "", "sum": 0, filtered: false},
{"category": "Демонтаж", "name": "Демонтаж труб", "unit": "м.п", "cost": 300, count: "", "sum": 0, filtered: false},

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
{"category": "Сайдинг", "name": "Установка вентиляционных решеток", "unit": "шт", "cost":	140, count: "", "sum": 0, filtered: false},

// ----------


//особенность отрисовка!!!!
//пустая категория для завершения отрисовка предыдущей
{"category": "end", "name": "end", "unit": "end", "cost": 0, count: "", "sum": 0, filtered: false},


];
