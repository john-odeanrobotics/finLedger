module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        uid : {
            type: Sequelize.STRING(20)
        },
        password: {
            type: Sequelize.STRING(20)
        }
    });
    
    User.associate = function (models) {
        User.hasMany(models.ledger, {
            foreignKey: "userId",
            sourceKey: "id"
        });
    }
    return User;
}


