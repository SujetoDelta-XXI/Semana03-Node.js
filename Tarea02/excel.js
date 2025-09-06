const ExcelJS = require('exceljs');

async function generarExcel() {
  // Crear un nuevo libro de trabajo
  const workbook = new ExcelJS.Workbook();

  // Agregar una hoja llamada "Ventas"
  const worksheet = workbook.addWorksheet('Ventas');

  // Definir cabecera (primera fila)
  worksheet.columns = [
    { header: 'Producto', key: 'producto', width: 20 },
    { header: 'Cantidad', key: 'cantidad', width: 10 },
    { header: 'Precio', key: 'precio', width: 10 }
  ];

  // Agregar 20 filas de ejemplo
  const productos = [
    ['Laptop', 5, 3200],
    ['Mouse', 15, 50],
    ['Teclado', 10, 120],
    ['Monitor', 8, 950],
    ['Impresora', 3, 600],
    ['USB 32GB', 20, 40],
    ['Disco Duro 1TB', 7, 280],
    ['Auriculares', 12, 90],
    ['Tablet', 6, 800],
    ['Silla Gamer', 4, 750],
    ['Parlante Bluetooth', 11, 150],
    ['Webcam', 9, 200],
    ['Microfono', 5, 300],
    ['Router WiFi', 8, 180],
    ['Cargador Laptop', 10, 130],
    ['SSD 512GB', 6, 450],
    ['Cable HDMI', 14, 35],
    ['Proyector', 2, 1200],
    ['Smartphone', 7, 2100],
    ['Fuente de Poder', 5, 400],
  ];

  productos.forEach(p => worksheet.addRow({ producto: p[0], cantidad: p[1], precio: p[2] }));

  // Guardar el archivo
  await workbook.xlsx.writeFile('ventas.xlsx');
  console.log('Archivo "ventas.xlsx" creado correctamente ✅');
}

generarExcel();
