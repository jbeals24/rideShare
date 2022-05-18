const {Model} = require('objection');

class Authorization extends Model {
        static get tableName(){
                return 'authorization';
        }
}

module.exports = Authorization;


