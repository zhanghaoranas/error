'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		const { UUID } = Sequelize.DataTypes;
		await queryInterface.createTable('err_message', {
			id: {
				type: UUID,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
				comment: '错误信息的uuid',
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.dropTable('err_message');
	},
};
