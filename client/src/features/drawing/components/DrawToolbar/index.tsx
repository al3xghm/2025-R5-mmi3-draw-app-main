import { useDrawingStore } from "../../store/useDrawingStore";

const COLORS = [
  { name: 'Noir', hex: '#000000' },
  { name: 'Rouge', hex: '#EF4444' },
  { name: 'Bleu', hex: '#3B82F6' },
  { name: 'Vert', hex: '#10B981' },
  { name: 'Orange', hex: '#F97316' },
  { name: 'Violet', hex: '#A855F7' },
  { name: 'Rose', hex: '#EC4899' },
  { name: 'Jaune', hex: '#EAB308' },
];

export function DrawToolbar() {
  const { strokeColor, setStrokeColor, strokeWidth, setStrokeWidth } = useDrawingStore();

  return (
    <div className="flex gap-8 items-start">
      {/* Sélecteur de couleur */}
      <div className="flex flex-col gap-3">
        <span className="font-bold text-sm">Couleur du crayon</span>
        <div className="flex gap-2 flex-wrap">
          {COLORS.map((color) => (
            <button
              key={color.hex}
              onClick={() => setStrokeColor(color.hex)}
              className={`size-8 rounded-lg border-2 transition-all ${
                strokeColor === color.hex
                  ? 'border-gray-800 shadow-lg scale-110'
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="size-6 rounded-md border border-gray-300"
            style={{ backgroundColor: strokeColor }}
          />
          <span className="text-xs text-gray-600">{strokeColor}</span>
        </div>
      </div>

      {/* Sélecteur d'épaisseur avec slider */}
      <div className="flex flex-col gap-3">
        <span className="font-bold text-sm">Épaisseur du tracé</span>
        <div className="flex flex-col gap-3">
          <input
            type="range"
            min="1"
            max="30"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
            className="range range-sm"
            step="1"
          />
          <div className="flex items-center gap-3">
            <div 
              className="rounded-full bg-gray-800"
              style={{ width: `${strokeWidth}px`, height: `${strokeWidth}px` }}
            />
            <span className="text-xs text-gray-600">Épaisseur: {strokeWidth}px</span>
          </div>
        </div>
      </div>
    </div>
  )
}