module.exports = (sequelize, Sequelize) => {
    const Ledger = sequelize.define("ledger", {
        date: {
            type: Sequelize.DATEONLY
        },
        tag: {
            type: Sequelize.STRING
        },
        memo: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.INTEGER
        },
        isIncome: {
            type: Sequelize.BOOLEAN
        }
    });

    Ledger.associate = function (models){
        Ledger.belongsTo(models.user, {
            foreignKey: "userId",
            targetKey: "id"
        });
    }
    return Ledger;
}