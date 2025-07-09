/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;

      try {
        // Ищем заказ по slug
        const entity = await strapi.entityService.findMany(
          "api::product.product",
          {
            filters: { slug },
            limit: 1,
            populate: "*",
          }
        );

        ctx.body = entity[0] || null;

        return (ctx.body = entity[0] || null);
      } catch (error) {
        strapi.log.error("Error in findOne product:", error);
        return ctx.internalServerError("Something went wrong.");
      }
    },
  })
);
