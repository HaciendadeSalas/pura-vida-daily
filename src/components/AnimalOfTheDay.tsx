import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

const animals = [
  {
    name: "Resplendent Quetzal",
    scientific: "Pharomachrus mocinno",
    emoji: "🦜",
    habitat: "Cloud forests · Monteverde & Los Quetzales",
    status: "Near Threatened",
    statusColor: "var(--gold-sun)",
    photo: "https://plus.unsplash.com/premium_photo-1664298292469-00691bea9aa6?w=800&q=85&fit=crop",
    description: "Perhaps the most spectacular bird in the Americas, the Resplendent Quetzal was sacred to the ancient Maya and Aztec, who associated it with the feathered serpent deity Quetzalcoatl. The male's iridescent emerald tail feathers can exceed one meter in length.",
    facts: [
      { label: "Wingspan", value: "56–61 cm" },
      { label: "Diet", value: "Wild avocados, fruit, insects" },
      { label: "Nest", value: "Hollow tree cavities" },
      { label: "Best Season", value: "March–June" },
    ],
    funFact: "The male quetzal's tail feathers are longer than its body — and they moult entirely each year, regrowing in time for breeding season.",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #4a8c3f 100%)",
  },
  {
    name: "Three-toed Sloth",
    scientific: "Bradypus variegatus",
    emoji: "🦥",
    habitat: "Lowland rainforests · Caribbean & Pacific coasts",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1644334599979-6c7b4d55920e?w=800&q=85&fit=crop",
    description: "The three-toed sloth is one of the slowest mammals on Earth — and one of the most beloved symbols of Costa Rica. Moving at barely 0.24 km/h, their slowness is actually an extraordinary energy-saving adaptation to a low-nutrient leaf diet.",
    facts: [
      { label: "Top Speed", value: "0.24 km/h" },
      { label: "Sleep", value: "15–20 hours/day" },
      { label: "Diet", value: "Cecropia leaves" },
      { label: "Lifespan", value: "20–30 years" },
    ],
    funFact: "Sloths descend from their tree just once a week to defecate — and lose up to a third of their body weight in that single bathroom break.",
    bgGradient: "linear-gradient(135deg, #7fb069 0%, #4a8c3f 100%)",
  },
  {
    name: "Keel-billed Toucan",
    scientific: "Ramphastos sulfuratus",
    emoji: "🐦",
    habitat: "Tropical lowlands · Corcovado & Tortuguero",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1578489527806-3e82bcd8fb5b?w=800&q=85&fit=crop",
    description: "With its massive, multicolored bill — green, orange, red, and yellow — the Keel-billed Toucan is one of the most recognizable birds in the tropics. Despite appearances, the bill is hollow and lightweight, made of keratin and bone.",
    facts: [
      { label: "Bill Length", value: "Up to 20 cm" },
      { label: "Diet", value: "Fruit, insects, small lizards" },
      { label: "Wingspan", value: "50–60 cm" },
      { label: "Call", value: "Frog-like croaking" },
    ],
    funFact: "Toucans sleep with their beak tucked under their wing and their tail folded over their back — a remarkably compact sleeping position for such a large bill.",
    bgGradient: "linear-gradient(135deg, #1a3a15 0%, #4a8c3f 100%)",
  },
  {
    name: "Red-eyed Tree Frog",
    scientific: "Agalychnis callidryas",
    emoji: "🐸",
    habitat: "Humid lowland rainforests · Caribbean coast",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1550853123-b81beb0b1449?w=800&q=85&fit=crop",
    description: "The Red-eyed Tree Frog is an icon of tropical biodiversity and perhaps the most photographed amphibian in the world. Their brilliant scarlet eyes are a defense mechanism — the sudden flash of color startles predators long enough to escape.",
    facts: [
      { label: "Body Length", value: "4–7 cm" },
      { label: "Diet", value: "Insects, moths, flies" },
      { label: "Habitat", value: "Canopy near water" },
      { label: "Active", value: "Nocturnal" },
    ],
    funFact: "Red-eyed tree frog eggs can hatch early if they detect vibrations from a predator — the embryos essentially choose to be born rather than be eaten.",
    bgGradient: "linear-gradient(135deg, #2e86ab 0%, #2d5a27 100%)",
  },
  {
    name: "Scarlet Macaw",
    scientific: "Ara macao",
    emoji: "🦜",
    habitat: "Pacific lowlands · Carara & Osa Peninsula",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1524595974748-074187548e50?w=800&q=85&fit=crop",
    description: "The Scarlet Macaw is one of the most stunning birds on the planet — and a true Costa Rican conservation success story. Once nearly extinct in the country due to habitat loss and trapping, their populations have recovered dramatically in Carara and the Osa Peninsula.",
    facts: [
      { label: "Wingspan", value: "80–100 cm" },
      { label: "Lifespan", value: "Up to 75 years" },
      { label: "Diet", value: "Seeds, fruit, nuts" },
      { label: "Pair Bond", value: "Lifelong mate" },
    ],
    funFact: "Scarlet Macaws mate for life and are rarely seen alone — couples fly in tight formation and preen each other affectionately in a behavior scientists call allopreening.",
    bgGradient: "linear-gradient(135deg, #8b1a1a 0%, #d4a017 100%)",
  },
  {
    name: "Jaguar",
    scientific: "Panthera onca",
    emoji: "🐆",
    habitat: "Corcovado National Park · Osa Peninsula",
    status: "Near Threatened",
    statusColor: "var(--gold-sun)",
    photo: "https://images.unsplash.com/photo-1759427596880-e0d310dc865e?w=800&q=85&fit=crop",
    description: "The jaguar is the Americas' largest cat and one of the most powerful predators on Earth. Costa Rica's Osa Peninsula contains one of the highest jaguar densities in Central America — a testament to Corcovado National Park's exceptional biodiversity.",
    facts: [
      { label: "Weight", value: "56–96 kg" },
      { label: "Territory", value: "Up to 80 km²" },
      { label: "Diet", value: "Peccaries, deer, tapirs, fish" },
      { label: "Speed", value: "80 km/h in short bursts" },
    ],
    funFact: "Unlike most big cats, jaguars love water and are powerful swimmers. They often hunt caimans and fish by swatting them from the riverbank with a massive paw.",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #d4a017 100%)",
  },
  {
    name: "Green Sea Turtle",
    scientific: "Chelonia mydas",
    emoji: "🐢",
    habitat: "Tortuguero National Park · Caribbean coast",
    status: "Endangered",
    statusColor: "var(--red-volcano)",
    photo: "https://images.unsplash.com/photo-1499070022014-ccac3a6416f4?w=800&q=85&fit=crop",
    description: "Tortuguero — 'the place of turtles' — hosts one of the largest green sea turtle nesting grounds in the Western Hemisphere. Up to 30,000 females return to lay their eggs here each year, navigating thousands of miles by Earth's magnetic field.",
    facts: [
      { label: "Weight", value: "Up to 190 kg" },
      { label: "Lifespan", value: "70–80 years" },
      { label: "Nesting Season", value: "July–October" },
      { label: "Nest Depth", value: "~50 cm" },
    ],
    funFact: "Female green sea turtles return to the exact beach where they were born to lay their own eggs — navigating thousands of miles of open ocean to find it.",
    bgGradient: "linear-gradient(135deg, #2e86ab 0%, #1a5276 100%)",
  },
  {
    name: "White-faced Capuchin",
    scientific: "Cebus capucinus",
    emoji: "🐒",
    habitat: "Manuel Antonio · Corcovado · Caribbean lowlands",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1643484350068-4c50256685fa?w=800&q=85&fit=crop",
    description: "The White-faced Capuchin is one of the most intelligent New World monkeys — capable of using tools, solving puzzles, and forming complex social alliances. They are charismatic, curious, and, unfortunately, have learned to steal food from tourists.",
    facts: [
      { label: "Weight", value: "1.4–3.9 kg" },
      { label: "Group Size", value: "6–40 individuals" },
      { label: "Diet", value: "Fruit, insects, small vertebrates" },
      { label: "Lifespan", value: "Up to 50 years" },
    ],
    funFact: "Capuchins rub certain plants onto their fur as insect repellent — one of the only non-human primates documented to use medicinal self-application.",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #6b3d2e 100%)",
  },
  {
    name: "Green Iguana",
    scientific: "Iguana iguana",
    emoji: "🦎",
    habitat: "Riverbanks & coastal forests nationwide",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1444947173422-9737546c41a5?w=800&q=85&fit=crop",
    description: "The Green Iguana is one of the most visible reptiles in Costa Rica — you'll see them sunning on branches over rivers and hotel gardens. Despite their dinosaur appearance, they are entirely herbivorous and remarkably docile.",
    facts: [
      { label: "Length", value: "Up to 2 meters" },
      { label: "Diet", value: "Leaves, flowers, fruit" },
      { label: "Defense", value: "Tail whip + spines" },
      { label: "Swim Speed", value: "Strong open-water swimmer" },
    ],
    funFact: "Green iguanas can drop from a branch 15 meters up, land safely, and immediately run away — they evolved this falling ability to escape predators in the canopy.",
    bgGradient: "linear-gradient(135deg, #4a8c3f 0%, #2d5a27 100%)",
  },
  {
    name: "Baird's Tapir",
    scientific: "Tapirus bairdii",
    emoji: "🦏",
    habitat: "Corcovado & La Amistad · highland forests",
    status: "Endangered",
    statusColor: "var(--red-volcano)",
    photo: "https://images.unsplash.com/photo-1712938548647-8f92b804eb82?w=800&q=85&fit=crop",
    description: "The Baird's Tapir is Central America's largest land mammal and a true living fossil — its lineage stretches back 55 million years. Despite resembling a pig, its closest relatives are horses and rhinoceroses.",
    facts: [
      { label: "Weight", value: "150–300 kg" },
      { label: "Trunk", value: "Prehensile nose for grabbing" },
      { label: "Lifespan", value: "25–30 years" },
      { label: "Population", value: "Fewer than 5,500 globally" },
    ],
    funFact: "Tapirs are excellent swimmers and will submerge themselves entirely to escape predators or cool down — they can even walk along riverbeds underwater.",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #2d5a27 100%)",
  },
  {
    name: "White-nosed Coati",
    scientific: "Nasua narica",
    emoji: "🦝",
    habitat: "Forests and forest edges nationwide",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: null,
    description: "The Coati — called 'pizote' in Costa Rica — is the raccoon's bold tropical cousin. Female coatis live in large bands of up to 30 individuals, while males are solitary. Their long, flexible noses expertly probe bark and soil for insects.",
    facts: [
      { label: "Band Size", value: "Up to 30 females" },
      { label: "Diet", value: "Insects, fruit, small lizards" },
      { label: "Active", value: "Diurnal" },
      { label: "Nose", value: "Highly mobile, cartilaginous" },
    ],
    funFact: "Coati bands post sentinels in trees while the group forages on the ground — if a predator is spotted, the sentinel gives an alarm call and all members bolt for the trees.",
    bgGradient: "linear-gradient(135deg, #8b5e3c 0%, #4a3728 100%)",
  },
  {
    name: "Blue Morpho Butterfly",
    scientific: "Morpho peleides",
    emoji: "🦋",
    habitat: "Humid forests at all elevations",
    status: "Not Evaluated",
    statusColor: "#5b9bd5",
    photo: "https://images.unsplash.com/photo-1558604365-a94006654196?w=800&q=85&fit=crop",
    description: "The Blue Morpho is one of the world's most spectacular butterflies — its wings produce a brilliant iridescent blue not through pigment, but through microscopic scales that scatter light. In the forest, they flash like blue flames between the trees.",
    facts: [
      { label: "Wingspan", value: "12–20 cm" },
      { label: "Color", value: "Structural iridescence, not pigment" },
      { label: "Lifespan", value: "115 days" },
      { label: "Diet", value: "Fermenting fruit juices" },
    ],
    funFact: "The Blue Morpho's brilliant blue is invisible when the wings are closed — the underside is brown with false 'eyes' for camouflage. They flash blue only when flying.",
    bgGradient: "linear-gradient(135deg, #1a5276 0%, #2e86ab 100%)",
  },
  {
    name: "American Crocodile",
    scientific: "Crocodylus acutus",
    emoji: "🐊",
    habitat: "Tarcoles River · Tempisque · Pacific estuaries",
    status: "Vulnerable",
    statusColor: "var(--gold-sun)",
    photo: "https://images.unsplash.com/photo-1605649461784-7d5e4df56c97?w=800&q=85&fit=crop",
    description: "The Tárcoles River near Carara is famous for its spectacular congregation of American crocodiles — up to 200 individuals basking on the riverbanks, viewable from the highway bridge. Costa Rica's crocodile population has recovered strongly thanks to legal protections.",
    facts: [
      { label: "Length", value: "Up to 6 meters" },
      { label: "Weight", value: "Up to 900 kg" },
      { label: "Speed", value: "17 km/h in water" },
      { label: "Lifespan", value: "Up to 70 years" },
    ],
    funFact: "Despite their fearsome reputation, American crocodiles are actually less aggressive than their Nile or Saltwater cousins. Male crocodiles are known to carry their hatchlings gently in their jaws to the water.",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #4a3728 100%)",
  },
  {
    name: "Mantled Howler Monkey",
    scientific: "Alouatta palliata",
    emoji: "🐒",
    habitat: "Forest canopy nationwide",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://plus.unsplash.com/premium_photo-1664298063096-0d59a430dc01?w=800&q=85&fit=crop",
    description: "The Mantled Howler produces one of the loudest sounds of any land animal on Earth — a deep, resonant roar audible up to 5 kilometers away. Their calls serve to establish territory without physical conflict, often creating a spectacular morning chorus.",
    facts: [
      { label: "Call Volume", value: "Audible 5 km away" },
      { label: "Weight", value: "4–9 kg" },
      { label: "Diet", value: "Leaves, fruit, flowers" },
      { label: "Activity", value: "75% resting — low energy diet" },
    ],
    funFact: "Howlers spend most of their day resting because leaves are so nutritionally poor. Their enlarged hyoid bone acts as a resonance chamber — giving them a voice box unlike any other primate.",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #2d5a27 100%)",
  },
  {
    name: "Rufous-tailed Hummingbird",
    scientific: "Amazilia tzacatl",
    emoji: "🐦",
    habitat: "Gardens, forest edges, and highlands nationwide",
    status: "Least Concern",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1574992880705-5da1abb8b785?w=800&q=85&fit=crop",
    description: "Costa Rica is one of the world's premier hummingbird destinations, hosting over 50 species. The Rufous-tailed is the most common — a bold, glittering gem with a distinctive copper-red tail that can be seen hovering at feeders and flowers across the country.",
    facts: [
      { label: "Wing Beats", value: "50–80 per second" },
      { label: "Heart Rate", value: "1,260 beats/min in flight" },
      { label: "Weight", value: "5 grams" },
      { label: "Diet", value: "Nectar + small insects" },
    ],
    funFact: "A hummingbird's brain is proportionally the largest of any bird — about 4.2% of body weight. They can remember every flower they have visited and how long it takes each to refill with nectar.",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #d4a017 100%)",
  },
];

function getDayIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / 86400000) % animals.length;
}

export default function AnimalOfTheDay() {
  const animal = animals[getDayIndex()];

  return (
    <section className="mb-8">
      <SectionHeader label="Animal of the Day" icon="🐾" tagline="Costa Rica's extraordinary biodiversity, one creature at a time" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        <div className="grid md:grid-cols-2">
          {/* Photo or gradient fallback */}
          <div className="relative min-h-64 overflow-hidden">
            {animal.photo ? (
              <>
                <Image
                  src={animal.photo}
                  alt={animal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: animal.bgGradient }}>
                <div className="text-7xl mb-2">{animal.emoji}</div>
              </div>
            )}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="font-headline text-white font-bold text-xl leading-tight drop-shadow">{animal.name}</div>
              <div className="font-editorial italic text-white/75 text-sm">{animal.scientific}</div>
              <div
                className="mt-2 inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded font-body uppercase tracking-widest"
                style={{ background: "rgba(0,0,0,0.45)", color: animal.statusColor, border: `1px solid ${animal.statusColor}` }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: animal.statusColor }} />
                {animal.status}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-5 flex flex-col gap-3">
            <p className="font-editorial italic text-sm" style={{ color: "var(--ink-light)" }}>{animal.habitat}</p>
            <p className="font-body text-sm leading-relaxed" style={{ color: "var(--ink-medium)" }}>{animal.description}</p>

            <div className="grid grid-cols-2 gap-2">
              {animal.facts.map((f) => (
                <div key={f.label} className="text-xs" style={{ borderLeft: "2px solid var(--green-leaf)", paddingLeft: "8px" }}>
                  <div className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{f.label}</div>
                  <div className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{f.value}</div>
                </div>
              ))}
            </div>

            <div
              className="rounded p-3 text-sm font-editorial italic leading-relaxed mt-auto"
              style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--green-jungle)" }}
            >
              🌿 <strong>Did you know?</strong> {animal.funFact}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
