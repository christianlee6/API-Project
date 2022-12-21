'use strict';

const { Sequelize } = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = "Spots";
        return queryInterface.bulkInsert(options, [
            {
                ownerId: 1,
                address: "307 Blue Circle",
                city: "Ridgewood",
                state: "New Jersey",
                country: "United States of America",
                lat: 40.98118,
                lng: -74.11363,
                name: "Townhouse in NYC Suburb",
                description: "Cozy townhouse 30 minutes away from New York City with garage.",
                price: 249
            },
            {
                ownerId: 2,
                address: "99 Royal Road",
                city: "Irvine",
                state: "California",
                country: "United States of America",
                lat: 33.68654,
                lng: -117.78170,
                name: "Condo in Irvine",
                description: "Relaxing 2 bedroom apartment in Irvine 20 minutes from Angel Stadium.",
                price: 379
            },
            {
                ownerId: 3,
                address: "101 Bay View",
                city: "Laguna Beach",
                state: "California",
                country: "United States of America",
                lat: 33.58938,
                lng: -117.85940,
                name: "Beachside Townhouse in Laguna Beach",
                description: "Modern townhouse on the beach with great view. ",
                price: 550
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        options.tableName = "Spots";
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            name: { [Op.in]: ["Townhouse in NYC Suburb", "Condo in Irvine", "Beachside Townhouse in Laguna Beach"] }
        }, {});
    }
};

