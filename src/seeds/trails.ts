export default async function seedTrails(strapi) {
  console.log("🌱 Seeding trails...");
  await strapi.db.query("api::trail.trail").deleteMany({});
  const rifugioPomilio = await strapi.db.query("api::hut.hut").findOne({
    where: { name: "Rifugio Pomilio" },
  });

  if (!rifugioPomilio) {
    console.error(
      "❌ Rifugio Pomilio non trovato! I sentieri collegati non avranno il related_huts valorizzato."
    );
  }

  const trails = [
    {
      id: 1,
      title: "Anello del Monte Amaro",
      slug: "anello-monte-amaro",
      description:
        "Percorso circolare che offre viste panoramiche sul massiccio della Majella. Il sentiero attraversa faggete secolari e prati alpini.",
      difficulty: "hard",
      duration_hours: 8,
      elevation_gain_m: 1200,
      season: "summer",
      location: {
        latitude: 42.0857,
        longitude: 14.0867,
        address: "Monte Amaro, Majella",
        __component: "common.geo-point",
      },
      related_huts: rifugioPomilio ? [rifugioPomilio.id] : [],
      locale: "it",
    },
    {
      id: 2,
      title: "Sentiero del Lupo",
      slug: "sentiero-lupo",
      description:
        "Percorso che attraversa l'habitat naturale del lupo appenninico. Il sentiero offre la possibilità di osservare la fauna selvatica e la natura incontaminata.",
      difficulty: "moderate",
      duration_hours: 4,
      elevation_gain_m: 450,
      season: "spring",
      location: {
        latitude: 42.1234,
        longitude: 14.2345,
        address: "Parco Nazionale della Majella",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 3,
      title: "Cascata di San Giovanni",
      slug: "cascata-san-giovanni",
      description:
        "Facile escursione che porta a una suggestiva cascata. Il percorso è adatto a famiglie e offre punti di sosta attrezzati.",
      difficulty: "easy",
      duration_hours: 2,
      elevation_gain_m: 150,
      season: "spring",
      location: {
        latitude: 42.1567,
        longitude: 14.1789,
        address: "Valle dell'Orfento",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 4,
      title: "Cresta del Morrone",
      slug: "cresta-morrone",
      description:
        "Percorso panoramico lungo la cresta del Monte Morrone. Offre viste spettacolari sulla valle Peligna e sul massiccio della Majella.",
      difficulty: "hard",
      duration_hours: 6,
      elevation_gain_m: 800,
      season: "summer",
      location: {
        latitude: 42.1678,
        longitude: 14.1234,
        address: "Monte Morrone",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 5,
      title: "Lago di Barrea",
      slug: "lago-barrea",
      description:
        "Percorso circolare intorno al lago di Barrea. Il sentiero offre viste panoramiche sul lago e sulla catena montuosa circostante.",
      difficulty: "easy",
      duration_hours: 3,
      elevation_gain_m: 200,
      season: "autumn",
      location: {
        latitude: 41.7567,
        longitude: 13.989,
        address: "Lago di Barrea",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 6,
      title: "Valle dell'Orfento",
      slug: "valle-orfento",
      description:
        "Escursione nella valle dell'Orfento, caratterizzata da gole profonde e cascate. Il percorso attraversa una delle aree più selvagge del Parco.",
      difficulty: "moderate",
      duration_hours: 5,
      elevation_gain_m: 600,
      season: "summer",
      location: {
        latitude: 42.1456,
        longitude: 14.1678,
        address: "Valle dell'Orfento",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 7,
      title: "Monte Rotondo",
      slug: "monte-rotondo",
      description:
        "Salita al Monte Rotondo attraverso antichi sentieri. Il percorso offre viste panoramiche sulla Majella e sul mare Adriatico.",
      difficulty: "moderate",
      duration_hours: 4,
      elevation_gain_m: 550,
      season: "spring",
      location: {
        latitude: 42.1345,
        longitude: 14.1456,
        address: "Monte Rotondo",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 8,
      title: "Grotta del Cavallone",
      slug: "grotta-cavallone",
      description:
        "Escursione che porta alla famosa Grotta del Cavallone. Il percorso include una visita guidata alla grotta e viste panoramiche sulla valle.",
      difficulty: "easy",
      duration_hours: 3,
      elevation_gain_m: 300,
      season: "summer",
      location: {
        latitude: 42.1234,
        longitude: 14.1567,
        address: "Grotta del Cavallone",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 9,
      title: "Monte Focalone",
      slug: "monte-focalone",
      description:
        "Percorso che porta alla vetta del Monte Focalone. Il sentiero attraversa faggete e offre viste panoramiche sulla Majella.",
      difficulty: "hard",
      duration_hours: 7,
      elevation_gain_m: 1000,
      season: "summer",
      location: {
        latitude: 42.1678,
        longitude: 14.1345,
        address: "Monte Focalone",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 10,
      title: "Sentiero delle Capanne",
      slug: "sentiero-capanne",
      description:
        "Percorso che collega antichi rifugi e capanne in pietra. Il sentiero offre uno spaccato della vita pastorale tradizionale.",
      difficulty: "moderate",
      duration_hours: 5,
      elevation_gain_m: 650,
      season: "autumn",
      location: {
        latitude: 42.1456,
        longitude: 14.1234,
        address: "Altopiano della Majella",
        __component: "common.geo-point",
      },
      locale: "it",
    },
  ];

  for (const trail of trails) {
    const { locale, ...data } = trail;
    await strapi.entityService.create("api::trail.trail", {
      data,
      locale,
    });
  }
}
