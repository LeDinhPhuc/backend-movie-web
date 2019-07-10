const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = new express.Router();


router.post('/register', async (req, res) => {
  try {
    await new User(req.body).save();
    res.status(201).send({
      error: {
        isError: false,
        errorMessage: ''
      }
    });
  } catch (error) {
    res.status(400).send({

      error: {
        isError: true,
        errorMessage: error.message
      }
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email, password: req.body.password });
    if (!user.length) {
      return res.status(404).send({
        error: {
          isError: true,
          errorMessage: 'Invalid Account'
        }
      });
    }

    res.status(200).send({
      accessToken: jwt.sign({ _id: user[0]._id }, 'secret'),
      error: {
        isError: false,
        errorMessage: ''
      }
    });
  } catch (error) {
    res.status(500).send({
      error: {
        isError: true,
        errorMessage: error.message
      }
    });
  }
});

router.post('/logout', async (req, res) => {
  try {
    const token = req.header('access-token');
    const _id = jwt.verify(token, 'secret');
    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).send({
        error: {
          isError: true,
          errorMessage: 'Invalid Account'
        }
      });
    }
    res.status(200).send({
      error: {
        isError: false
      }
    });
  } catch (error) {
    res.status(400).send({
      error: {
        isError: true,
        errorMessage: error.message
      }
    });
  }
});

router.get('/me', async (req, res) => {
  
});

module.exports = router;