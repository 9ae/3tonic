"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
	function Note(key, duration, strength) {
		_classCallCheck(this, Note);

		this.key = key;
		this.duration = duration;
		this.strength = strength;
	}

	_createClass(Note, [{
		key: "half",
		value: function half() {
			this.duration = this.duration * 2;
		}
	}, {
		key: "double",
		value: function double() {
			if (this.duration > 1) {
				this.duration = this.duration / 2;
			}
		}
	}, {
		key: "higher",
		value: function higher() {
			if (this.key < 127) {
				this.key += 1;
			}
		}
	}, {
		key: "lower",
		value: function lower() {
			if (this.key > 0) {
				this.key -= 1;
			}
		}
	}, {
		key: "octaveUp",
		value: function octaveUp() {
			var new_key = this.key + 12;
			if (new_key <= 127) {
				this.key = new_key;
			}
		}
	}, {
		key: "octaveDown",
		value: function octaveDown() {
			var new_key = this.key - 12;
			if (new_key >= 0) {
				this.key = new_key;
			}
		}
		/*
  get key(){
  	return this.key;
  }
  	set key
  	get duration() {
  	return this.duration;
  }
  	get strength() {
  	return this.strength;
  }
  */

	}]);

	return Note;
}();

var Bity = function Bity(syl, note) {
	_classCallCheck(this, Bity);

	this.syllable = syl;
	this.note = note;
};