"use client";

import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";
import { useTranslation } from "@/lib/i18n/translations";

const animals = [
  {
    name: "Resplendent Quetzal",
    nameEs: "Quetzal Resplandeciente",
    scientific: "Pharomachrus mocinno",
    emoji: "🦜",
    habitat: "Cloud forests · Monteverde & Los Quetzales",
    habitatEs: "Bosques nubosos · Monteverde y Los Quetzales",
    status: "Near Threatened",
    statusEs: "Casi Amenazado",
    statusColor: "var(--gold-sun)",
    photo: "https://plus.unsplash.com/premium_photo-1664298292469-00691bea9aa6?w=800&q=85&fit=crop",
    description: "Perhaps the most spectacular bird in the Americas, the Resplendent Quetzal was sacred to the ancient Maya and Aztec, who associated it with the feathered serpent deity Quetzalcoatl. The male's iridescent emerald tail feathers can exceed one meter in length.",
    descriptionEs: "Quizás el ave más espectacular de las Américas, el Quetzal Resplandeciente era sagrado para los antiguos mayas y aztecas, quienes lo asociaban con la deidad serpiente emplumada Quetzalcóatl. Las iridiscentes plumas verde esmeralda de la cola del macho pueden superar el metro de longitud.",
    facts: [
      { label: "Wingspan", labelEs: "Envergadura", value: "56–61 cm", valueEs: "56–61 cm" },
      { label: "Diet", labelEs: "Dieta", value: "Wild avocados, fruit, insects", valueEs: "Aguacatillos silvestres, fruta, insectos" },
      { label: "Nest", labelEs: "Nido", value: "Hollow tree cavities", valueEs: "Cavidades huecas en árboles" },
      { label: "Best Season", labelEs: "Mejor Temporada", value: "March–June", valueEs: "Marzo–Junio" },
    ],
    funFact: "The male quetzal's tail feathers are longer than its body — and they moult entirely each year, regrowing in time for breeding season.",
    funFactEs: "Las plumas de la cola del quetzal macho son más largas que su cuerpo — y mudan por completo cada año, regenerándose a tiempo para la temporada de apareamiento.",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #4a8c3f 100%)",
  },
  {
    name: "Three-toed Sloth",
    nameEs: "Perezoso de Tres Dedos",
    scientific: "Bradypus variegatus",
    emoji: "🦥",
    habitat: "Lowland rainforests · Caribbean & Pacific coasts",
    habitatEs: "Selvas tropicales bajas · costas Caribe y Pacífico",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1644334599979-6c7b4d55920e?w=800&q=85&fit=crop",
    description: "The three-toed sloth is one of the slowest mammals on Earth — and one of the most beloved symbols of Costa Rica. Moving at barely 0.24 km/h, their slowness is actually an extraordinary energy-saving adaptation to a low-nutrient leaf diet.",
    descriptionEs: "El perezoso de tres dedos es uno de los mamíferos más lentos de la Tierra — y uno de los símbolos más queridos de Costa Rica. Moviéndose a apenas 0.24 km/h, su lentitud es en realidad una extraordinaria adaptación de ahorro de energía a una dieta de hojas bajas en nutrientes.",
    facts: [
      { label: "Top Speed", labelEs: "Velocidad Máxima", value: "0.24 km/h", valueEs: "0.24 km/h" },
      { label: "Sleep", labelEs: "Sueño", value: "15–20 hours/day", valueEs: "15–20 horas/día" },
      { label: "Diet", labelEs: "Dieta", value: "Cecropia leaves", valueEs: "Hojas de cecropia" },
      { label: "Lifespan", labelEs: "Esperanza de Vida", value: "20–30 years", valueEs: "20–30 años" },
    ],
    funFact: "Sloths descend from their tree just once a week to defecate — and lose up to a third of their body weight in that single bathroom break.",
    funFactEs: "Los perezosos bajan de su árbol solo una vez por semana para defecar — y pierden hasta un tercio de su peso corporal en esa única salida al baño.",
    bgGradient: "linear-gradient(135deg, #7fb069 0%, #4a8c3f 100%)",
  },
  {
    name: "Keel-billed Toucan",
    nameEs: "Tucán Pico Iris",
    scientific: "Ramphastos sulfuratus",
    emoji: "🐦",
    habitat: "Tropical lowlands · Corcovado & Tortuguero",
    habitatEs: "Tierras bajas tropicales · Corcovado y Tortuguero",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1578489527806-3e82bcd8fb5b?w=800&q=85&fit=crop",
    description: "With its massive, multicolored bill — green, orange, red, and yellow — the Keel-billed Toucan is one of the most recognizable birds in the tropics. Despite appearances, the bill is hollow and lightweight, made of keratin and bone.",
    descriptionEs: "Con su enorme pico multicolor — verde, naranja, rojo y amarillo — el Tucán Pico Iris es una de las aves más reconocibles de los trópicos. A pesar de las apariencias, el pico es hueco y liviano, hecho de queratina y hueso.",
    facts: [
      { label: "Bill Length", labelEs: "Longitud del Pico", value: "Up to 20 cm", valueEs: "Hasta 20 cm" },
      { label: "Diet", labelEs: "Dieta", value: "Fruit, insects, small lizards", valueEs: "Fruta, insectos, pequeños lagartos" },
      { label: "Wingspan", labelEs: "Envergadura", value: "50–60 cm", valueEs: "50–60 cm" },
      { label: "Call", labelEs: "Canto", value: "Frog-like croaking", valueEs: "Croar similar al de una rana" },
    ],
    funFact: "Toucans sleep with their beak tucked under their wing and their tail folded over their back — a remarkably compact sleeping position for such a large bill.",
    funFactEs: "Los tucanes duermen con el pico metido bajo el ala y la cola doblada sobre la espalda — una posición para dormir notablemente compacta para un pico tan grande.",
    bgGradient: "linear-gradient(135deg, #1a3a15 0%, #4a8c3f 100%)",
  },
  {
    name: "Red-eyed Tree Frog",
    nameEs: "Rana de Ojos Rojos",
    scientific: "Agalychnis callidryas",
    emoji: "🐸",
    habitat: "Humid lowland rainforests · Caribbean coast",
    habitatEs: "Selvas tropicales bajas y húmedas · costa Caribe",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1550853123-b81beb0b1449?w=800&q=85&fit=crop",
    description: "The Red-eyed Tree Frog is an icon of tropical biodiversity and perhaps the most photographed amphibian in the world. Their brilliant scarlet eyes are a defense mechanism — the sudden flash of color startles predators long enough to escape.",
    descriptionEs: "La Rana de Ojos Rojos es un ícono de la biodiversidad tropical y quizás el anfibio más fotografiado del mundo. Sus brillantes ojos escarlata son un mecanismo de defensa — el destello repentino de color sobresalta a los depredadores el tiempo suficiente para escapar.",
    facts: [
      { label: "Body Length", labelEs: "Longitud Corporal", value: "4–7 cm", valueEs: "4–7 cm" },
      { label: "Diet", labelEs: "Dieta", value: "Insects, moths, flies", valueEs: "Insectos, polillas, moscas" },
      { label: "Habitat", labelEs: "Hábitat", value: "Canopy near water", valueEs: "Dosel cerca del agua" },
      { label: "Active", labelEs: "Actividad", value: "Nocturnal", valueEs: "Nocturna" },
    ],
    funFact: "Red-eyed tree frog eggs can hatch early if they detect vibrations from a predator — the embryos essentially choose to be born rather than be eaten.",
    funFactEs: "Los huevos de la rana de ojos rojos pueden eclosionar antes de tiempo si detectan vibraciones de un depredador — los embriones esencialmente eligen nacer en lugar de ser comidos.",
    bgGradient: "linear-gradient(135deg, #2e86ab 0%, #2d5a27 100%)",
  },
  {
    name: "Scarlet Macaw",
    nameEs: "Lapa Roja",
    scientific: "Ara macao",
    emoji: "🦜",
    habitat: "Pacific lowlands · Carara & Osa Peninsula",
    habitatEs: "Tierras bajas del Pacífico · Carara y Península de Osa",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1524595974748-074187548e50?w=800&q=85&fit=crop",
    description: "The Scarlet Macaw is one of the most stunning birds on the planet — and a true Costa Rican conservation success story. Once nearly extinct in the country due to habitat loss and trapping, their populations have recovered dramatically in Carara and the Osa Peninsula.",
    descriptionEs: "La Lapa Roja es una de las aves más impresionantes del planeta — y una verdadera historia de éxito en la conservación costarricense. Casi extinta en el país por la pérdida de hábitat y la caza, sus poblaciones se han recuperado dramáticamente en Carara y la Península de Osa.",
    facts: [
      { label: "Wingspan", labelEs: "Envergadura", value: "80–100 cm", valueEs: "80–100 cm" },
      { label: "Lifespan", labelEs: "Esperanza de Vida", value: "Up to 75 years", valueEs: "Hasta 75 años" },
      { label: "Diet", labelEs: "Dieta", value: "Seeds, fruit, nuts", valueEs: "Semillas, fruta, nueces" },
      { label: "Pair Bond", labelEs: "Vínculo de Pareja", value: "Lifelong mate", valueEs: "Pareja de por vida" },
    ],
    funFact: "Scarlet Macaws mate for life and are rarely seen alone — couples fly in tight formation and preen each other affectionately in a behavior scientists call allopreening.",
    funFactEs: "Las lapas rojas se aparean de por vida y rara vez se ven solas — las parejas vuelan en formación cerrada y se acicalan mutuamente con cariño, un comportamiento que los científicos llaman alopreening.",
    bgGradient: "linear-gradient(135deg, #8b1a1a 0%, #d4a017 100%)",
  },
  {
    name: "Jaguar",
    nameEs: "Jaguar",
    scientific: "Panthera onca",
    emoji: "🐆",
    habitat: "Corcovado National Park · Osa Peninsula",
    habitatEs: "Parque Nacional Corcovado · Península de Osa",
    status: "Near Threatened",
    statusEs: "Casi Amenazado",
    statusColor: "var(--gold-sun)",
    photo: "https://images.unsplash.com/photo-1759427596880-e0d310dc865e?w=800&q=85&fit=crop",
    description: "The jaguar is the Americas' largest cat and one of the most powerful predators on Earth. Costa Rica's Osa Peninsula contains one of the highest jaguar densities in Central America — a testament to Corcovado National Park's exceptional biodiversity.",
    descriptionEs: "El jaguar es el felino más grande de las Américas y uno de los depredadores más poderosos de la Tierra. La Península de Osa de Costa Rica alberga una de las densidades de jaguares más altas de Centroamérica — un testimonio de la excepcional biodiversidad del Parque Nacional Corcovado.",
    facts: [
      { label: "Weight", labelEs: "Peso", value: "56–96 kg", valueEs: "56–96 kg" },
      { label: "Territory", labelEs: "Territorio", value: "Up to 80 km²", valueEs: "Hasta 80 km²" },
      { label: "Diet", labelEs: "Dieta", value: "Peccaries, deer, tapirs, fish", valueEs: "Saínos, venados, dantas, peces" },
      { label: "Speed", labelEs: "Velocidad", value: "80 km/h in short bursts", valueEs: "80 km/h en ráfagas cortas" },
    ],
    funFact: "Unlike most big cats, jaguars love water and are powerful swimmers. They often hunt caimans and fish by swatting them from the riverbank with a massive paw.",
    funFactEs: "A diferencia de la mayoría de los grandes felinos, a los jaguares les encanta el agua y son nadadores poderosos. A menudo cazan caimanes y peces golpeándolos desde la orilla con una zarpa masiva.",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #d4a017 100%)",
  },
  {
    name: "Green Sea Turtle",
    nameEs: "Tortuga Verde",
    scientific: "Chelonia mydas",
    emoji: "🐢",
    habitat: "Tortuguero National Park · Caribbean coast",
    habitatEs: "Parque Nacional Tortuguero · costa Caribe",
    status: "Endangered",
    statusEs: "En Peligro",
    statusColor: "var(--red-volcano)",
    photo: "https://images.unsplash.com/photo-1499070022014-ccac3a6416f4?w=800&q=85&fit=crop",
    description: "Tortuguero — 'the place of turtles' — hosts one of the largest green sea turtle nesting grounds in the Western Hemisphere. Up to 30,000 females return to lay their eggs here each year, navigating thousands of miles by Earth's magnetic field.",
    descriptionEs: "Tortuguero — 'el lugar de las tortugas' — alberga uno de los mayores sitios de anidación de tortuga verde en el hemisferio occidental. Hasta 30.000 hembras regresan cada año a poner sus huevos aquí, navegando miles de kilómetros guiadas por el campo magnético de la Tierra.",
    facts: [
      { label: "Weight", labelEs: "Peso", value: "Up to 190 kg", valueEs: "Hasta 190 kg" },
      { label: "Lifespan", labelEs: "Esperanza de Vida", value: "70–80 years", valueEs: "70–80 años" },
      { label: "Nesting Season", labelEs: "Temporada de Anidación", value: "July–October", valueEs: "Julio–Octubre" },
      { label: "Nest Depth", labelEs: "Profundidad del Nido", value: "~50 cm", valueEs: "~50 cm" },
    ],
    funFact: "Female green sea turtles return to the exact beach where they were born to lay their own eggs — navigating thousands of miles of open ocean to find it.",
    funFactEs: "Las hembras de tortuga verde regresan a la playa exacta donde nacieron para poner sus propios huevos — navegando miles de kilómetros de océano abierto para encontrarla.",
    bgGradient: "linear-gradient(135deg, #2e86ab 0%, #1a5276 100%)",
  },
  {
    name: "White-faced Capuchin",
    nameEs: "Mono Carablanca",
    scientific: "Cebus capucinus",
    emoji: "🐒",
    habitat: "Manuel Antonio · Corcovado · Caribbean lowlands",
    habitatEs: "Manuel Antonio · Corcovado · tierras bajas del Caribe",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1643484350068-4c50256685fa?w=800&q=85&fit=crop",
    description: "The White-faced Capuchin is one of the most intelligent New World monkeys — capable of using tools, solving puzzles, and forming complex social alliances. They are charismatic, curious, and, unfortunately, have learned to steal food from tourists.",
    descriptionEs: "El Mono Carablanca es uno de los monos del Nuevo Mundo más inteligentes — capaz de usar herramientas, resolver acertijos y formar alianzas sociales complejas. Son carismáticos, curiosos y, lamentablemente, han aprendido a robar comida a los turistas.",
    facts: [
      { label: "Weight", labelEs: "Peso", value: "1.4–3.9 kg", valueEs: "1.4–3.9 kg" },
      { label: "Group Size", labelEs: "Tamaño del Grupo", value: "6–40 individuals", valueEs: "6–40 individuos" },
      { label: "Diet", labelEs: "Dieta", value: "Fruit, insects, small vertebrates", valueEs: "Fruta, insectos, pequeños vertebrados" },
      { label: "Lifespan", labelEs: "Esperanza de Vida", value: "Up to 50 years", valueEs: "Hasta 50 años" },
    ],
    funFact: "Capuchins rub certain plants onto their fur as insect repellent — one of the only non-human primates documented to use medicinal self-application.",
    funFactEs: "Los capuchinos frotan ciertas plantas sobre su pelaje como repelente de insectos — uno de los pocos primates no humanos documentados usando autoaplicación medicinal.",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #6b3d2e 100%)",
  },
  {
    name: "Green Iguana",
    nameEs: "Iguana Verde",
    scientific: "Iguana iguana",
    emoji: "🦎",
    habitat: "Riverbanks & coastal forests nationwide",
    habitatEs: "Riberas y bosques costeros de todo el país",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1444947173422-9737546c41a5?w=800&q=85&fit=crop",
    description: "The Green Iguana is one of the most visible reptiles in Costa Rica — you'll see them sunning on branches over rivers and hotel gardens. Despite their dinosaur appearance, they are entirely herbivorous and remarkably docile.",
    descriptionEs: "La Iguana Verde es uno de los reptiles más visibles de Costa Rica — se les ve tomando sol en ramas sobre ríos y jardines de hoteles. A pesar de su aspecto de dinosaurio, son completamente herbívoras y notablemente dóciles.",
    facts: [
      { label: "Length", labelEs: "Longitud", value: "Up to 2 meters", valueEs: "Hasta 2 metros" },
      { label: "Diet", labelEs: "Dieta", value: "Leaves, flowers, fruit", valueEs: "Hojas, flores, fruta" },
      { label: "Defense", labelEs: "Defensa", value: "Tail whip + spines", valueEs: "Latigazo de cola + espinas" },
      { label: "Swim Speed", labelEs: "Velocidad Nadando", value: "Strong open-water swimmer", valueEs: "Fuerte nadadora en aguas abiertas" },
    ],
    funFact: "Green iguanas can drop from a branch 15 meters up, land safely, and immediately run away — they evolved this falling ability to escape predators in the canopy.",
    funFactEs: "Las iguanas verdes pueden caer desde una rama a 15 metros de altura, aterrizar sanas y salvas, y salir corriendo de inmediato — desarrollaron esta capacidad de caer para escapar de depredadores en el dosel.",
    bgGradient: "linear-gradient(135deg, #4a8c3f 0%, #2d5a27 100%)",
  },
  {
    name: "Baird's Tapir",
    nameEs: "Danta Centroamericana",
    scientific: "Tapirus bairdii",
    emoji: "🦏",
    habitat: "Corcovado & La Amistad · highland forests",
    habitatEs: "Corcovado y La Amistad · bosques de altura",
    status: "Endangered",
    statusEs: "En Peligro",
    statusColor: "var(--red-volcano)",
    photo: "https://images.unsplash.com/photo-1712938548647-8f92b804eb82?w=800&q=85&fit=crop",
    description: "The Baird's Tapir is Central America's largest land mammal and a true living fossil — its lineage stretches back 55 million years. Despite resembling a pig, its closest relatives are horses and rhinoceroses.",
    descriptionEs: "La Danta Centroamericana es el mamífero terrestre más grande de Centroamérica y un verdadero fósil viviente — su linaje se remonta 55 millones de años. A pesar de parecerse a un cerdo, sus parientes más cercanos son los caballos y los rinocerontes.",
    facts: [
      { label: "Weight", labelEs: "Peso", value: "150–300 kg", valueEs: "150–300 kg" },
      { label: "Trunk", labelEs: "Trompa", value: "Prehensile nose for grabbing", valueEs: "Nariz prensil para agarrar" },
      { label: "Lifespan", labelEs: "Esperanza de Vida", value: "25–30 years", valueEs: "25–30 años" },
      { label: "Population", labelEs: "Población", value: "Fewer than 5,500 globally", valueEs: "Menos de 5.500 en el mundo" },
    ],
    funFact: "Tapirs are excellent swimmers and will submerge themselves entirely to escape predators or cool down — they can even walk along riverbeds underwater.",
    funFactEs: "Las dantas son excelentes nadadoras y se sumergen por completo para escapar de depredadores o refrescarse — incluso pueden caminar por el lecho de los ríos bajo el agua.",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #2d5a27 100%)",
  },
  {
    name: "White-nosed Coati",
    nameEs: "Pizote",
    scientific: "Nasua narica",
    emoji: "🦝",
    habitat: "Forests and forest edges nationwide",
    habitatEs: "Bosques y bordes de bosque en todo el país",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: null,
    description: "The Coati — called 'pizote' in Costa Rica — is the raccoon's bold tropical cousin. Female coatis live in large bands of up to 30 individuals, while males are solitary. Their long, flexible noses expertly probe bark and soil for insects.",
    descriptionEs: "El coatí — llamado 'pizote' en Costa Rica — es el primo tropical y atrevido del mapache. Las hembras viven en grandes bandas de hasta 30 individuos, mientras que los machos son solitarios. Sus narices largas y flexibles exploran expertamente la corteza y el suelo en busca de insectos.",
    facts: [
      { label: "Band Size", labelEs: "Tamaño de Banda", value: "Up to 30 females", valueEs: "Hasta 30 hembras" },
      { label: "Diet", labelEs: "Dieta", value: "Insects, fruit, small lizards", valueEs: "Insectos, fruta, pequeños lagartos" },
      { label: "Active", labelEs: "Actividad", value: "Diurnal", valueEs: "Diurna" },
      { label: "Nose", labelEs: "Nariz", value: "Highly mobile, cartilaginous", valueEs: "Muy móvil, cartilaginosa" },
    ],
    funFact: "Coati bands post sentinels in trees while the group forages on the ground — if a predator is spotted, the sentinel gives an alarm call and all members bolt for the trees.",
    funFactEs: "Las bandas de pizotes colocan centinelas en los árboles mientras el grupo busca comida en el suelo — si se detecta un depredador, el centinela da una llamada de alarma y todos huyen hacia los árboles.",
    bgGradient: "linear-gradient(135deg, #8b5e3c 0%, #4a3728 100%)",
  },
  {
    name: "Blue Morpho Butterfly",
    nameEs: "Mariposa Morfo Azul",
    scientific: "Morpho peleides",
    emoji: "🦋",
    habitat: "Humid forests at all elevations",
    habitatEs: "Bosques húmedos en todas las elevaciones",
    status: "Not Evaluated",
    statusEs: "No Evaluada",
    statusColor: "#5b9bd5",
    photo: "https://images.unsplash.com/photo-1558604365-a94006654196?w=800&q=85&fit=crop",
    description: "The Blue Morpho is one of the world's most spectacular butterflies — its wings produce a brilliant iridescent blue not through pigment, but through microscopic scales that scatter light. In the forest, they flash like blue flames between the trees.",
    descriptionEs: "La Morfo Azul es una de las mariposas más espectaculares del mundo — sus alas producen un brillante azul iridiscente no por pigmento, sino por escamas microscópicas que dispersan la luz. En el bosque, destellan como llamas azules entre los árboles.",
    facts: [
      { label: "Wingspan", labelEs: "Envergadura", value: "12–20 cm", valueEs: "12–20 cm" },
      { label: "Color", labelEs: "Color", value: "Structural iridescence, not pigment", valueEs: "Iridiscencia estructural, no pigmento" },
      { label: "Lifespan", labelEs: "Esperanza de Vida", value: "115 days", valueEs: "115 días" },
      { label: "Diet", labelEs: "Dieta", value: "Fermenting fruit juices", valueEs: "Jugos de fruta fermentada" },
    ],
    funFact: "The Blue Morpho's brilliant blue is invisible when the wings are closed — the underside is brown with false 'eyes' for camouflage. They flash blue only when flying.",
    funFactEs: "El brillante azul de la Morfo Azul es invisible cuando las alas están cerradas — la parte inferior es marrón con falsos 'ojos' para camuflarse. Solo destellan en azul cuando vuelan.",
    bgGradient: "linear-gradient(135deg, #1a5276 0%, #2e86ab 100%)",
  },
  {
    name: "American Crocodile",
    nameEs: "Cocodrilo Americano",
    scientific: "Crocodylus acutus",
    emoji: "🐊",
    habitat: "Tarcoles River · Tempisque · Pacific estuaries",
    habitatEs: "Río Tárcoles · Tempisque · esteros del Pacífico",
    status: "Vulnerable",
    statusEs: "Vulnerable",
    statusColor: "var(--gold-sun)",
    photo: "https://images.unsplash.com/photo-1605649461784-7d5e4df56c97?w=800&q=85&fit=crop",
    description: "The Tárcoles River near Carara is famous for its spectacular congregation of American crocodiles — up to 200 individuals basking on the riverbanks, viewable from the highway bridge. Costa Rica's crocodile population has recovered strongly thanks to legal protections.",
    descriptionEs: "El Río Tárcoles cerca de Carara es famoso por su espectacular congregación de cocodrilos americanos — hasta 200 individuos tomando sol en las riberas, visibles desde el puente de la carretera. La población de cocodrilos de Costa Rica se ha recuperado fuertemente gracias a las protecciones legales.",
    facts: [
      { label: "Length", labelEs: "Longitud", value: "Up to 6 meters", valueEs: "Hasta 6 metros" },
      { label: "Weight", labelEs: "Peso", value: "Up to 900 kg", valueEs: "Hasta 900 kg" },
      { label: "Speed", labelEs: "Velocidad", value: "17 km/h in water", valueEs: "17 km/h en el agua" },
      { label: "Lifespan", labelEs: "Esperanza de Vida", value: "Up to 70 years", valueEs: "Hasta 70 años" },
    ],
    funFact: "Despite their fearsome reputation, American crocodiles are actually less aggressive than their Nile or Saltwater cousins. Male crocodiles are known to carry their hatchlings gently in their jaws to the water.",
    funFactEs: "A pesar de su temible reputación, los cocodrilos americanos son en realidad menos agresivos que sus primos del Nilo o de agua salada. Se sabe que los machos cargan a sus crías con delicadeza en sus mandíbulas hasta el agua.",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #4a3728 100%)",
  },
  {
    name: "Mantled Howler Monkey",
    nameEs: "Mono Aullador de Manto",
    scientific: "Alouatta palliata",
    emoji: "🐒",
    habitat: "Forest canopy nationwide",
    habitatEs: "Dosel forestal en todo el país",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://plus.unsplash.com/premium_photo-1664298063096-0d59a430dc01?w=800&q=85&fit=crop",
    description: "The Mantled Howler produces one of the loudest sounds of any land animal on Earth — a deep, resonant roar audible up to 5 kilometers away. Their calls serve to establish territory without physical conflict, often creating a spectacular morning chorus.",
    descriptionEs: "El Aullador de Manto produce uno de los sonidos más fuertes de cualquier animal terrestre en la Tierra — un rugido profundo y resonante audible hasta 5 kilómetros de distancia. Sus llamados sirven para establecer territorio sin conflicto físico, a menudo creando un espectacular coro matutino.",
    facts: [
      { label: "Call Volume", labelEs: "Volumen del Llamado", value: "Audible 5 km away", valueEs: "Audible a 5 km de distancia" },
      { label: "Weight", labelEs: "Peso", value: "4–9 kg", valueEs: "4–9 kg" },
      { label: "Diet", labelEs: "Dieta", value: "Leaves, fruit, flowers", valueEs: "Hojas, fruta, flores" },
      { label: "Activity", labelEs: "Actividad", value: "75% resting — low energy diet", valueEs: "75% en reposo — dieta de baja energía" },
    ],
    funFact: "Howlers spend most of their day resting because leaves are so nutritionally poor. Their enlarged hyoid bone acts as a resonance chamber — giving them a voice box unlike any other primate.",
    funFactEs: "Los aulladores pasan la mayor parte del día descansando porque las hojas son nutricionalmente pobres. Su hueso hioides agrandado actúa como cámara de resonancia — dándoles una caja de voz distinta a la de cualquier otro primate.",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #2d5a27 100%)",
  },
  {
    name: "Rufous-tailed Hummingbird",
    nameEs: "Colibrí Colirrufo",
    scientific: "Amazilia tzacatl",
    emoji: "🐦",
    habitat: "Gardens, forest edges, and highlands nationwide",
    habitatEs: "Jardines, bordes de bosque y tierras altas en todo el país",
    status: "Least Concern",
    statusEs: "Preocupación Menor",
    statusColor: "var(--green-leaf)",
    photo: "https://images.unsplash.com/photo-1574992880705-5da1abb8b785?w=800&q=85&fit=crop",
    description: "Costa Rica is one of the world's premier hummingbird destinations, hosting over 50 species. The Rufous-tailed is the most common — a bold, glittering gem with a distinctive copper-red tail that can be seen hovering at feeders and flowers across the country.",
    descriptionEs: "Costa Rica es uno de los principales destinos de colibríes del mundo, con más de 50 especies. El Colirrufo es el más común — una joya audaz y brillante con una distintiva cola color cobre-rojizo que se puede ver revoloteando en comederos y flores por todo el país.",
    facts: [
      { label: "Wing Beats", labelEs: "Aleteos", value: "50–80 per second", valueEs: "50–80 por segundo" },
      { label: "Heart Rate", labelEs: "Ritmo Cardíaco", value: "1,260 beats/min in flight", valueEs: "1.260 latidos/min en vuelo" },
      { label: "Weight", labelEs: "Peso", value: "5 grams", valueEs: "5 gramos" },
      { label: "Diet", labelEs: "Dieta", value: "Nectar + small insects", valueEs: "Néctar + pequeños insectos" },
    ],
    funFact: "A hummingbird's brain is proportionally the largest of any bird — about 4.2% of body weight. They can remember every flower they have visited and how long it takes each to refill with nectar.",
    funFactEs: "El cerebro de un colibrí es proporcionalmente el más grande de cualquier ave — cerca del 4.2% de su peso corporal. Pueden recordar cada flor que han visitado y cuánto tiempo tarda cada una en volver a llenarse de néctar.",
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
  const { t, language } = useTranslation();
  const name = language === "en" ? animal.name : animal.nameEs;
  const habitat = language === "en" ? animal.habitat : animal.habitatEs;
  const status = language === "en" ? animal.status : animal.statusEs;
  const description = language === "en" ? animal.description : animal.descriptionEs;
  const funFact = language === "en" ? animal.funFact : animal.funFactEs;

  return (
    <section className="mb-8">
      <SectionHeader label={t("animalOfTheDay.title")} icon="🐾" tagline={t("animalOfTheDay.tagline")} />

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
              <div className="font-headline text-white font-bold text-xl leading-tight drop-shadow">{name}</div>
              <div className="font-editorial italic text-white/75 text-sm">{animal.scientific}</div>
              <div
                className="mt-2 inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded font-body uppercase tracking-widest"
                style={{ background: "rgba(0,0,0,0.45)", color: animal.statusColor, border: `1px solid ${animal.statusColor}` }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: animal.statusColor }} />
                {status}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-5 flex flex-col gap-3">
            <p className="font-editorial italic text-sm" style={{ color: "var(--ink-light)" }}>{habitat}</p>
            <p className="font-body text-base leading-relaxed" style={{ color: "var(--ink-medium)" }}>{description}</p>

            <div className="grid grid-cols-2 gap-2">
              {animal.facts.map((f) => (
                <div key={f.label} className="text-sm" style={{ borderLeft: "2px solid var(--green-leaf)", paddingLeft: "8px" }}>
                  <div className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{language === "en" ? f.label : f.labelEs}</div>
                  <div className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{language === "en" ? f.value : f.valueEs}</div>
                </div>
              ))}
            </div>

            <div
              className="rounded p-3 text-base font-editorial italic leading-relaxed mt-auto"
              style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--green-jungle)" }}
            >
              🌿 <strong>{t("animalOfTheDay.didYouKnow")}</strong> {funFact}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
