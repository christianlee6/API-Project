'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        review: "Owner was not friendly and didn't communicate well. Home was dirty.",
        stars: 1
      },
      {
        spotId: 2,
        userId: 2,
        review: "Relaxing and comfortable stay. Very welcoming and hospitable.",
        stars: 4
      },
      {
        spotId: 3,
        userId: 3,
        review: "Beautiful view as advertised.",
        stars: 5
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
