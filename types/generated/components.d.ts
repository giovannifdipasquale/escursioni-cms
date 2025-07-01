import type { Schema, Struct } from '@strapi/strapi';

export interface CommonGeoPoint extends Struct.ComponentSchema {
  collectionName: 'components_common_geo_point';
  info: {
    description: 'Latitude and longitude';
    displayName: 'Geo Point';
    icon: 'map-pin';
  };
  attributes: {
    latitude: Schema.Attribute.Decimal & Schema.Attribute.Required;
    longitude: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.geo-point': CommonGeoPoint;
    }
  }
}
