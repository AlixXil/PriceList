document.addEventListener("DOMContentLoaded", function(){

	let list = document.querySelector(".list");
	list.addEventListener("input", onChange);
	list.addEventListener("click", onClick);
	draw(pricelist, list);

	document.querySelector("#search").addEventListener("input", onFilter);
	document.querySelector(".closeLink").addEventListener("click", onClose);
	document.querySelector("#resultList").addEventListener("click", onShow);
});

// обработка фильтрации
function onFilter(e) {
	let filterString = e.target.value.trim().toLowerCase();


	pricelist.map((item) => {
		item.filtered = filterString.length === 0 ? false : !item.name.toLowerCase().includes(filterString);
	})
	draw(pricelist, document.querySelector(".list"))
}

// обработка ввода данных в инпуты
function onChange(e) {
	let key = e.target.dataset.key;
	let val = parseInt(e.target.value) || 0;
	
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

	document.querySelector(".sum").innerText = summa + "р.";
	document.querySelector(".resultSum").innerHTML = summa + "р.";
}

// обработка нажатий кнопок сброса
function onClick(e) {
	if(e.target.type == "button") {
		document.querySelector(".countField[data-key=\'"+e.target.dataset.key+"\']").value = '';
		update(e.target.dataset.key, '');
	}
}

//отрисовка списка printList в указанный контейнер
function draw(printList, container) {
	let category = null;
	container.innerHTML = "";
	printList.forEach((item, index) => {
		if(!item.filtered)
		{
			if(!category || item.category !== category) {
					container.innerHTML += "<div class='item__category'>"+item.category+"</div>";
					category = item.category;
				}
				container.innerHTML += "<div class='item'><span class='item__name'>"+item.name+"</span>	<div class='item__side'><input type=button class=clearBtn data-key="+index+" value=x /><input type='text' class=countField data-key="+index+" value="+item.count+"><span class=cost>"+item.cost+"р. "+item.unit+"</span><span class=rowSum data-key="+index+">"+item.sum+"р.</span></div></div>";
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
}
function onClose(e) {
	e.preventDefault();
	document.querySelector(".modal").classList.remove("active");
}