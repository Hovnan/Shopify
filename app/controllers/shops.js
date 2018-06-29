import Controller from '@ember/controller';

export default Controller.extend({
  showEditInput: '',
  actions: {
    createShop() {
      let newShop = this.get('newShop');
      let newRecord = this.store.createRecord('shop', {
        name: newShop
      });
      newRecord.save();
    },
    showShop(id) {
      this.store.findRecord('shop', id).then(shop => {
        alert(shop.get('name') + ' ' + shop.get('id'));
    });
    },
    editShop(id) {
      this.set('showEditInput', id);
    },
    updateShop(model) {
      this.store.findRecord('shop', model.id).then((shop) => {
        shop.get('name');

        shop.set('name', model.name);

        shop.save();

        this.set('showEditInput', false);
      });
    },
    destroyShop(id) {
      // let destroyId = this.get('destroyId');
      let shop = this.get('model').findBy('id', id);
      shop.destroyRecord();
    }
  }
});

