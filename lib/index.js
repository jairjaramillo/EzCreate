"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ezCreate;

/**
 * Creates an HTML element and appends it to another HTML element.
 * @param {HTMLElement | null} appendTo HTML element where the create function witll append to. Use NULL to avoid this.
 * @param {String} className (Optional) The class or classes the element will have.
 * @param {String} idName (Optional) The ID tag of the element.
 * @param {String} elementType (Optional) The type of the element it will be created. <div> by default.
 */
function ezCreate(appendTo) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var idName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var elementType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'div';
  var element = document.createElement(elementType);
  if (className !== '') element.className = className;
  if (idName !== '') element.id = idName;
  if (appendTo != null) appendTo.appendChild(element);
  return element;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJlekNyZWF0ZSIsImFwcGVuZFRvIiwiY2xhc3NOYW1lIiwiaWROYW1lIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7O0FBT2UsU0FBU0EsUUFBVCxDQUNiQyxRQURhLEVBS0E7QUFBQSxNQUhiQyxTQUdhLHVFQUhPLEVBR1A7QUFBQSxNQUZiQyxNQUVhLHVFQUZJLEVBRUo7QUFBQSxNQURiQyxXQUNhLHVFQURTLEtBQ1Q7QUFDYixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsV0FBdkIsQ0FBaEI7QUFDQSxNQUFJRixTQUFTLEtBQUssRUFBbEIsRUFBc0JHLE9BQU8sQ0FBQ0gsU0FBUixHQUFvQkEsU0FBcEI7QUFDdEIsTUFBSUMsTUFBTSxLQUFLLEVBQWYsRUFBbUJFLE9BQU8sQ0FBQ0csRUFBUixHQUFhTCxNQUFiO0FBQ25CLE1BQUlGLFFBQVEsSUFBSSxJQUFoQixFQUFzQkEsUUFBUSxDQUFDUSxXQUFULENBQXFCSixPQUFyQjtBQUN0QixTQUFPQSxPQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZXMgYW4gSFRNTCBlbGVtZW50IGFuZCBhcHBlbmRzIGl0IHRvIGFub3RoZXIgSFRNTCBlbGVtZW50LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bGx9IGFwcGVuZFRvIEhUTUwgZWxlbWVudCB3aGVyZSB0aGUgY3JlYXRlIGZ1bmN0aW9uIHdpdGxsIGFwcGVuZCB0by4gVXNlIE5VTEwgdG8gYXZvaWQgdGhpcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgKE9wdGlvbmFsKSBUaGUgY2xhc3Mgb3IgY2xhc3NlcyB0aGUgZWxlbWVudCB3aWxsIGhhdmUuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWROYW1lIChPcHRpb25hbCkgVGhlIElEIHRhZyBvZiB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtZW50VHlwZSAoT3B0aW9uYWwpIFRoZSB0eXBlIG9mIHRoZSBlbGVtZW50IGl0IHdpbGwgYmUgY3JlYXRlZC4gPGRpdj4gYnkgZGVmYXVsdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXpDcmVhdGUoXG4gIGFwcGVuZFRvOiBIVE1MRWxlbWVudCB8IG51bGwsXG4gIGNsYXNzTmFtZTogc3RyaW5nID0gJycsXG4gIGlkTmFtZTogc3RyaW5nID0gJycsXG4gIGVsZW1lbnRUeXBlOiBzdHJpbmcgPSAnZGl2Jyxcbik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBpZiAoY2xhc3NOYW1lICE9PSAnJykgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmIChpZE5hbWUgIT09ICcnKSBlbGVtZW50LmlkID0gaWROYW1lO1xuICBpZiAoYXBwZW5kVG8gIT0gbnVsbCkgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuIl19