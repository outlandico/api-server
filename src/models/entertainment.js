module.exports = (sequelize, DataTypes) => {
  const Entertainment = sequelize.define('Entertainment', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
  });

  return Entertainment;
};
