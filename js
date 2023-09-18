window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'add_to_cart', 
  currency: 'string',
  value: num,
  ecommerce: {                          
    items: [{
      item_name: 'string',
      item_id: 'string',
      price: num,
      discount: num,
      item_category: 'string',
      item_category2: 'string'
    }]
  }
});
