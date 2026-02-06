import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/riverr-openai-documentation/__docusaurus/debug',
    component: ComponentCreator('/riverr-openai-documentation/__docusaurus/debug', 'e03'),
    exact: true
  },
  {
    path: '/riverr-openai-documentation/__docusaurus/debug/config',
    component: ComponentCreator('/riverr-openai-documentation/__docusaurus/debug/config', '294'),
    exact: true
  },
  {
    path: '/riverr-openai-documentation/__docusaurus/debug/content',
    component: ComponentCreator('/riverr-openai-documentation/__docusaurus/debug/content', 'd38'),
    exact: true
  },
  {
    path: '/riverr-openai-documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/riverr-openai-documentation/__docusaurus/debug/globalData', '969'),
    exact: true
  },
  {
    path: '/riverr-openai-documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/riverr-openai-documentation/__docusaurus/debug/metadata', '765'),
    exact: true
  },
  {
    path: '/riverr-openai-documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/riverr-openai-documentation/__docusaurus/debug/registry', '3f2'),
    exact: true
  },
  {
    path: '/riverr-openai-documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/riverr-openai-documentation/__docusaurus/debug/routes', '0b0'),
    exact: true
  },
  {
    path: '/riverr-openai-documentation/docs',
    component: ComponentCreator('/riverr-openai-documentation/docs', '2e0'),
    routes: [
      {
        path: '/riverr-openai-documentation/docs',
        component: ComponentCreator('/riverr-openai-documentation/docs', '1d3'),
        routes: [
          {
            path: '/riverr-openai-documentation/docs',
            component: ComponentCreator('/riverr-openai-documentation/docs', '2e9'),
            routes: [
              {
                path: '/riverr-openai-documentation/docs/reference',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference', 'f08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/directives/include',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/directives/include', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/directives/skip',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/directives/skip', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/create-order',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/create-order', 'fc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/create-product',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/create-product', 'c18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/create-shop',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/create-shop', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/delete-product',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/delete-product', '152'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/delete-shop',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/delete-shop', '59c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/update-order',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/update-order', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/update-product',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/update-product', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/mutations/update-shop',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/mutations/update-shop', '3be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-all-shops',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-all-shops', '7a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-blank-products',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-blank-products', '98a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-order',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-order', '53f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-orders',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-orders', 'b9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-product',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-product', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-products',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-products', '464'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-shipment',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-shipment', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-shipments',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-shipments', 'b32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/operations/queries/get-shop',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/operations/queries/get-shop', '96c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/directives/deprecated',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/directives/deprecated', 'ed4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/directives/one-of',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/directives/one-of', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/directives/specified-by',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/directives/specified-by', 'fa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/enums/filter-id',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/enums/filter-id', 'dac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/enums/mapped',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/enums/mapped', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/enums/order-direction',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/enums/order-direction', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/address-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/address-input', 'df0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/batch-rule-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/batch-rule-input', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/filter-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/filter-input', 'aaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/image-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/image-input', '047'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/location-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/location-input', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/order-create-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/order-create-input', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/order-item-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/order-item-input', '0dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/order-update-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/order-update-input', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/product-create-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/product-create-input', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/product-update-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/product-update-input', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/shipping-price-country',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/shipping-price-country', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/shipping-price-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/shipping-price-input', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/shipping-speed-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/shipping-speed-input', '97b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/shop-create-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/shop-create-input', 'a2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/shop-update-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/shop-update-input', 'c0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/timestamp-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/timestamp-input', '57b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/variant-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/variant-input', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/variant-mapping-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/variant-mapping-input', '135'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/inputs/variant-property-input',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/inputs/variant-property-input', 'c3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/address',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/address', 'ec6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/batch',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/batch', 'e6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/batch-item',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/batch-item', '7b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/batch-rule',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/batch-rule', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/blank-product',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/blank-product', '982'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/blank-product-category',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/blank-product-category', '202'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/blank-product-category-with-collection',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/blank-product-category-with-collection', '6ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/blank-variant',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/blank-variant', '502'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/blank-variant-detail',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/blank-variant-detail', 'cfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/blank-variant-image',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/blank-variant-image', '753'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/filter',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/filter', 'ceb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/image',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/image', '4bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/inventory-variant',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/inventory-variant', 'd22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/item',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/item', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/item-with-inventory',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/item-with-inventory', '59c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/link',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/link', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/location',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/location', '827'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/order',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/order', '7c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/order-item',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/order-item', '025'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/product',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/product', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/selected-shipping-speed',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/selected-shipping-speed', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shipment',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shipment', '5b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shipping-price',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shipping-price', '487'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shipping-price-country-output',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shipping-price-country-output', '48c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shipping-price-output',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shipping-price-output', '884'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shipping-service',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shipping-service', '3d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shipping-speed',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shipping-speed', '084'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shipping-upgrade',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shipping-upgrade', '2bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/shop',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/shop', '7f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/stock',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/stock', '66e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/timestamp',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/timestamp', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/user',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/user', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/variant',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/variant', 'fdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/variant-mapping',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/variant-mapping', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/objects/variant-property',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/objects/variant-property', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/scalars/boolean',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/scalars/boolean', '74a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/scalars/float',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/scalars/float', '354'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/scalars/id',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/scalars/id', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/scalars/int',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/scalars/int', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverr-openai-documentation/docs/reference/types/scalars/string',
                component: ComponentCreator('/riverr-openai-documentation/docs/reference/types/scalars/string', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
