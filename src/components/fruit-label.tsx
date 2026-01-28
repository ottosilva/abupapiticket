"use client"

interface FruitLabelProps {
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
  className?: string
}

export function FruitLabel({
  cuil,
  producto,
  grado,
  variedad,
  plantaEmpaque,
  pesoAprox,
  numEmpaque,
  responsable,
  renspa,
  origen,
  pais,
  className = "",
}: FruitLabelProps) {
  return (
    <div
      className={`border border-black bg-white text-black font-sans uppercase ${className}`}
      style={{
        aspectRatio: "3/2",
        // Aumentamos ligeramente el tamaño base para que la etiqueta impresa sea más grande
        fontSize: "clamp(7px, 1.4vw, 14px)"
      }}
    >
      <div className="h-full flex flex-col p-[0.6em]">
        {/* Top Row */}
        <div className="flex justify-between items-start mb-[0.3em]">
          <div className="text-left">
            <div className="text-[0.7em] font-medium">C.U.I.L</div>
            <div className="text-[0.9em] font-bold">{cuil || "—"}</div>
          </div>
          <div className="text-center flex-1 px-[0.5em]">
            <div className="text-[1.3em] font-bold leading-tight">{producto || "PRODUCTO"}</div>
          </div>
          <div className="text-right">
            <div className="text-[0.7em] font-medium">GRADO</div>
            <div className="text-[1.1em] font-bold">{grado || "—"}</div>
          </div>
        </div>

        {/* Middle Row */}
        <div className="flex justify-between items-stretch flex-1 gap-[0.3em]">
          {/* Left: Variedad + Nº Empaque */}
          <div className="flex flex-col justify-between min-w-[30%]">
            <div className="border border-black p-[0.3em]">
              <div className="text-[0.65em] font-medium">VARIEDAD</div>
              <div className="text-[0.9em] font-bold">{variedad || "—"}</div>
            </div>
            <div className="mt-[0.3em]">
              <div className="text-[0.65em] font-medium">Nº EMPAQUE</div>
              <div className="text-[0.85em] font-bold">{numEmpaque || "—"}</div>
            </div>
          </div>

          {/* Center: Planta de Empaque */}
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="text-[0.65em] font-medium">PLANTA DE EMPAQUE</div>
            <div className="text-[0.95em] font-bold">"{plantaEmpaque || "—"}"</div>
          </div>

          {/* Right: Kg Aprox + Responsable */}
          <div className="flex flex-col justify-between min-w-[30%] text-right">
            <div>
              <div className="text-[0.65em] font-medium">Kg. Aprox.</div>
              <div className="text-[1em] font-bold">{pesoAprox || "—"}</div>
            </div>
            <div className="border border-black p-[0.3em] mt-[0.3em]">
              <div className="text-[0.7em] font-bold text-center leading-tight">{responsable || "RESPONSABLE"}</div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end mt-[0.3em] pt-[0.3em] border-t border-black/30">
          <div className="text-left">
            <div className="text-[0.6em] font-medium">RENSPA</div>
            <div className="text-[0.75em] font-bold">{renspa || "—"}</div>
          </div>
          <div className="text-center flex-1 px-[0.3em]">
            <div className="text-[0.6em] font-medium">PRODUCTO DE:</div>
            <div className="text-[0.75em] font-bold">{origen || "—"}</div>
          </div>
          <div className="text-right">
            <div className="text-[0.75em] font-bold">{pais || "PRODUCTO ARGENTINA"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
