'use strict';

const { Sequelize } = require('sequelize');
const { options } = require('../../routes');

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = "Bookings";
        return queryInterface.bulkInsert(options, [
            {
                spotId: 1,
                userId: 1,
                startDate: "12/30/2022",
                endDate: "1/5/20023"
            },
            {
                spotId: 2,
                userId: 2,
                startDate: "1/7/2023",
                endDate: "1/10/2023"
            },
            {
                spotId: 3,
                userId: 3,
                startDate: "1/20/2023",
                endDate: "2/1/2023"
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        options.tableName = "Bookings";
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            spotId: { [Op.in]: [1, 2, 3] }
        }, {});
    }
};
