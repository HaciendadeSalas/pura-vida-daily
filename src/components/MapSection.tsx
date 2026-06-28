import { SectionHeader } from "./VolcanoWatch";

const regions = [
  { id: "guanacaste", name: "Guanacaste", color: "#d4a017", desc: "Pacific Coast · Dry Tropics · Beach Towns", highlight: true },
  { id: "central", name: "Central Valley", color: "#4a8c3f", desc: "San José · Coffee Farms · Universities" },
  { id: "caribbean", name: "Caribbean Coast", color: "#2e86ab", desc: "Tortuguero · Cahuita · Jungle Canals" },
  { id: "southern", name: "Southern Zone", color: "#6b3d2e", desc: "Chirripó · Osa Peninsula · Corcovado" },
  { id: "northern", name: "Northern Lowlands", color: "#7fb069", desc: "Arenal · La Fortuna · Sarapiquí" },
];

// Today's featured region (placeholder — will rotate daily)
const today = regions[0];

export default function MapSection() {
  return (
    <section className="mb-8">
      <SectionHeader label="Region of the Day" icon="🗺️" tagline="Exploring Costa Rica province by province" />

      <div className="grid md:grid-cols-3 gap-0 rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* SVG Map */}
        <div
          className="md:col-span-2 min-h-64 flex items-center justify-center p-6"
          style={{ background: "linear-gradient(135deg, #e8f4f0 0%, #d4e8d4 100%)" }}
        >
          <CRMapSVG highlighted={today.id} />
        </div>

        {/* Region info panel */}
        <div className="p-5 flex flex-col gap-4" style={{ background: "var(--bg-cream)", borderLeft: "1px solid var(--border-aged)" }}>
          <div>
            <div className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: "var(--ink-light)" }}>
              Today's Region
            </div>
            <h3 className="font-headline text-2xl font-bold" style={{ color: "var(--ink-dark)" }}>{today.name}</h3>
            <p className="font-editorial italic text-sm" style={{ color: "var(--ink-light)" }}>{today.desc}</p>
          </div>

          <div className="space-y-1.5">
            {[
              { label: "Capital", value: "Liberia" },
              { label: "Climate", value: "Tropical Dry" },
              { label: "Best Season", value: "Nov – Apr (Dry)" },
              { label: "Known For", value: "Beaches, Volcanos, Cowboys" },
              { label: "Airport", value: "Daniel Oduber (LIR)" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "4px" }}>
                <span className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{item.label}</span>
                <span className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{item.value}</span>
              </div>
            ))}
          </div>

          <div
            className="rounded p-3 text-sm font-editorial italic mt-auto"
            style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--gold-sun)" }}
          >
            🌞 High season runs December through April — expect warm, dry days with brilliant sunsets over the Pacific.
          </div>
        </div>
      </div>
    </section>
  );
}

function CRMapSVG({ highlighted }: { highlighted: string }) {
  // Simplified Costa Rica outline SVG with approximate region shapes
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md" style={{ filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.15))" }}>
      {/* Ocean background */}
      <rect width="400" height="300" fill="#a8d8ea" rx="8" />

      {/* Pacific label */}
      <text x="40" y="200" fill="#1a5276" fontSize="10" fontStyle="italic" opacity="0.7">Pacific Ocean</text>
      {/* Caribbean label */}
      <text x="310" y="120" fill="#1a5276" fontSize="10" fontStyle="italic" opacity="0.7" textAnchor="middle">Caribbean</text>

      {/* Costa Rica landmass — simplified polygon */}
      {/* Guanacaste (NW peninsula) */}
      <path
        d="M 90 60 L 130 50 L 160 65 L 155 100 L 130 115 L 100 110 L 85 90 Z"
        fill={highlighted === "guanacaste" ? "#d4a017" : "#7fb069"}
        stroke="white" strokeWidth="1.5"
        opacity={highlighted === "guanacaste" ? 1 : 0.7}
      />
      <text x="122" y="88" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">Guanacaste</text>

      {/* Northern Lowlands */}
      <path
        d="M 155 65 L 210 55 L 230 75 L 220 105 L 190 115 L 155 100 Z"
        fill={highlighted === "northern" ? "#d4a017" : "#4a8c3f"}
        stroke="white" strokeWidth="1.5"
        opacity={highlighted === "northern" ? 1 : 0.75}
      />
      <text x="192" y="88" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">Northern</text>

      {/* Central Valley */}
      <path
        d="M 155 100 L 220 105 L 235 130 L 220 160 L 185 165 L 155 150 L 140 125 Z"
        fill={highlighted === "central" ? "#d4a017" : "#2d5a27"}
        stroke="white" strokeWidth="1.5"
        opacity={highlighted === "central" ? 1 : 0.8}
      />
      <text x="187" y="138" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">Central Valley</text>

      {/* Caribbean Coast */}
      <path
        d="M 230 75 L 285 70 L 295 100 L 280 145 L 255 160 L 235 130 L 220 105 Z"
        fill={highlighted === "caribbean" ? "#d4a017" : "#2e86ab"}
        stroke="white" strokeWidth="1.5"
        opacity={highlighted === "caribbean" ? 1 : 0.7}
      />
      <text x="258" y="115" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">Caribbean</text>

      {/* Southern Zone */}
      <path
        d="M 155 150 L 220 160 L 255 160 L 245 200 L 210 220 L 170 215 L 148 185 Z"
        fill={highlighted === "southern" ? "#d4a017" : "#6b3d2e"}
        stroke="white" strokeWidth="1.5"
        opacity={highlighted === "southern" ? 1 : 0.75}
      />
      <text x="200" y="190" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">Southern Zone</text>

      {/* Highlight ring for active region */}
      {highlighted === "guanacaste" && (
        <path d="M 90 60 L 130 50 L 160 65 L 155 100 L 130 115 L 100 110 L 85 90 Z"
          fill="none" stroke="#d4a017" strokeWidth="3" strokeDasharray="4 2" />
      )}

      {/* Compass rose */}
      <g transform="translate(350, 40)">
        <circle r="14" fill="white" opacity="0.8" />
        <text textAnchor="middle" y="-4" fontSize="7" fill="#2c1810" fontWeight="bold">N</text>
        <line x1="0" y1="-2" x2="0" y2="-10" stroke="#2c1810" strokeWidth="1" />
      </g>
    </svg>
  );
}
