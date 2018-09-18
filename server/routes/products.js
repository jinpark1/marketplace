const express = require('express');

const router = express.Router();

router.get("", (req, res) => {
    const db = req.app.get('db');
    db.products_get().then(documents => {
        res.status(200).json({
            message: "Products fetched successfully",
            products: documents
        });
    });
});

// router.post()
// router.put()
// router.delete()

module.exports = router;