document.addEventListener("DOMContentLoaded", function() {
    const consultButton = document.getElementById("consultButton");
    const CueInputInput = document.getElementById("Cue");
    const dataTable = document.getElementById("dataTable");
    const limpiarButton = document.getElementById("limpiarButton");
    const exportarButton = document.getElementById("exportButton");


    consultButton.addEventListener("click", function() {
        const CueInput = CueInputInput.value;

        // Aquí puedes agregar la lógica para hacer una solicitud a una API o base de datos para obtener los datos correspondientes al DNI ingresado.
        // Por simplicidad, aquí se muestra un ejemplo estático de datos.

        const ejemploDatos = {
            Cue: "460018700",
            escuela: "E.P.E.T. N°1",
            localidad: "LA RIOJA",
            linea: "PMI EQUIPAMIENTO INSTITUCIONAL",
            resolucion: "RM -1994/2022",
            acreditado: "$ 2.340.000,00", 
            ejecutado:"$ 1.127.217,30"
        };

        const newRow = dataTable.insertRow();
        newRow.insertCell().textContent = ejemploDatos.Cue;
        newRow.insertCell().textContent = ejemploDatos.escuela;
        newRow.insertCell().textContent = ejemploDatos.localidad;
        newRow.insertCell().textContent = ejemploDatos.linea;
        newRow.insertCell().textContent = ejemploDatos.resolucion;
        newRow.insertCell().textContent = ejemploDatos.acreditado;
        newRow.insertCell().textContent = ejemploDatos.ejecutado;
        
    });


    limpiarButton.addEventListener("click", function() {
        while (dataTable.rows.length > 1) {
            dataTable.deleteRow(1);
        }
    });

    
    
    exportarButton.addEventListener("click", function() {
        const doc = new jsPDF();
        const dataTable = document.getElementById("dataTable");
        doc.text("Tabla de Datos", 10, 10);
        doc.autoTable({ html: "#dataTable" });
        doc.save("tabla_datos.pdf");
    });
  
});



  
  
  
  
  
  
  
  
