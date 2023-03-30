// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

const Category = require('./category');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false
  }
});

const Product = require('./product');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: {
    allowNull: false
  }
});


// Products belongToMany Tags (through ProductTag)

const Tag = require('./tag');
const ProductTag = require('./productTag');

Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)

const Product = require('./product');
const ProductTag = require('./productTag');

Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
