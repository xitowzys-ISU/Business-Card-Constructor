// Сбор данных //
var constructorContainer = document.querySelectorAll(".constructorContainer .inputContainer");
console.info("Интерфейс приложения");
console.info(constructorContainer);

var cardContainer = document.querySelectorAll(".cardContainer > div:not(.contactInfo), .cardContainer .contactInfo > div");
console.info("Визитка");
console.info(cardContainer);

var constructorAddSecondTel = constructorContainer[3].querySelector(".addSecondTel input");
console.info("Кнопка добавить телефон");
console.info(constructorAddSecondTel);

var constructorSubmit = document.querySelector(".btnSubmit");
console.info("Кнопка добавить на визитку");
console.info(constructorSubmit);

// События на кнопки //
constructorAddSecondTel.addEventListener("click", addField);
constructorSubmit.addEventListener("click", apply);

// Добавить второй номер //
function addField(e) {
	var newField = document.createElement("div");

	// Поле ввода //

	newField.classList = "containerSecondTel";
	newField.innerHTML = '<input type="tel" name="containerTel"><input class="btn btnDelete" type="button" value="-">';
	constructorContainer[3].appendChild(newField);
	newField.parentNode.children[3].style.display = 'none';
	constructorContainer[3].querySelector(".containerSecondTel input[type='button']").addEventListener("click", removeNewPhone);


	// Номер на визитке //
	newField = document.createElement("div");
	newField.classList = "cardSecondPhone";
	newField.innerHTML = '<span></span>';
	cardContainer[3].after(newField);

	cardContainer = document.querySelectorAll(".cardContainer > div:not(.contactInfo), .cardContainer .contactInfo > div");

}

// Удалить второй номер //
function removeNewPhone(e) {
	constructorContainer[3].querySelector(".containerSecondTel").remove();
	constructorContainer[3].querySelector(".addSecondTel").style.display = null;

	cardContainer[4].remove();
}


// Добавить на визитку //
function apply(e) {

	var constructorContainerInputs = document.querySelectorAll(".inputContainer input[type='text'], input[type='email'], input[type='tel']");

	var constructorContainerConstructorNameAlign = constructorContainer[1].querySelectorAll(".multiButton")[0].querySelectorAll(".multiButtonGroupItem > input");
	var constructorContainerConstructorNameSize = constructorContainer[1].querySelectorAll(".multiButton")[1].querySelectorAll(".multiButtonGroupItem > input");
	var constructorContainerConstructorNameColor = constructorContainer[1].querySelectorAll(".colorPicker label > input");

	var constructorContainerConstructorPositionAtWorkAlign = constructorContainer[2].querySelectorAll(".multiButton")[0].querySelectorAll(".multiButtonGroupItem > input");
	var constructorContainerConstructorPositionAtWorkSize = constructorContainer[2].querySelectorAll(".multiButton")[1].querySelectorAll(".multiButtonGroupItem > input");
	var constructorContainerConstructorPositionAtWorkColor = constructorContainer[2].querySelectorAll(".colorPicker label > input");

	var constructorContainerConstructorContainerEmailCheckBox = constructorContainer[4].querySelector(".checkboxLabel input");
	var constructorContainerConstructorContainerAddress = constructorContainer[5].querySelector(".checkboxLabel input");

	for (var i = constructorContainerInputs.length - 1; i >= 0; i--) {
		if (constructorContainerInputs[i].name == "constructorName") {
			for (var j = constructorContainerConstructorNameSize.length - 1; j >= 0; j--) {
				if (constructorContainerConstructorNameSize[j].checked) {
					cardContainer[i].style.fontSize = constructorContainerConstructorNameSize[j].value + 'px';
				}
			}

			for (var j = constructorContainerConstructorNameAlign.length - 1; j >= 0; j--) {
				if (constructorContainerConstructorNameAlign[j].checked) {
					cardContainer[i].style.textAlign = constructorContainerConstructorNameAlign[j].value;
				}
			}

			for (var j = constructorContainerConstructorNameColor.length - 1; j >= 0; j--) {
				if (constructorContainerConstructorNameColor[j].checked) {
					cardContainer[i].style.color = constructorContainerConstructorNameColor[j].value;
				}
			}
		}

		if (constructorContainerInputs[i].name == "containerPositionAtWork") {
			for (var j = constructorContainerConstructorPositionAtWorkSize.length - 1; j >= 0; j--) {
				if (constructorContainerConstructorPositionAtWorkSize[j].checked) {
					cardContainer[i].style.fontSize = constructorContainerConstructorPositionAtWorkSize[j].value + 'px';
				}
			}

			for (var j = constructorContainerConstructorPositionAtWorkAlign.length - 1; j >= 0; j--) {
				if (constructorContainerConstructorPositionAtWorkAlign[j].checked) {
					cardContainer[i].style.textAlign = constructorContainerConstructorPositionAtWorkAlign[j].value;
				}
			}

			for (var j = constructorContainerConstructorPositionAtWorkColor.length - 1; j >= 0; j--) {
				if (constructorContainerConstructorPositionAtWorkColor[j].checked) {
					cardContainer[i].style.color = constructorContainerConstructorPositionAtWorkColor[j].value;
				}
			}
		}

		if (constructorContainerInputs[i].name == "containerEmail") {
			if (!constructorContainerConstructorContainerEmailCheckBox.checked) {
				console.log(constructorContainerConstructorContainerEmailCheckBox);
				cardContainer[i].style.display = "none";
			} else {
				cardContainer[i].style.display = null;
			}
		}

		if (constructorContainerInputs[i].name == "containerAddress") {
			if (!constructorContainerConstructorContainerAddress.checked) {
				console.log(constructorContainerConstructorContainerAddress);
				cardContainer[i].style.display = "none";
			} else {
				cardContainer[i].style.display = null;
			}
		}

		var output = document.createElement("span");
		output.innerText = constructorContainerInputs[i].value;

		cardContainer[i].innerHTML = '';
		cardContainer[i].appendChild(output);
	}
}