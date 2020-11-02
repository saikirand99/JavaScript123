"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

arr = [1, 2, 3];

var _arr = arr,
    _arr2 = _slicedToArray(_arr, 3),
    a = _arr2[0],
    b = _arr2[1],
    c = _arr2[2];

console.log(a, b, c);

var _arr3 = arr,
    _arr4 = _slicedToArray(_arr3, 2),
    a = _arr4[0],
    c = _arr4[1];

console.log(a, b, c);
var a,
    c = arr;
console.log(a, c);