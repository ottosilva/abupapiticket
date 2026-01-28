"use client"

import { UseFormReturn } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface LabelFormData {
  cuil: string
  producto: string
  grado: string
  variedad: string
  plantaEmpaque: string
  pesoAprox: string
  numEmpaque: string
  responsable: string
  renspa: string
  origen: string
  pais: string
}

interface LabelFormProps {
  form: UseFormReturn<LabelFormData>
}

export function LabelForm({ form }: LabelFormProps) {
  const { register, setValue } = form

  const formatCuil = (raw: string) => {
    // Solo dígitos, máximo 11
    const digits = raw.replace(/\D/g, "").slice(0, 11)

    if (digits.length <= 2) return digits
    if (digits.length <= 10) return `${digits.slice(0, 2)}-${digits.slice(2)}`
    return `${digits.slice(0, 2)}-${digits.slice(2, 10)}-${digits.slice(10)}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Datos de la Etiqueta</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cuil">C.U.I.L</Label>
            <Input
              id="cuil"
              placeholder="27-29929014-5"
              inputMode="numeric"
              {...register("cuil", {
                onChange: (event) => {
                  const formatted = formatCuil(event.target.value)
                  setValue("cuil", formatted, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                },
              })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="grado">Grado</Label>
            <Input
              id="grado"
              placeholder="A"
              {...register("grado")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="producto">Producto</Label>
          <Input
            id="producto"
            placeholder="MANGO PARA CONSUMO"
            {...register("producto")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="variedad">Variedad</Label>
          <Input
            id="variedad"
            placeholder="TOMY"
            {...register("variedad")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="plantaEmpaque">Planta de Empaque</Label>
          <Input
            id="plantaEmpaque"
            placeholder="ABU PAPI"
            {...register("plantaEmpaque")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pesoAprox">Peso Aproximado (Kg)</Label>
            <Input
              id="pesoAprox"
              placeholder="18"
              {...register("pesoAprox")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="numEmpaque">Nº de Empaque</Label>
            <Input
              id="numEmpaque"
              placeholder="P-3736-a-F"
              {...register("numEmpaque")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="responsable">Nombre del Responsable</Label>
          <Input
            id="responsable"
            placeholder="ANA MARIELA LOPEZ"
            {...register("responsable")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="renspa">RENSPA</Label>
          <Input
            id="renspa"
            placeholder="08.007.0.02702/00"
            {...register("renspa")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="origen">Origen</Label>
          <Input
            id="origen"
            placeholder="LAGUNA NAICK NECK-FORMOSA"
            {...register("origen")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pais">País</Label>
          <Input
            id="pais"
            placeholder="ARGENTINA"
            {...register("pais")}
          />
        </div>
      </CardContent>
    </Card>
  )
}
