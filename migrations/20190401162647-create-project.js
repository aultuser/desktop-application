/* eslint arrow-body-style: 0 */
/* eslint implicit-arrow-linebreak: 0 */

module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.createTable('Projects', {

    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    externalId: { type: Sequelize.STRING },
    externalUrl: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
    deletedAt: { type: Sequelize.DATE, allowNull: true }

  }),

  down: queryInterface => queryInterface.dropTable('Projects')

};
