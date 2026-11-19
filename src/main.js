import './style.css';
import { vistaInicio } from './views/inicio.js';
import { vistaConducta } from './views/conducta.js';
import { jsPDF } from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

document.body.className = 'p-2';
const contenedor = document.getElementById('app');

const vistas = {
  inicio: vistaInicio,
  conducta: vistaConducta,
};

function mostrarVista(nombre) {
  contenedor.replaceChildren();

  if (vistas[nombre]) {
    // 1. Guarda la vista actual en el navegador
    localStorage.setItem('vistaActual', nombre);
    vistas[nombre](contenedor, mostrarVista);
  }
}

// 2. Lee la última vista guardada, o usa 'inicio' si es la primera vez
const vistaGuardada = localStorage.getItem('vistaActual') || 'inicio';
mostrarVista(vistaGuardada);
