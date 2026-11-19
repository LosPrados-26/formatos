export function vistaInicio(contenedor, navegar) {
  const titulo = document.createElement('h1');
  titulo.className = 'text-3xl font-bold';
  titulo.textContent = 'Bienvenido al Inicio';

  const list = document.createElement('ul');
  const item1 = document.createElement('li');
  item1.id = 'item1';
  item1.innerHTML = `<span>Item 1</span>`;
  
  item1.addEventListener('click', () => navegar('conducta'));
  
  list.appendChild(item1);
  
  contenedor.appendChild(titulo);
  contenedor.appendChild(list);
}
