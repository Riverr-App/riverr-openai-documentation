---
title: Finding GTINs
sidebar_position: 1
---

# Finding Global Trade Item Numbers (GTINs)

To create orders for blank products, you need the product's **GTIN**. This identifier ensures you are ordering the correct variant (size, color, style).

## 1. Get Blank Products

Use the `getBlankProducts` query to retrieve a list of available blank products. This query returns `BlankVariantDetail` objects, which contain the **`gtin`** field.

### Query Example

```graphql
query GetBlankProducts {
  getBlankProducts(limit: 10) {
    id
    name
    gtin # <--- This is the value you need
    color
    size
    style
    blankProductId
  }
}
```

### Response Example

```json
{
  "data": {
    "getBlankProducts": [
      {
        "id": "bv_12345",
        "name": "Classic T-Shirt - Black - L",
        "gtin": "00123456789012",
        "color": "Black",
        "size": "L"
      }
    ]
  }
}
```

## 2. Use GTIN to Create Order

Once you have the `gtin`, use it in the **`createOrder`** mutation.

Place the **GTIN** in the **`productId`** field of the `orderItems` list.

### Mutation Example

```graphql
mutation CreateOrder {
  createOrder(
    input: {
      orderNumber: "ORD-1001"
      shopId: "shop_123"
      shippingAddress: {
        name: "John Doe"
        address1: "123 Main St"
        city: "New York"
        country: "US"
      }
      orderItems: [
        {
          productId: "00123456789012" # <--- Pass the GTIN here
          quantity: 1
          variantId: "dummy_variant_id" # Required field, can be dummy if using GTIN in productId
        }
      ]
    }
  ) {
    id
    orderNumber
    status
  }
}
```

> **Note:** When using GTINs in the `productId` field, ensure you strictly identify the item you intend to purchase.
