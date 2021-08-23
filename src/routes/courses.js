const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create',courseController.create);
router.post('/store',courseController.store);
router.get('/:id/edit',courseController.edit);
router.put('/:id',courseController.update);
router.get('/:slug',courseController.show);
router.delete('/:id',courseController.delete);
router.get('/',courseController.home);

module.exports = router;
