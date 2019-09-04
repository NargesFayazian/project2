module.exports = function (sequelize, DataTypes) {
    var orders = sequelize.define("orders", {
        store_name: DataTypes.STRING,
        order_location: DataTypes.STRING,
        order_info: DataTypes.STRING,
        size: DataTypes.STRING,
        quantity: DataTypes.STRING
        
    });
    orders.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        orders.belongsTo(models.users, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return orders;
}
