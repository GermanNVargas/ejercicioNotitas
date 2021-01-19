module.exports = function(sequelize, dataTypes) {
  let alias = "Notas";
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
      },
      title: {
          type: dataTypes.STRING,
          notNull: true
      },
      description: {
          type: dataTypes.STRING,
          notNull: true
      }
  };
  let config = {
      tableName: 'notas',
      timestamps: false,
      underscored: true
  }

  const Notas = sequelize.define(alias, cols, config);  
  return Notas
} 