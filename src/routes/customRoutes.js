const express = require('express');

const router = new express.Router();

// GET /bfhl route
router.get('/bfhl', (req, res) => {
    try {
        res.status(200).json({ operation_code: 1 });
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
});

// POST /bfhl route
router.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "Ezhill_Ragesh_17062003";
    const email = "ezhillragesh.kt2021@vitstudent.ac.in";
    const roll_number = "21BBS0100";

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false });
    }

    const numbers = [];
    const alphabets = [];
    let highest_alphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item >= 'a' && item > highest_alphabet) {
                highest_alphabet = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet: highest_alphabet ? [highest_alphabet] : []
    });
});

module.exports = router;
