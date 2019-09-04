module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        frist_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        phone: DataTypes.TEXT,
        Email:DataTypes.TEXT,
        password: DataTypes.TEXT

    });
    users.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        users.hasMany(models.orders, {
          onDelete: "cascade"
        });
      };
    return users;
}