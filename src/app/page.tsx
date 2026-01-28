"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LabelForm, type LabelFormData } from "@/components/label-form"
import { FruitLabel } from "@/components/fruit-label"
import { PrintGrid } from "@/components/print-grid"
import { Printer, Tag } from "lucide-react"

const defaultValues: LabelFormData = {
  cuil: "27-29929014-5",
  producto: "MANGO PARA CONSUMO",
  grado: "A",
  variedad: "TOMY",
  plantaEmpaque: "ABU PAPI",
  pesoAprox: "18",
  numEmpaque: "P-3736-a-F",
  responsable: "ANA MARIELA LOPEZ",
  renspa: "08.007.0.02702/00",
  origen: "LAGUNA NAICK NECK-FORMOSA",
  pais: "ARGENTINA",
}

export default function Home() {
  const form = useForm<LabelFormData>({
    defaultValues,
    mode: "onChange",
  })

  const watchedValues = form.watch()

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Main UI - hidden when printing */}
      <main className="min-h-screen bg-muted/30 print:hidden">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Tag className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">
                Generador de Etiquetas Frutícolas
              </h1>
            </div>
            <p className="text-muted-foreground">
              Complete el formulario y vea la previsualización en tiempo real
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              <LabelForm form={form} />

              {/* Print Button */}
              <div className="mt-6">
                <Button
                  onClick={handlePrint}
                  className="w-full"
                  size="lg"
                >
                  <Printer className="mr-2 h-5 w-5" />
                  Preparar para Impresión (21 etiquetas)
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Genera una hoja A4 con 21 etiquetas (3×7)
                </p>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Previsualización</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white p-4 rounded-lg shadow-inner">
                      <FruitLabel
                        cuil={watchedValues.cuil}
                        producto={watchedValues.producto}
                        grado={watchedValues.grado}
                        variedad={watchedValues.variedad}
                        plantaEmpaque={watchedValues.plantaEmpaque}
                        pesoAprox={watchedValues.pesoAprox}
                        numEmpaque={watchedValues.numEmpaque}
                        responsable={watchedValues.responsable}
                        renspa={watchedValues.renspa}
                        origen={watchedValues.origen}
                        pais={watchedValues.pais}
                        className="w-full max-w-md mx-auto"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                      La etiqueta se actualiza en tiempo real
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Print Grid - only visible when printing */}
      <PrintGrid data={watchedValues} />
    </>
  )
}
