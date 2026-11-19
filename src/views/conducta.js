export function vistaConducta(contenedor, navegar) {
  const volver = document.createElement('span');
  volver.textContent = "\u2190 Volver";
  volver.className = 'p-0.5 text-orange-400 cursor-pointer border border-black bg-slate-300';
  volver.addEventListener('click', () => navegar('inicio'));

  const titulo = document.createElement('h1');
  titulo.textContent = 'Generar constancia de conducta';
  titulo.className = 'text-3xl text-blue-400 font-bold';

  contenedor.appendChild(volver);
  contenedor.appendChild(titulo);
}
