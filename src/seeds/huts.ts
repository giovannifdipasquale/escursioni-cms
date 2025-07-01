export default async function seedHuts(strapi) {
  console.log("🌱 Seeding huts...");
  await strapi.db.query("api::hut.hut").deleteMany({});
  const huts = [
    {
      id: 1,
      name: "Rifugio Pomilio",
      slug: "rifugio-pomilio",
      description:
        "Situato sul versante orientale della Majella, offre ristoro e pernottamento.",
      location: {
        latitude: 42.12,
        longitude: 14.1,
        address: "Monte Majella",
        __component: "common.geo-point",
      },
      locale: "it",
    },
    {
      id: 2,
      name: "Rifugio Bruno Pomilio",
      slug: "rifugio-bruno-pomilio",
      description: "Punto tappa panoramico lungo la cresta del Blockhaus.",
      location: {
        latitude: 42.0855,
        longitude: 14.101,
        address: "Blockhaus",
        __component: "common.geo-point",
      },
      locale: "it",
    },
  ];
  for (const hut of huts) {
    const { locale, ...data } = hut;
    await strapi.entityService.create("api::hut.hut", {
      data,
      locale,
    });
  }
}
