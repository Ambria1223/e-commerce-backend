const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product]
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

});

router.get('/:id', (req, res) => {
  
  
  router.get('/:id', async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findByPk(categoryId, {
        include: [Product]
      });
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      res.json(category);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
});

router.post('/', (req, res) => {
 

router.post('/', async (req, res) => {
  try {
    const { category_name } = req.body;
    const category = await Category.create({category_name});

    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
});

router.put('/:id', (req, res) => {

 
  
  router.put('/:id', async (req, res) => {
    try {
      const categoryId = req.params.id;
      const { category_name } = req.body;
      const category = await Category.findByPk(categoryId);
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      category.category_name = category_name;
      await category.save();
  
      res.json(category);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  module.exports = router;

});

router.delete('/:id', (req, res) => {


router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    await category.destroy();

    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
});

module.exports = router;
