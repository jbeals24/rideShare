const {Model} = require('objection');

class VehicleType extends Model {
        static get tableName(){
                return 'vehicleType';
        }
        static get relationMappings() {
                return {
                        vType: {
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/VehicleType',
                                join: {
                                        from: 'vehicleType.id',
                                        to: 'vehicle.vehicleTypeId'
                                }
                        }
                }
        }

}

module.exports = VehicleType;

