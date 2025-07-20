import seedTrails from "./seeds/trails";
import seedHuts from "./seeds/huts";

// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    console.log("🔄 Starting bootstrap process...");
    console.log("🌍 Current NODE_ENV:", process.env.NODE_ENV);

    if (process.env.NODE_ENV === "development") {
      await seedTrails(strapi);
      await seedHuts(strapi);
    } else {
      console.log("⏭️ Skipping seed process (not in development mode)");
    }
  },
};
