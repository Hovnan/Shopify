import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    quantity: DS.attr('string'),
    price: DS.attr('string'),
    shop: DS.belongsTo('shop')
});
