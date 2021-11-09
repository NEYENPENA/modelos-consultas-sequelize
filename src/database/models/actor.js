module.exports = (sequelize, DataTypes) => {
    const actor = sequelize.define(
        'actors',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,                
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,                
            },
            rating: {
                type: DataTypes.INTEGER,
                unique: true
            }
        },
        {
            timestamps: false
        }
    )    
    return actor;
}
