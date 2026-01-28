"use client"

import { FruitLabel } from "./fruit-label"
import { LabelFormData } from "./label-form"

interface PrintGridProps {
  data: LabelFormData
}

export function PrintGrid({ data }: PrintGridProps) {
  // Generate 21 labels (3 columns x 7 rows)
  const labels = Array.from({ length: 21 }, (_, i) => i)

  return (
    <div className="print-grid hidden print:block">
      <div
        className="grid grid-cols-3 gap-0"
        style={{
          width: "210mm",
          height: "297mm",
          // Reducimos padding general para que las etiquetas ocupen más espacio
          padding: "2mm",
        }}
      >
        {labels.map((index) => (
          <div
            key={index}
            style={{
              width: "calc((210mm - 4mm) / 3)",
              height: "calc((297mm - 4mm) / 7)",
              // Menos padding interno por tarjeta para que el contenido crezca
              padding: "0.6mm",
            }}
          >
            <FruitLabel
              cuil={data.cuil}
              producto={data.producto}
              grado={data.grado}
              variedad={data.variedad}
              plantaEmpaque={data.plantaEmpaque}
              pesoAprox={data.pesoAprox}
              numEmpaque={data.numEmpaque}
              responsable={data.responsable}
              renspa={data.renspa}
              origen={data.origen}
              pais={data.pais}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
