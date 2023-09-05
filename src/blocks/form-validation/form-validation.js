/* global document */

const closest = require('closest');
import ready from 'Utils/documentReady.js';

ready(function(){

  // Для всех форм страницы

  window.validateAllForms = function () {
    const forms = Array.from(document.querySelectorAll('form[data-check-form]'));

    forms.forEach(function(form) {
      // Подпишемся на событие отправки
      form.addEventListener('submit', function(e){
        let valid = true;

        // Проверим все текстовые инпуты
        const fieldsText = Array.from(form.querySelectorAll('input[data-check-pattern], textarea[data-check-pattern]'));
        fieldsText.forEach(function(input){
          if(!checkFieldText(input)) valid = false;
        });

        // Проверим все чекбоксы
        const fieldsCheckbox = Array.from(form.querySelectorAll('input[data-check-state]'));
        fieldsCheckbox.forEach(function(input){
          if(!checkFieldCheckbox(input)) valid = false;
        });

        let inputEqual_2 = form.querySelector('input[data-equal_2]')

        if (inputEqual_2) {
          let inputEqual_1 = form.querySelector('input[data-equal_1]')

          if (inputEqual_1) {
            valid = checkEqual(inputEqual_1, inputEqual_2)

            inputEqual_2.addEventListener('blur', ()=>{
              valid = checkEqual(inputEqual_1, inputEqual_2)
            })
          }
        }

        // Если были ошибки, не отправляем форму
        if (!valid) {
          e.preventDefault();
        } else {
          // Если есть атрибут data-ajax, отправляем форму ajax
          if (form.hasAttribute('data-ajax')) {
            e.preventDefault();

            let formAction  = form.getAttribute('action'),
                formMethod = (form.getAttribute('method') || 'post').toLowerCase(),
                formErrorMsg = form.getAttribute('data-error-msg') || 'При отправке формы возникла ошибка, попробуйте перезагрузить страницу и отправить форму ещё раз',
                formOkMsg = form.getAttribute('data-ok-msg') || 'Форма успешно отправлена',
                xhr = new XMLHttpRequest();

            // Формируем запрос xhr
            xhr.open(formMethod, formAction, true)

            // Проверяем метод формы, отправяем xhr
            switch (formMethod) {
              case 'post':
                  // Если post, отправляем данные формы
                  let formData = new FormData(form);

                  xhr.send(formData)
                  break
              case 'get':
                  // Если get, получаем даннные
                  xhr.send()
                  break
              default:
                console.error(`Ошибка в значении data-method = ${formMethod}`)
            }

            // Обработка ответа xhr
            xhr.onload = function() {
              if (xhr.status != 200) {
                console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                if (form.hasAttribute('data-form-modal')) window.closeAllModals();
                showMessage(formErrorMsg, 'error');
              } else {
                let response = JSON.parse(xhr.response)

                if (response.status == 'error') {
                  if (form.hasAttribute('data-form-modal')) window.closeAllModals();
                  showMessage(response.msg, 'error');
                } else {
                  if (form.hasAttribute('data-form-modal')) window.closeAllModals();
                  showMessage(formOkMsg, 'ok');
                }
              }
            }

            // Обработка ошибки xhr
            xhr.onerror = function() {
              console.error("Запрос не удался")
              if (form.hasAttribute('data-form-modal')) window.closeAllModals();
              showMessage(formErrorMsg, 'error')
            }

            // Функция создания сообщения на ответ xhr
            function showMessage(textMessage, cssClassMessage){
              let responseWrapper = document.createElement('div'),
                  responseBlock = document.createElement('div'),
                  body = document.querySelector('body');

              responseWrapper.setAttribute('class','response-wrapper')
              responseBlock.setAttribute('class','response-block ' + cssClassMessage)
              responseBlock.textContent = textMessage

              body.insertAdjacentElement('beforeend', responseWrapper)
              body.insertAdjacentElement('beforeend', responseBlock)

              body.classList.add('scroll-off')
              responseWrapper.classList.add('active')
              responseBlock.classList.add('active')

              setTimeout(function(){
                body.classList.remove('scroll-off')
                responseWrapper.classList.remove('active')
                responseBlock.classList.remove('active')

                setTimeout(function(){
                  responseWrapper.remove()
                  responseBlock.remove()
                }, 500)
              }, 3500)
            }
          }
        }
      });

      // Для всех проверяемых текстовых полей
      const fieldsText = Array.from(document.querySelectorAll('input[data-check-pattern], textarea[data-check-pattern]'));
      fieldsText.forEach(function(input){
        let hasBeenAlreadyBlured = false;
        input.addEventListener('blur', function(){
          checkFieldText(input);
          if(!hasBeenAlreadyBlured) hasBeenAlreadyBlured = true;
        });
        input.addEventListener('input', function(){ if(hasBeenAlreadyBlured) checkFieldText(input); });
      });

      // Для всех проверяемых чекбоксов
      const fieldsCheckbox = Array.from(document.querySelectorAll('input[data-check-state]'));
      fieldsCheckbox.forEach(function(input){
        input.addEventListener('change', function(){ checkFieldCheckbox(input); });
      });

      function checkFieldText(input) {
        const regExp = new RegExp(input.dataset.checkPattern, 'gi');
        const result = regExp.test(input.value);
        const errorClass = 'field-text--error';
        const parent = closest(input, '.field-text');
        result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);

        return result;
      }

      function checkFieldCheckbox(input) {
        const trueVal = input.dataset.checkState == 'on' ? true : false;
        const result = trueVal === input.checked
        const errorClass = 'field-checkbox__input-wrap--error';
        const parent = closest(input, '.field-checkbox__input-wrap');
        result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
        return result;
      }

      function checkEqual(input1, input2) {
        let errorClass = 'field-text--error';
        let parent = closest(input2, '.field-text');

        if(input1.value != "" &&  input2.value != "" && input1.value == input2.value){
          console.info('Passwords equal')
          parent.classList.remove(errorClass)

          return true
        } else {
          console.error('Passwords not equal')
          parent.classList.add(errorClass)

          return false
        }
      }
    });
  };

  window.validateAllForms();
});
