const { Model } = require('objection');

class State extends Model {
        static get tableName() {
                return 'state';
        }
        static get relationMappings() {
                return {
                        stateName: {
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Location',
                                join: {
                                        from: 'state.abbreviation',
                                        to: 'location.state'
                                }
                        },
                        stateName: {
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Vehicle',
                                join: {
                                        from: 'state.abbreviation',
                                        to: 'vehicle.licenseState'
                                }
                        },
                        driverState: {
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Driver',
                                join: {
                                        from: 'state.abbreviation',
                                        to: 'driver.licenseState'
                                }
                        }
                }
        }
}
module.exports = State;

