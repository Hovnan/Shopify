import Controller from '@ember/controller';

export default Controller.extend({
  showInputs: false,
  actions: {
    createShopProduct() {
      this.set('showInputs', true);
    },
    saveShopProduct() {
      let productName = this.get('productName');
      let productQuantity = this.get('productQuantity');
      let productPrice = this.get('productPrice');
      let newRecord = this.get('store').createRecord('product', {
        name: productName,
        quantity: productQuantity,
        price: productPrice,
        shop: this.get('model')
      });
      newRecord.save();
      this.set('showInputs', false);
    },
    // showShop(id) {
    //   console.log('id====', id);
    //   this.store.findRecord('shop', id).then(shop => {
    //     alert(shop.get('name') + ' ' + shop.get('id'));
    //   });
    // },
    updateShopProduct(productId) {
      return productId;
      // let updatedName = this.get('updatedName');
      // let shop = this.get('model').findBy('id', id);
      // shop.set('name', updatedName);
      // shop.save();
    },
    destroyShopProduct(productId) {
      // let destroyId = this.get('destroyId');
      // let product = this.get('model').findBy('id', productId);
      this.store.findRecord('product', productId).then(product => {
        // alert(shop.get('name') + ' ' + shop.get('id'));
        product.destroyRecord();
      });
    }
  }
});

