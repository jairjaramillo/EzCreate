/**
 * Creates an HTML element and appends it to another HTML element.
 * @param {HTMLElement | null} appendTo HTML element where the create function witll append to. Use NULL to avoid this.
 * @param {String} className (Optional) The class or classes the element will have.
 * @param {String} idName (Optional) The ID tag of the element.
 * @param {String} elementType (Optional) The type of the element it will be created. <div> by default.
 */
export default function create(appendTo: HTMLElement | null, className: string = '', idName: string = '', elementType: string = 'div'): HTMLElement {
  const element = document.createElement(elementType);
  if (className !== '') element.className = className;
  if (idName !== '') element.id = idName;
  if (appendTo != null) appendTo.appendChild(element);
  return element;
}
