import type { Schema, Struct } from '@strapi/strapi';

export interface CharacteristicCharacteristic extends Struct.ComponentSchema {
  collectionName: 'components_characteristic_characteristics';
  info: {
    displayName: 'Characteristic';
    icon: 'apps';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'characteristic.characteristic': CharacteristicCharacteristic;
    }
  }
}
