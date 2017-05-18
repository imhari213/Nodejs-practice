/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(174)();
	__webpack_require__(175)();
	__webpack_require__(176);


/***/ },

/***/ 174:
/***/ function(module, exports) {

	module.exports = function() {

		$(document).ready(function(){
			$('.search a').click(function(){
				$('.search-block').toggleClass('active');
			});
		});
	};

/***/ },

/***/ 175:
/***/ function(module, exports) {

	module.exports = function() {

	    $(document).ready(function() {

	        function equalHeight() {

	            if ($(window).width() > 768) {
	                // Cache the highest
	                var highestBox = 0;
	                // Select and loop the elements you want to equalise
	                $('.eq-height').each(function() {

	                    // If this box is higher than the cached highest then store it
	                    if ($(this).height() > highestBox) {
	                        highestBox = $(this).height();
	                    }
	                });

	                // Set the height of all those children to whichever was highest 
	                $('.eq-height').height(highestBox);
	            } else {
	                $('.eq-height').height('auto');
	            }
	        }

	        function equalHeight1() {

	            // Cache the highest
	            var highestBox = 0;
	            // Select and loop the elements you want to equalise
	            $('.eq-height1').each(function() {

	                // If this box is higher than the cached highest then store it
	                if ($(this).height() > highestBox) {
	                    highestBox = $(this).height();
	                }
	            });

	            // Set the height of all those children to whichever was highest 
	            $('.eq-height1').height(highestBox);
	        }

	        setTimeout(function() {

	            equalHeight();
	            equalHeight1();
	        }, 3000);


	        $(window).resize(function() {
	            equalHeight();
	            equalHeight1();
	        });

	        function sendContactMail(req, form) {

	            $.ajax({
	                method: 'POST',
	                url: '/api/contact-us',
	                data: req,
	                success: function(data) {

	                    $('#myModal').modal('show');
	                    $('#message').html(data);
	                    form[0].reset();
	                },
	                error: function(error) {

	                }
	            });
	        }

	        $('#submitFeedback').submit(function(event) {

	            var req = {},
	                vm = this;

	            req.name = $('#fdname').val();
	            req.email = $('#fdemail').val();
	            req.message = $('#fdmsg').val();

	            event.preventDefault();

	            sendContactMail(req, $(vm));
	        });

	        $('#cFeedbackForm').submit(function(event) {

	            var req = {},
	                vm = this;

	            req.name = $('#cname').val();
	            req.email = $('#cemail').val();
	            req.message = $('#cmsg').val();

	            event.preventDefault();

	            sendContactMail(req, $(vm));
	        });
	    });
	};


/***/ },

/***/ 176:
/***/ function(module, exports) {

	module.exports = function() {

	    function manipulateErrorClasses(element, classesList, flag) {

	        if (flag) {
	            element.classList.add(...classesList);
	        } else {
	            element.classList.remove(...classesList);
	        }
	    }

	    function manipulateErrorElement(element, parentElement, flag) {

	        if (flag) {
	            parentElement.parentNode.appendChild(element);
	        } else {
	            let sibling = element.nextElementSibling;
	            if (sibling) {
	                sibling.remove();
	            }
	        }
	    }

	    function resetForm(element) {

	        element.classList.remove('error');
	        manipulateErrorElement(element, null, false);
	    }

	    function configureErrorElement(errorMessage, className) {

	        let newElement = document.createElement('p');
	        newElement.innerHTML = errorMessage;
	        newElement.className = className;
	        return newElement;
	    }

	    function setErrorValidator(eleClassList, element, errorClassList, errorMessage, field, flag) {

	        let isErrorClass = eleClassList.contains('error');
	        if (flag) {
	            if (!isErrorClass) {
	                manipulateErrorClasses(element, errorClassList, true);
	                let className = errorClassList[0] + '-msg';
	                let newElement = configureErrorElement(errorMessage, className);
	                manipulateErrorElement(newElement, element, true);
	            }
	        } else {
	            if (element.nextElementSibling && isErrorClass) {
	                manipulateErrorClasses(element, errorClassList, false);
	                manipulateErrorElement(element, null, false);
	            }
	        }
	    }

	    function validateInputField(_params, flag) {

	        let params = _params;
	        if (flag) {
	            this.validationFlag = false;
	            setErrorValidator(...params, true);
	        } else {
	            setErrorValidator(...params, false);
	        }
	    }

	    class FormValidation {

	        constructor(form, config) {

	            this.form = form;
	            this.fields = config.fields;
	            this.validationFlag = true;
	            this.bindFormListener();
	        }

	        bindFormListener() {

	            let _form = this.form;
	            let formElement = document.querySelector(_form);
	            formElement.addEventListener('submit', this.validate.bind(this));
	        }

	        validate(e) {

	            this.validationFlag = true;
	            let fields = this.fields;
	            for (let field in fields) {

	                let inputObj = fields[field];
	                let element = document.querySelector(field);
	                let elementValue = element.value;
	                let eleClassList = element.classList;
	                let errorClassList = ['error'];
	                let _params = [elementValue, element, field, inputObj, eleClassList, errorClassList];
	                resetForm(element);

	                if (inputObj.required) {
	                    this.checkRequiredValidation(..._params);
	                }

	                if (inputObj.pattern) {
	                    this.checkPatternValidation(..._params);
	                }

	                if (inputObj.minLength) {
	                    this.checkMinLengthValidation(..._params);
	                }

	                if (inputObj.confirmPassword) {
	                    this.checkConfirmPasswordValidation(..._params, inputObj.confirmPasswordFieldConfig);
	                }
	            }

	            if (!this.validationFlag) {
	                e.preventDefault();
	            }
	        }

	        checkConfirmPasswordValidation(val, pwdelement, field, inputObj, pwdClassList, errorClassList, cnfPwdConfig) {

	            let cnfPwdElement = document.querySelector(cnfPwdConfig.id);
	            let cnfpwdElementValue = cnfPwdElement.value;
	            let errorMessage = cnfPwdConfig.mismatchMessage;
	            let _params = [pwdClassList, pwdelement, errorClassList, errorMessage, field];

	            if (val) {
	                let isPwdDiff = (val !== cnfpwdElementValue);
	                console.log(this)
	                validateInputField.bind(this)(_params, isPwdDiff);
	                if (isPwdDiff) {
	                    manipulateErrorClasses(cnfPwdElement, errorClassList, true);
	                } else {
	                    manipulateErrorClasses(cnfPwdElement, errorClassList, false);
	                }
	            }
	        }


	        checkRequiredValidation(val, element, field, inputObj, eleClassList, errorClassList) {

	            let errorMessage = inputObj.requiredErrorMessage;
	            let _params = [eleClassList, element, errorClassList, errorMessage, field];
	            validateInputField.bind(this)(_params, !val);
	        }

	        checkPatternValidation(val, element, field, inputObj, eleClassList, errorClassList) {

	            let errorMessage = inputObj.patternErrorMessage;
	            let _params = [eleClassList, element, errorClassList, errorMessage, field];
	            if (val) {
	                validateInputField.bind(this)(_params, !inputObj.patternMatcher.test(val));
	            }
	        }

	        checkMinLengthValidation(val, element, field, inputObj, eleClassList, errorClassList) {

	            let errorMessage = inputObj.minLengthErrorMessage;
	            let _params = [eleClassList, element, errorClassList, errorMessage, field];
	            if (val) {
	                let isMinimum = val.length < inputObj.minLengthValue;
	                validateInputField.bind(this)(_params, isMinimum);
	            }
	        }
	    }

	    return FormValidation;
	}


/***/ }

/******/ });