const {Model} = require('objection');
const {User} = require('../models/user.js');
const {knex} = require('../db.js');
const {Ride} = require('../models/ride.js');

class Passenger extends Model {
        static get tableName(){
                return 'passenger';
        }
        static get relationMappings(){
                return{
                        User: {
                                relation: Model.HasManyRelation,
                                modelClass: User,
                                join:{
                                        from: 'passenger.userId',
                                        to: 'user.id',
                                }
                },

                        Ride:{
                                relation: Model.BelongsToOneRelation,
                                modelClass: Ride,
                                join:{
                                        from: 'passenger.rideId',
                                        to: 'ride.id',
                                }
                }
        }
        }
}

module.exports = Passenger;

