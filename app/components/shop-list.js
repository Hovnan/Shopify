import Component from '@ember/component';

export default Component.extend({
  actions: {
    createShop() {
      console.log('mumumumu');
      let newShop = this.get('newShop');
      let newRecord = this.store.createRecord('shop', {
        name: newShop
      });
      newRecord.save();
    },
    //http://www.amielmartin.com/blog/2017/05/05/how-ember-data-loads-relationships-part-1/
    showShop(id) {
      console.log('id====', id);
      this.store.findRecord('shop', id).then(shop => {
        alert(shop.get('name') + ' ' + shop.get('id'));
    });
    },
    updateShop(id) {
      let updatedName = this.get('updatedName');
      let shop = this.get('model').findBy('id', id);
      shop.set('name', updatedName);
      shop.save();
    },
    destroyShop(id) {
      // let destroyId = this.get('destroyId');
      let shop = this.get('model').findBy('id', id);
      shop.destroyRecord();
    }
  }
});
