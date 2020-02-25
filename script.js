let tableInner = document.querySelector("#inner");
const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

getPlaces(url); //вызываем функцию получения

function getPlaces(url) {
  fetch(url)
    .then(function(res) {
      //console.table(res);
      if (res.ok) {
        return res.json();
      } else {
        alert("Fatal Error \n" + res.status);
      }
    })
    .then(function(json) {
      //работаем с json
      //console.table(json);
      const items = json;
      insertCard(items);
    });
}

function insertCard(items) {
  // функция для вставки
  let template = "";
  items.forEach(function(item) {
    template += `<tr>
    <td class="hidden-sm" data-label="Код цифровий"><span class="value">${item.r030}</span></td>
    <td data-label="Код літерний">${item.cc}</td>
    <td class="value-name" data-label="Назва валюти">${item.txt}
    </td>
    <td data-label="Офіційний курс">${item.rate}</td>
  </tr>`;
    console.dir(item); // показывыет свойства обьекта item (исп. для вставки в template)
    tableInner.innerHTML = template; // вставляеем html в tableInner
  });
}
