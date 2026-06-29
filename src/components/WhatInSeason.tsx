import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

const monthlyProduce = [
  // [0] January
  {
    name: "Cas", spanish: "Psidium friedrichsthalianum", months: "Year-round · Peak Jan–Feb",
    emoji: "🍈", bgGradient: "linear-gradient(135deg, #4a8c3f, #7fb069)",
    photo: "https://images.unsplash.com/photo-1758614027662-dfec17b78027?w=800&q=85&fit=crop",
    blurb: "Cousin of the guava, intensely sour and green — a Costa Rican staple. Crushed into refrescos naturales at every soda, tart and refreshing and unlike anything sold abroad.",
    use: "Blend with water, sugar, and ice for cas juice. Also makes an excellent jam.",
  },
  // [1] February
  {
    name: "Mango", spanish: "Mangifera indica", months: "February–June · Peak March–April",
    emoji: "🥭", bgGradient: "linear-gradient(135deg, #d4a017, #e8841a)",
    photo: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=85&fit=crop",
    blurb: "From February, mango trees across Guanacaste and the Pacific coast burst with fruit. Vendors pile them roadside — Tommy Atkins, Haden, and the beloved Manila mango all arrive in quick succession.",
    use: "Eat fresh with salt and lime, blend into batidos, or slice green for ensalada de mango verde.",
  },
  // [2] March
  {
    name: "Marañón", spanish: "Anacardium occidentale · Cashew Apple", months: "February–May",
    emoji: "🍑", bgGradient: "linear-gradient(135deg, #e8841a, #c0392b)",
    photo: "https://images.unsplash.com/photo-1741635914985-256817ecba26?w=800&q=85&fit=crop",
    blurb: "The fleshy pseudofruit attached to the cashew nut. Yellow or red, juicy and astringent — mostly ignored internationally but beloved in Costa Rica, especially in Guanacaste where cashew trees line the roadsides.",
    use: "Drink as agua de marañón or eat fresh. The nut must be roasted before eating.",
  },
  // [3] April
  {
    name: "Pejibaye", spanish: "Bactris gasipaes · Peach Palm", months: "March–June (roadside stands)",
    emoji: "🌴", bgGradient: "linear-gradient(135deg, #c0392b, #922b21)", photo: null as string | null,
    blurb: "Orange-red palm fruits appear at roadside stands from La Fortuna to San José. Boiled in salted water, starchy and nutty and deeply Costa Rican — pre-Columbian peoples depended on this tree for sustenance.",
    use: "Served boiled with mayonnaise. Also made into soup, palmito, or flour.",
  },
  // [4] May
  {
    name: "Jocote", spanish: "Spondias purpurea · Rainy Season Variety", months: "May–August",
    emoji: "🍒", bgGradient: "linear-gradient(135deg, #922b21, #6b2d7a)", photo: null as string | null,
    blurb: "Small plum-like fruits with a pit nearly as large as the fruit itself. Tart and eaten green with salt — as it ripens it turns red and sweet. Sold in bags at markets across the country.",
    use: "Fresh with salt and lime. Can be made into jocote en miel — jocote in sweet syrup.",
  },
  // [5] June
  {
    name: "Mamón Chino", spanish: "Nephelium lappaceum · Rambutan", months: "June–September",
    emoji: "🦔", bgGradient: "linear-gradient(135deg, #c0392b, #e8841a)",
    photo: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&q=85&fit=crop",
    blurb: "Originally from Southeast Asia, the spiky red mamón chino has been enthusiastically adopted by Costa Rica. Peel the hairy shell to find translucent, lychee-like flesh — sweet, juicy, and slightly floral.",
    use: "Eaten fresh, peeled directly. The seed inside is not edible.",
  },
  // [6] July
  {
    name: "Guanábana", spanish: "Annona muricata · Soursop", months: "July–October",
    emoji: "🌵", bgGradient: "linear-gradient(135deg, #4a8c3f, #2d6a27)",
    photo: "https://images.unsplash.com/photo-1732881743830-26f6eaf304b3?w=800&q=85&fit=crop",
    blurb: "A large spiky green fruit with white fibrous flesh — both sweet and tart at once. The smell is intoxicating. Guanábana trees grow across low elevations and the fruit is prized for its health properties.",
    use: "Blended into batidos de guanábana with milk and sugar — one of CR's most popular fruit drinks.",
  },
  // [7] August
  {
    name: "Carambola", spanish: "Averrhoa carambola · Starfruit", months: "August–December",
    emoji: "⭐", bgGradient: "linear-gradient(135deg, #d4a017, #a8881a)",
    photo: "https://images.unsplash.com/photo-1605879883262-0cd26b362f54?w=800&q=85&fit=crop",
    blurb: "Sliced crosswise, carambola reveals its perfect star shape. Flavor ranges from tart to mildly sweet. It thrives in Costa Rica's humid lowlands and appears in markets from August through year-end.",
    use: "Eaten fresh or sliced into salads. Makes a beautiful garnish and can be juiced.",
  },
  // [8] September
  {
    name: "Granadilla", spanish: "Passiflora ligularis · Sweet Passion Fruit", months: "September–November",
    emoji: "🟡", bgGradient: "linear-gradient(135deg, #d4a017, #e8c84a)",
    photo: "https://images.unsplash.com/photo-1616077498072-ccba9b178fa5?w=800&q=85&fit=crop",
    blurb: "A round orange-yellow shell you crack open to find seeds surrounded by clear, sweet, gelatinous pulp. Costa Ricans eat it by the cup, scooping the seeds and all with a spoon.",
    use: "Crack open and eat the seed-pulp directly. Also mixed into yogurt or made into juice.",
  },
  // [9] October
  {
    name: "Pitahaya", spanish: "Hylocereus spp. · Dragon Fruit", months: "June–October · Peak Sept–Oct",
    emoji: "🐉", bgGradient: "linear-gradient(135deg, #c0392b, #8e44ad)",
    photo: "https://images.unsplash.com/photo-1527324688151-0e627063f2b3?w=800&q=85&fit=crop",
    blurb: "CR grows both white and red-flesh varieties. The red Guanacaste variety has deep magenta flesh that stains everything it touches. Cultivated on cactus-like climbing plants along farm fences.",
    use: "Halve and scoop the flesh, add to fruit salads, or blend into vivid pink batidos.",
  },
  // [10] November
  {
    name: "Anona", spanish: "Annona squamosa · Sugar Apple", months: "October–December",
    emoji: "💚", bgGradient: "linear-gradient(135deg, #4a8c3f, #3d7a35)",
    photo: "https://images.unsplash.com/photo-1749313252853-edde3a5f3acb?w=800&q=85&fit=crop",
    blurb: "A cousin of the guanábana — a knobby green fruit that breaks apart into segments of creamy, intensely sweet white flesh. Eaten one sweet lobe at a time, out of hand.",
    use: "Pull apart and eat the sweet segments fresh. Remove the seeds before eating.",
  },
  // [11] December
  {
    name: "Zapote", spanish: "Pouteria sapota · Mamey Sapote", months: "October–January",
    emoji: "🟤", bgGradient: "linear-gradient(135deg, #8b4513, #c77729)", photo: null as string | null,
    blurb: "Rough brown skin hides vibrant salmon-orange flesh — rich and creamy with a sweetness reminiscent of sweet potato and pumpkin. One of CR's most beloved seasonal fruits, especially around Christmas and New Year.",
    use: "Eat fresh with a spoon, or blend into a thick, creamy batido de zapote.",
  },
];

function getMonthItem() {
  return monthlyProduce[new Date().getMonth()];
}

export default function WhatInSeason() {
  const item = getMonthItem();

  return (
    <section>
      <SectionHeader label="What's in Season" icon="🌿" tagline="Costa Rican harvest · rotating monthly" />
      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        <div className="relative overflow-hidden" style={{ minHeight: "208px" }}>
          {item.photo ? (
            <>
              <Image src={item.photo} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: item.bgGradient }}>
              <div className="text-7xl">{item.emoji}</div>
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-headline text-white font-bold text-xl leading-tight drop-shadow">{item.name}</div>
            <div className="font-editorial italic text-white/70 text-xs mt-0.5">{item.months}</div>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-3">
          <p className="font-editorial italic text-xs" style={{ color: "var(--ink-light)" }}>{item.spanish}</p>
          <p className="font-body text-sm leading-relaxed" style={{ color: "var(--ink-medium)" }}>{item.blurb}</p>
          <div className="rounded p-3 text-xs font-body leading-relaxed" style={{ background: "var(--bg-parchment)", borderLeft: "2px solid var(--green-leaf)", color: "var(--ink-medium)" }}>
            🍽️ {item.use}
          </div>
        </div>
      </div>
    </section>
  );
}
