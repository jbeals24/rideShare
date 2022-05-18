const {Model} = require('objection');
const {knex} = require('../db.js');
//const {User} = require('../models/user.js');
const {Vehicle} = require('../models/vehicle.js');
const {Location} = require('../models/location.js');
const {Driver} = require('../models/driver.js');

class Ride extends Model {
        static get tableName(){
                return 'ride';
        }
         static get relationMappings() {

                return {
                        vRide: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: Vehicle,
                                join: {
                                        from: 'ride.vehicleId',
                                        to: 'vehicle.id'
                                }
                        },
                        fromLocation: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: Location,
                                join: {
                                        from: 'ride.fromLocationId',
                                        to: 'location.id'
                                }
                        },
                        toLocation: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: Location,
                                join: {
                                        from: 'ride.toLocationId',
                                        to: 'location.id'
                                }
                        },
                        driversId: {
                                relation: Model.ManyToManyRelation,
                                modelClass: Driver,
                                join:{
                                        from: 'ride.id',
                                        through:{
                                                from: 'drivers.rideId',
                                                to: 'drivers.driverId'
                                        },
                                        to: 'driver.id'
                                }
                        },
                        rideUser: {
                                relataion:Model.ManyToManyRelation,
                                modelClass: Driver,
                                join:{
                                        from: 'ride.id',
                                        through:{
                                                from: 'passenger.rideId',
                                                to: 'passenger.userId'
                                        },
                                        to: 'user.id'
                                }
                        }
                }
        }
}

module.exports = Ride;
