'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("ledgers", [
            {
                date: "2021-09-01",
                tag: "용돈",
                memo: "매월 1일 지급",
                amount: 60000,
                isIncome: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                date: "2021-09-11",
                tag: "커피",
                memo: "모닝커피",
                amount: 1500,
                isIncome: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                date: "2021-09-11",
                tag: "커피",
                memo: "점심먹고 커피",
                amount: 3000,
                isIncome: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                date: "2021-09-10",
                tag: "기타",
                memo: "소매넣기",
                amount: 100000,
                isIncome: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2
            },
            {
                date: "2021-09-11",
                tag: "기타",
                memo: "소매치기",
                amount: 50000,
                isIncome: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("ledgers", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
