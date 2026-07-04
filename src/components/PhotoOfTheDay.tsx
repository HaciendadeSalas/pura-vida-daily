import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

// Photo of the Day: landscapes/culture only, no animals — see Animal of the Day for wildlife.
// Also avoid reusing images already shown in Volcano Watch (see VolcanoWatch.tsx) so the two
// sections don't display duplicate photos on the same page.
const photos = [
  {
    title: "La Fortuna Waterfall",
    location: "Arenal Volcano National Park",
    caption: "La Fortuna Waterfall plunges 70 meters into a turquoise jungle pool — reached by a steep hike down 530 steps.",
    tags: ["Waterfall", "Arenal", "Nature", "Swimming"],
    photo: "https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
  {
    title: "Jungle Canopy Bridge",
    location: "Monteverde Cloud Forest",
    caption: "Hanging bridges suspended between ancient trees offer a rare view into Monteverde's cloud forest canopy, one of Earth's most biodiverse ecosystems.",
    tags: ["Monteverde", "Cloud Forest", "Canopy", "Adventure"],
    photo: "https://images.unsplash.com/photo-1611223157314-18a252c20228?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
  {
    title: "Guanacaste Pacific Coastline",
    location: "Playa Tamarindo, Guanacaste",
    caption: "Guanacaste's Pacific coastline stretches for miles of white sand and warm surf — Tamarindo has drawn surfers and sun-seekers for generations.",
    tags: ["Guanacaste", "Beach", "Pacific", "Tamarindo"],
    photo: "https://images.unsplash.com/photo-1714319001328-2383617c51d2?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
  {
    title: "Hacienda Belén",
    location: "Belén, Alajuela Province",
    caption: "Rolling green pasture meets misty mountains at this Central Valley hacienda, a reminder that coffee country begins minutes from San José.",
    tags: ["Hacienda", "Alajuela", "Countryside", "Central Valley"],
    photo: "https://images.unsplash.com/photo-1629337451443-3a43721f196b?w=1600&q=85&fit=crop",
    credit: "Photo by Eelco Böhtlingk · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-grass-field-near-green-mountains-under-blue-sky-during-daytime-x2Dwb97kQ9c",
  },
  {
    title: "Coffee Plantation Oxcart",
    location: "Historic Coffee Hacienda, Central Valley",
    caption: "A traditional oxcart rests beside a conserved 19th-century hacienda house, once used to haul the coffee harvest down from the highlands.",
    tags: ["Oxcart", "Carreta", "Coffee", "Heritage"],
    photo: "https://images.unsplash.com/photo-1593216452146-1c47e42b2461?w=1600&q=85&fit=crop",
    credit: "Photo by Esteban León · Unsplash",
    creditUrl: "https://unsplash.com/photos/brown-wooden-boat-on-brown-wooden-dock-during-daytime-gaQsJ0xBm-I",
  },
  {
    title: "Manuel Antonio Beach",
    location: "Manuel Antonio National Park, Puntarenas",
    caption: "Rainforest tumbles straight down to black volcanic rock and blue Pacific water — one of the few places where jungle meets shoreline this abruptly.",
    tags: ["Manuel Antonio", "Beach", "Pacific", "National Park"],
    photo: "https://images.unsplash.com/photo-1580676875879-f20086f1e729?w=1600&q=85&fit=crop",
    credit: "Photo by Etienne Delorieux · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-on-black-rock-formation-near-blue-sea-during-daytime-EZCIoSIzGDU",
  },
  {
    title: "Montezuma Shoreline",
    location: "Montezuma, Nicoya Peninsula",
    caption: "Palm trees lean over the sand at Montezuma, a laid-back Nicoya Peninsula village long favored by surfers and sunset-chasers.",
    tags: ["Montezuma", "Nicoya", "Beach", "Sunset"],
    photo: "https://images.unsplash.com/photo-1674170206059-5f7acdaa4a5a?w=1600&q=85&fit=crop",
    credit: "Photo by Frames For Your Heart · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-large-body-of-water-surrounded-by-trees-92nPOMLuBhM",
  },
  {
    title: "Playa Blanca Through the Almonds",
    location: "Playa Blanca, Puntarenas",
    caption: "The Pacific glimmers through almond tree branches at Playa Blanca, a quieter stretch of the Puntarenas coast.",
    tags: ["Puntarenas", "Beach", "Pacific", "Playa Blanca"],
    photo: "https://images.unsplash.com/photo-1736524972348-85c310d7815b?w=1600&q=85&fit=crop",
    credit: "Photo by Low Tide Travels · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-view-of-a-beach-through-the-branches-of-a-tree-q-YTHOO5HJ0",
  },
  {
    title: "Nosara at Sunset",
    location: "Nosara, Guanacaste",
    caption: "Waves crash against the rocks as the sky over Nosara turns brilliant orange — this Guanacaste coastline is prized for its unhurried pace.",
    tags: ["Nosara", "Guanacaste", "Sunset", "Beach"],
    photo: "https://images.unsplash.com/photo-1681845047615-28696dec3756?w=1600&q=85&fit=crop",
    credit: "Photo by César Badilla Miranda · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-sunset-over-the-ocean-with-waves-crashing-on-the-rocks-fJa5Q7Rf-8Y",
  },
  {
    title: "San Juanillo Sunset",
    location: "San Juanillo, Guanacaste",
    caption: "The sun drops into the Pacific off San Juanillo, a small fishing beach on the Guanacaste coast still well off the resort circuit.",
    tags: ["San Juanillo", "Guanacaste", "Sunset", "Pacific"],
    photo: "https://images.unsplash.com/photo-1680003604948-130d4a26ae2a?w=1600&q=85&fit=crop",
    credit: "Photo by Frank Eiffert · Unsplash",
    creditUrl: "https://unsplash.com/photos/the-sun-is-setting-over-the-water-at-the-beach-oT8g_Dn2Uss",
  },
  {
    title: "Puerto Viejo Coastline",
    location: "Cocles, Puerto Viejo de Talamanca",
    caption: "Caribbean surf rolls into the palm-lined shore at Cocles beach, just south of Puerto Viejo — the heart of Costa Rica's Afro-Caribbean coast.",
    tags: ["Puerto Viejo", "Caribbean", "Cocles", "Beach"],
    photo: "https://images.unsplash.com/photo-1643400811908-ed46db6c8066?w=1600&q=85&fit=crop",
    credit: "Photo by Luis Diego Aguilar · Unsplash",
    creditUrl: "https://unsplash.com/photos/an-aerial-view-of-a-beach-surrounded-by-trees-bSJWEfOrHps",
  },
  {
    title: "Manzanillo Palms",
    location: "Manzanillo, Limón Province",
    caption: "Palm trees crowd the waterline at Manzanillo, the southernmost Caribbean beach town and gateway to the Gandoca-Manzanillo Wildlife Refuge.",
    tags: ["Manzanillo", "Caribbean", "Limón", "Beach"],
    photo: "https://images.unsplash.com/photo-1553391098-1080b545818e?w=1600&q=85&fit=crop",
    credit: "Photo by Juliana Barquero · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-palm-trees-nearby-seashores-PkpW57QZZus",
  },
  {
    title: "Tortuguero Beach",
    location: "Tortuguero National Park, Limón",
    caption: "Green trees crowd the shoreline at Tortuguero — 'the place of turtles' — home to one of the largest sea turtle nesting grounds around.",
    tags: ["Tortuguero", "Caribbean", "Beach", "National Park"],
    photo: "https://images.unsplash.com/photo-1580182019383-46b50120b9ff?w=1600&q=85&fit=crop",
    credit: "Photo by Etienne Delorieux · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-on-beach-shore-under-blue-sky-during-daytime-i8UaVgefLQs",
  },
  {
    title: "Caribbean Coast, Costa Rica",
    location: "Limón Province",
    caption: "Dense green forest meets calm Caribbean water along Costa Rica's less-traveled eastern shore — a quieter counterpart to the busier Pacific beach towns.",
    tags: ["Caribbean", "Limón", "Coastline", "Beach"],
    photo: "https://images.unsplash.com/photo-1589566577030-0a37f8775715?w=1600&q=85&fit=crop",
    credit: "Photo by ronald salazar · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-on-seashore-during-daytime-3G91giILR_0",
  },
  {
    title: "Punta Mona Golden Beach",
    location: "Punta Mona, Limón Province",
    caption: "A secluded stretch of golden sand at Punta Mona, near the Panama border — one of the most remote beaches on Costa Rica's Caribbean coast.",
    tags: ["Punta Mona", "Caribbean", "Beach", "Remote"],
    photo: "https://images.unsplash.com/photo-1572817430227-b94a4f9e5f1e?w=1600&q=85&fit=crop",
    credit: "Photo by Chalo Garcia · Unsplash",
    creditUrl: "https://unsplash.com/photos/body-of-water-near-trees-under-white-and-blue-sky-during-daytime-hP9gzpq17w0",
  },
  {
    title: "Costa Rican Rain Forest",
    location: "Lowland Rainforest",
    caption: "Layer upon layer of green canopy stretches to the horizon — the dense, humid lowland rainforest covering roughly a quarter of Costa Rica.",
    tags: ["Rainforest", "Jungle", "Biodiversity", "Canopy"],
    photo: "https://images.unsplash.com/photo-1687304527563-74c180d8ced7?w=1600&q=85&fit=crop",
    credit: "Photo by Elianna Gill · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-lush-green-forest-filled-with-lots-of-trees-HeMKj8mCEQ4",
  },
  {
    title: "Lush Rainforest Canopy",
    location: "Costa Rican Rainforest",
    caption: "Unbroken jungle canopy rolls across the hills — a reminder that Costa Rica, just 0.03% of the planet's landmass, holds nearly 6% of its biodiversity.",
    tags: ["Rainforest", "Canopy", "Jungle", "Nature"],
    photo: "https://images.unsplash.com/photo-1698871741610-11e817f934e3?w=1600&q=85&fit=crop",
    credit: "Photo by Outward Bound Costa Rica · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-lush-green-forest-filled-with-lots-of-trees-LGb6GWmee1U",
  },
  {
    title: "Highland Rainforest in the Mist",
    location: "Central Highlands",
    caption: "Clouds and fog drift down from the mountains over emerald treetops — the highland rainforest at its most atmospheric, somewhere between jungle and cloud forest.",
    tags: ["Rainforest", "Highlands", "Fog", "Jungle"],
    photo: "https://images.unsplash.com/photo-1629494939320-e36ef741dc36?w=1600&q=85&fit=crop",
    credit: "Photo by Christina Victoria Craft · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-covered-with-fog-during-daytime-bjVoK4pDMj4",
  },
  {
    title: "Looking Up Into the Jungle",
    location: "Costa Rican Jungle",
    caption: "Looking straight up into the canopy of a jungle tree — a view that captures just how many stories tall a healthy rainforest can grow.",
    tags: ["Jungle", "Canopy", "Trees", "Rainforest"],
    photo: "https://images.unsplash.com/photo-1710028267931-012caa55e456?w=1600&q=85&fit=crop",
    credit: "Photo by Madeline Hogan · Unsplash",
    creditUrl: "https://unsplash.com/photos/looking-up-into-the-canopy-of-a-tree-in-a-forest-_Sy7UADBcoo",
  },
  {
    title: "Manuel Antonio Jungle Edge",
    location: "Manuel Antonio, Puntarenas",
    caption: "Where jungle meets water at Manuel Antonio — one of Costa Rica's smallest national parks, and among the most biodiverse per square mile anywhere.",
    tags: ["Manuel Antonio", "Jungle", "Rainforest", "Puntarenas"],
    photo: "https://images.unsplash.com/photo-1592501171458-4e131613f542?w=1600&q=85&fit=crop",
    credit: "Photo by Christina Victoria Craft · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-near-body-of-water-under-blue-sky-and-white-clouds-during-daytime-giYqgjJ4-Ps",
  },
  {
    title: "Monteverde at Dusk",
    location: "Monteverde Cloud Forest Reserve",
    caption: "Cloud forest trees silhouette against a fading sky in Monteverde, a reserve so biodiverse that Quaker settlers protected it decades before ecotourism made it famous.",
    tags: ["Monteverde", "Cloud Forest", "Dusk", "Reserve"],
    photo: "https://images.unsplash.com/photo-1580495024618-3fb7d34affbd?w=1600&q=85&fit=crop",
    credit: "Photo by James Ting · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-under-cloudy-sky-during-sunset-0L1NA9DMdrw",
  },
  {
    title: "Monteverde Lookout",
    location: "Monteverde, Puntarenas",
    caption: "A wooden viewing platform offers a rare open sightline through Monteverde's dense cloud forest canopy, where mist rolls through the trees nearly year-round.",
    tags: ["Monteverde", "Cloud Forest", "Lookout", "Mist"],
    photo: "https://images.unsplash.com/photo-1701111361992-083d91062fda?w=1600&q=85&fit=crop",
    credit: "Photo by Dulce Wilson · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-man-standing-on-a-wooden-platform-in-the-woods-WOPk6ozgRvs",
  },
  {
    title: "Monteverde Forest Pathway",
    location: "Monteverde Cloud Forest",
    caption: "A quiet trail winds between moss-covered trunks in Monteverde — one of Central America's most-visited cloud forests, yet still capable of feeling untouched.",
    tags: ["Monteverde", "Cloud Forest", "Trail", "Nature"],
    photo: "https://images.unsplash.com/photo-1601922251755-60d88239608b?w=1600&q=85&fit=crop",
    credit: "Photo by Jan Weber · Unsplash",
    creditUrl: "https://unsplash.com/photos/pathway-between-green-trees-during-daytime-Xgw4gisgidI",
  },
  {
    title: "Costa Rica Waterfall",
    location: "Costa Rican Rainforest",
    caption: "Water finds its way through dense jungle on its way downhill — one of thousands of unnamed cascades hidden across Costa Rica's rainforest-covered mountains.",
    tags: ["Waterfall", "Rainforest", "Jungle", "Nature"],
    photo: "https://images.unsplash.com/photo-1611223157162-e4cb1419a7d6?w=1600&q=85&fit=crop",
    credit: "Photo by Fabio Fistarol · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-under-white-sky-during-daytime-adLo80F_9P0",
  },
  {
    title: "San Luis Waterfall",
    location: "San Luis Valley, Monteverde",
    caption: "The San Luis Waterfall drops through the forest below Monteverde — quieter and far less visited than its famous neighbor at La Fortuna.",
    tags: ["San Luis", "Waterfall", "Monteverde", "Nature"],
    photo: "https://images.unsplash.com/photo-1701113584390-e47a2cd52492?w=1600&q=85&fit=crop",
    credit: "Photo by Dulce Wilson · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-view-of-a-waterfall-in-the-middle-of-a-forest-yh_5xUY_Y28",
  },
  {
    title: "La Paz Waterfall",
    location: "La Paz Waterfall Gardens, Alajuela",
    caption: "One of five major cascades along the La Paz River, this waterfall plunges through cloud forest on the slopes of Poás.",
    tags: ["La Paz", "Waterfall", "Alajuela", "Cloud Forest"],
    photo: "https://images.unsplash.com/photo-1586298591765-ac63f1103ead?w=1600&q=85&fit=crop",
    credit: "Photo by David Traña · Unsplash",
    creditUrl: "https://unsplash.com/photos/water-falls-in-the-middle-of-the-forest-EFQjTA1Pa1A",
  },
  {
    title: "Llanos de Cortez Waterfall",
    location: "Guanacaste Province",
    caption: "A wide curtain of water fans out over volcanic rock at Llanos de Cortez, one of Guanacaste's most swimmable waterfalls.",
    tags: ["Llanos de Cortez", "Waterfall", "Guanacaste", "Swimming"],
    photo: "https://images.unsplash.com/photo-1581045844154-ffc4f627e5c8?w=1600&q=85&fit=crop",
    credit: "Photo by Courtney Hall · Unsplash",
    creditUrl: "https://unsplash.com/photos/brown-tree-trunk-on-water-falls-YJI5ROKNFFQ",
  },
  {
    title: "Nauyaca Waterfalls",
    location: "Nauyaca Waterfalls, Pérez Zeledón",
    caption: "Seen from above, the twin-tiered Nauyaca Waterfalls carve through the jungle of the southern Pacific zone — reachable only by hike or horseback.",
    tags: ["Nauyaca", "Waterfall", "Pérez Zeledón", "Aerial"],
    photo: "https://images.unsplash.com/photo-1634743601926-2b302bab2636?w=1600&q=85&fit=crop",
    credit: "Photo by Kyle Pearce · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-waterfall-in-the-middle-of-a-forest-ki-Eo0OQy64",
  },
  {
    title: "The Road to Jacó",
    location: "Route to Jacó, Puntarenas",
    caption: "Green mountains roll past the window on the winding route down to Jacó, one of Costa Rica's most scenic Pacific coast drives.",
    tags: ["Jacó", "Mountains", "Road Trip", "Puntarenas"],
    photo: "https://images.unsplash.com/photo-1562030757-ba49fec50e2d?w=1600&q=85&fit=crop",
    credit: "Photo by Zach Castillo · Unsplash",
    creditUrl: "https://unsplash.com/photos/gray-top-road-near-green-grass-mountain-ubny-mVxv5M",
  },
  {
    title: "San José Framed by Mountains",
    location: "San José, Central Valley",
    caption: "Costa Rica's capital sits cradled in the Central Valley, ringed by mountains that give San José its famously mild, spring-like climate.",
    tags: ["San José", "Central Valley", "Mountains", "Capital"],
    photo: "https://images.unsplash.com/photo-1687698328566-683e7398996e?w=1600&q=85&fit=crop",
    credit: "Photo by Elianna Gill · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-view-of-a-city-with-a-mountain-in-the-background-3wnARnIFLx8",
  },
  {
    title: "Rainforest Mountain Tops",
    location: "Costa Rican Highlands",
    caption: "Clouds settle into the folds of forested hillsides — the kind of layered, mist-wrapped landscape that makes Costa Rica's highlands feel endless from any overlook.",
    tags: ["Mountains", "Highlands", "Rainforest", "Landscape"],
    photo: "https://images.unsplash.com/photo-1698870818723-5e4924d0724f?w=1600&q=85&fit=crop",
    credit: "Photo by Outward Bound Costa Rica · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-lush-green-hillside-with-mountains-in-the-background-0Iygkpw4imc",
  },
  {
    title: "Mountains of Costa Rica",
    location: "Central Highlands",
    caption: "Forested hills stack into the distance under a soft sky — a quiet, unnamed corner of Costa Rica's mountainous interior.",
    tags: ["Mountains", "Highlands", "Landscape", "Nature"],
    photo: "https://images.unsplash.com/photo-1666058376837-2904c3bfeda8?w=1600&q=85&fit=crop",
    credit: "Photo by Juan Davila · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-landscape-with-trees-and-hills-Aelcz08C-MM",
  },
  {
    title: "Misty Mountain Forest",
    location: "Costa Rican Highlands",
    caption: "Fog settles into a forested hillside, blurring the line between mountain and cloud — a common sight in Costa Rica's rain-fed highland terrain.",
    tags: ["Mountains", "Fog", "Highlands", "Forest"],
    photo: "https://images.unsplash.com/photo-1683065480453-3a27752202a9?w=1600&q=85&fit=crop",
    credit: "Photo by Outward Bound Costa Rica · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-forest-filled-with-lots-of-trees-covered-in-fog-6EhbBJnUDug",
  },
  {
    title: "A River in the Rainforest",
    location: "Costa Rican Rainforest",
    caption: "A clear stream cuts through dense jungle — one of the countless waterways that keep Costa Rica's rainforest lush through both wet and dry seasons.",
    tags: ["River", "Rainforest", "Jungle", "Nature"],
    photo: "https://images.unsplash.com/photo-1689829538884-7a7cfabda004?w=1600&q=85&fit=crop",
    credit: "Photo by Elianna Gill · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-stream-running-through-a-lush-green-forest-nHmzAj8Xfxg",
  },
  {
    title: "River at Heredia",
    location: "Heredia Province",
    caption: "A quiet river winds beneath green trees in Heredia, the coffee-growing province just north of San José known for its cool climate and colonial towns.",
    tags: ["Heredia", "River", "Central Valley", "Nature"],
    photo: "https://images.unsplash.com/photo-1626289838895-d2cb31657f8c?w=1600&q=85&fit=crop",
    credit: "Photo by Marvin Ozz · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-beside-river-under-blue-sky-during-daytime-hiEyMQN5dQE",
  },
  {
    title: "Lake Arenal Valley",
    location: "Lake Arenal, Alajuela Province",
    caption: "Costa Rica's largest lake stretches through a lush valley below the clouds — created in the 1970s by a dam that now powers the country.",
    tags: ["Lake Arenal", "Valley", "Alajuela", "Landscape"],
    photo: "https://images.unsplash.com/photo-1639417589149-144482ab97cc?w=1600&q=85&fit=crop",
    credit: "Photo by Rikin Katyal · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-view-of-a-lush-green-valley-with-mountains-in-the-distance-NtReYQNPgjo",
  },
  {
    title: "Río San Juan Border River",
    location: "Río San Juan, CR/Nicaragua Border",
    caption: "A lone tree stands in the middle of the Río San Juan, the river forming much of the border between Costa Rica and Nicaragua.",
    tags: ["Río San Juan", "River", "Border", "Nature"],
    photo: "https://images.unsplash.com/photo-1649240262324-54efd580ed65?w=1600&q=85&fit=crop",
    credit: "Photo by Rico Meier · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-tree-that-is-standing-in-the-middle-of-a-river-33dk821sxnY",
  },
  {
    title: "Río Celeste from Above",
    location: "Tenorio Volcano National Park",
    caption: "Seen from the air, the Río Celeste winds through dense jungle — its turquoise water comes from a chemical reaction where two clear rivers converge.",
    tags: ["Río Celeste", "River", "Aerial", "Turquoise"],
    photo: "https://images.unsplash.com/photo-1711882569452-967be6941ddd?w=1600&q=85&fit=crop",
    credit: "Photo by Bernd 📷 Dittrich · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-river-running-through-a-lush-green-forest-aOPZT1Zb7pM",
  },
  {
    title: "Sunset at Marino Ballena",
    location: "Marino Ballena National Park, Puntarenas",
    caption: "The sky burns orange over Marino Ballena, home to the famous 'whale's tail' sandbar and a key nursery for humpback whales migrating from both hemispheres.",
    tags: ["Marino Ballena", "Sunset", "National Park", "Pacific"],
    photo: "https://images.unsplash.com/photo-1602190629358-31a50de315e4?w=1600&q=85&fit=crop",
    credit: "Photo by Selina Bubendorfer · Unsplash",
    creditUrl: "https://unsplash.com/photos/body-of-water-near-trees-during-sunset-rUTAE5YwkKY",
  },
  {
    title: "Costa Rica Sunset",
    location: "Pacific Coast",
    caption: "Clouds catch the last light of the day over the treeline — a nightly ritual that draws travelers to Costa Rica's shores every evening.",
    tags: ["Sunset", "Pacific", "Landscape", "Golden Hour"],
    photo: "https://images.unsplash.com/photo-1589821886729-e7bb1d862da5?w=1600&q=85&fit=crop",
    credit: "Photo by Robin Canfield · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-under-cloudy-sky-during-sunset-F8U3TbR1hKU",
  },
  {
    title: "Sunset in Guanacaste",
    location: "Guanacaste Province",
    caption: "The sky deepens into gold over a quiet road in Guanacaste, Costa Rica's driest, sunniest province and source of its most reliable sunsets.",
    tags: ["Guanacaste", "Sunset", "Landscape", "Golden Hour"],
    photo: "https://images.unsplash.com/photo-1590083325365-028dc318281c?w=1600&q=85&fit=crop",
    credit: "Photo by Robin Canfield · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-near-road-during-sunset-a13UXFz_MP0",
  },
  {
    title: "Playa Escondida, Manuel Antonio",
    location: "Manuel Antonio National Park",
    caption: "A hidden cove meets the treeline at Playa Escondida, one of several small beaches tucked inside Manuel Antonio National Park's protected coastline.",
    tags: ["Manuel Antonio", "National Park", "Beach", "Coastline"],
    photo: "https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?w=1600&q=85&fit=crop",
    credit: "Photo by Atanas Malamov · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-trees-beside-blue-sea-xGhaXZtQb1s",
  },
  {
    title: "Manuel Antonio Park Road",
    location: "Manuel Antonio National Park",
    caption: "A curved road disappears into the greenery of Manuel Antonio, one of Costa Rica's smallest national parks and among its most visited.",
    tags: ["Manuel Antonio", "National Park", "Jungle", "Road"],
    photo: "https://images.unsplash.com/photo-1691242559983-db4cb8415ee8?w=1600&q=85&fit=crop",
    credit: "Photo by Elianna Gill · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-curved-road-surrounded-by-lush-green-trees-nlaOjkaaQh0",
  },
  {
    title: "Basílica de los Ángeles",
    location: "Cartago, Costa Rica",
    caption: "The Basílica de los Ángeles in Cartago houses La Negrita, Costa Rica's patron saint — every August, thousands walk here on pilgrimage.",
    tags: ["Basílica", "Cartago", "Colonial", "Pilgrimage"],
    photo: "https://images.unsplash.com/photo-1530993143534-5d23f4a3e78c?w=1600&q=85&fit=crop",
    credit: "Photo by James Ahlberg · Unsplash",
    creditUrl: "https://unsplash.com/photos/building-with-brown-and-red-roof-OIZCshhV6tM",
  },
  {
    title: "Streets of San José",
    location: "San José, Costa Rica",
    caption: "Colorful houses line a quiet street in San José — a glimpse of the capital away from its busier commercial avenues.",
    tags: ["San José", "Streets", "Architecture", "Urban"],
    photo: "https://images.unsplash.com/photo-1590268879033-e53b7bcc3338?w=1600&q=85&fit=crop",
    credit: "Photo by Robin Canfield · Unsplash",
    creditUrl: "https://unsplash.com/photos/green-and-brown-houses-beside-road-during-daytime-phFxZTQCO3s",
  },
  {
    title: "A Small Costa Rican Surf Town",
    location: "Pacific Coast Surf Town",
    caption: "Golden-hour light filters through palm fronds along a busy street in a small Costa Rican surf town, a motorcycle threading past tour signs.",
    tags: ["Surf Town", "Pacific Coast", "Street", "Golden Hour"],
    photo: "https://images.unsplash.com/photo-1778874294856-a3e32a698216?w=1600&q=85&fit=crop",
    credit: "Photo by 35MM North · Unsplash",
    creditUrl: "https://unsplash.com/photos/tropical-street-scene-with-palm-trees-and-power-lines-51I_5jfjvK4",
  },
  {
    title: "Tabacón Hot Springs Resort",
    location: "Tabacón, La Fortuna",
    caption: "A wooden bridge crosses the thermally heated river at Tabacón, fed by mineral-rich runoff from the Arenal volcanic system.",
    tags: ["Tabacón", "Hot Springs", "La Fortuna", "Resort"],
    photo: "https://images.unsplash.com/photo-1590047301995-bba02b030fa5?w=1600&q=85&fit=crop",
    credit: "Photo by Mike Swigunski · Unsplash",
    creditUrl: "https://unsplash.com/photos/brown-wooden-bridge-over-river-1cEHvIY_p5I",
  },
  {
    title: "La Fortuna Thermal Pool",
    location: "La Fortuna, Alajuela Province",
    caption: "A warm mineral pool sits framed by mountains in La Fortuna, the hot springs capital of Costa Rica, heated by Arenal's volcanic activity.",
    tags: ["La Fortuna", "Hot Springs", "Thermal", "Alajuela"],
    photo: "https://images.unsplash.com/photo-1693476636761-001418a89d5f?w=1600&q=85&fit=crop",
    credit: "Photo by Hongbin · Unsplash",
    creditUrl: "https://unsplash.com/photos/a-swimming-pool-with-a-mountain-in-the-background-T08wEbXkiq8",
  },
  {
    title: "Hot Springs in La Fortuna",
    location: "La Fortuna, Alajuela Province",
    caption: "A wooden bridge crosses a steaming thermal river in La Fortuna, where dozens of hot spring resorts ring the volcanic aquifer beneath the town.",
    tags: ["La Fortuna", "Hot Springs", "Thermal", "Volcanic"],
    photo: "https://images.unsplash.com/photo-1628212093774-726024f24528?w=1600&q=85&fit=crop",
    credit: "Photo by J. Amill Santiago · Unsplash",
    creditUrl: "https://unsplash.com/photos/brown-wooden-bridge-over-waterfalls-VWwhCpEHwyk",
  },
  {
    title: "Hotel Martino Resort & Spa",
    location: "La Fortuna, Alajuela Province",
    caption: "A resort pool framed by tropical greenery near La Fortuna — one of many spa retreats built around the region's naturally heated groundwater.",
    tags: ["La Fortuna", "Resort", "Spa", "Thermal"],
    photo: "https://images.unsplash.com/photo-1609517448522-2e108986b505?w=1600&q=85&fit=crop",
    credit: "Photo by Christian Hess Araya · Unsplash",
    creditUrl: "https://unsplash.com/photos/swimming-pool-near-green-trees-during-daytime-HtXK-ykvuxc",
  },
  {
    title: "Sierpe Mangrove Estuary",
    location: "Sierpe, Puntarenas",
    caption: "Morning clouds settle over the winding waterways of Sierpe, gateway to Costa Rica's largest mangrove forest and the boat route out to the Osa Peninsula.",
    tags: ["Sierpe", "Mangroves", "Estuary", "Puntarenas"],
    photo: "https://images.unsplash.com/photo-1634743600490-1477151f8800?w=1600&q=85&fit=crop",
    credit: "Photo by Kyle Pearce · Unsplash",
    creditUrl: "https://unsplash.com/photos/an-aerial-view-of-a-lake-surrounded-by-trees--l3p1_vE9cg",
  },
];

const CR_TIMEZONE = "America/Costa_Rica";

function getDayIndex() {
  const now = new Date();
  const [year, month, day] = now
    .toLocaleDateString("en-CA", { timeZone: CR_TIMEZONE })
    .split("-")
    .map(Number);
  const start = Date.UTC(year, 0, 0);
  const current = Date.UTC(year, month - 1, day);
  return Math.floor((current - start) / 86400000) % photos.length;
}

export default function PhotoOfTheDay() {
  const photo = photos[getDayIndex()];

  return (
    <section>
      <SectionHeader label="Photo of the Day" icon="📸" tagline="The beauty of Costa Rica, captured" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* Hero image */}
        <div className="relative min-h-52 overflow-hidden">
          <Image
            src={photo.photo}
            alt={photo.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />

          {/* Tags overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {photo.tags.map((tag) => (
              <span key={tag} className="text-xs font-body px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.9)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-headline text-3xl font-bold text-white leading-tight">{photo.title}</h3>
            <p className="font-editorial italic text-white/75 text-sm mt-1">📍 {photo.location}</p>
          </div>
        </div>

        {/* Caption */}
        <div className="p-5 flex flex-col gap-2" style={{ background: "var(--bg-cream)" }}>
          <p className="font-editorial italic leading-relaxed" style={{ color: "var(--ink-medium)" }}>
            "{photo.caption}"
          </p>
          <p className="font-body text-xs uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>
            📷{" "}
            {"creditUrl" in photo && photo.creditUrl ? (
              <a href={photo.creditUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {photo.credit}
              </a>
            ) : (
              photo.credit
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
