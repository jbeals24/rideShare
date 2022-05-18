const {Model} = require('objection');
const { State } = require('../models/state.js');
const { VehicleType } = require('../models/vehicleType.js');


class Vehicle extends Model {
        static get tableName(){
                return 'vehicle';
        }
         static get relationMappings() {
                return {
                        stateName: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: State,
                                join: {
                                        from: 'vehicle.licenseState',
                                        to: 'state.abbreviation'
                                }
                        },
                        vType: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: VehicleType,
                                join: {
                                        from: 'vehicle.vehicleTypeId',
                                        to: 'vehicleType.id'
                                }
                        },
                        vRide: {
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Ride',
                                join: {
                                        from: 'vehicle.id',
                                        to: 'ride.vehicleId'
                                }
                        },
                        driverId:{
                                relation: Model.ManyToManyRelation,
                                modelClass: driverId,
                                join:{
                                        from: 'vehicle.id',
                                        through:{
                                                from: 'authorization.vehicleId',
                                                to: 'authorization.driverId'
                                        },
                                        to: 'driver.id'
                                }
                        }
                }
        }
}



module.exports = Vehicle;

