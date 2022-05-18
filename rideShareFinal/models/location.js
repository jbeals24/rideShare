const { Model } = require('objection');
const { State } = require('../models/state.js');

class Location extends Model {
        static get tableName() {
                return 'location';
        }
        static get relationMappings() {
                return {
                        stateName: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: State,
                                join: {
                                        from: 'location.state',
                                        to: 'state.abbreviation'
                                }
                        },
                        fromLocation:{
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Location',
                                join:{
                                        from: 'location.id',
                                        to: 'ride.fromLocationId',
                                }
                        },
                        toLocation:{
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Location',
                                join:{
                                        from: 'location.id',
                                        to: 'ride.toLocationId',
                                }
                        }
                }
        }
}


module.exports = Location;

