const {Model} = require('objection');

class Drivers extends Model {
        static get tableName(){
                return 'drivers';
        }
}
module.exports = Drivers;

