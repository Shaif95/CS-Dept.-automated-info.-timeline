import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { emailAddress, password } = req.body
  const user = await User.findOne({ emailAddress })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

//@description register a new user
//@route POST /api/users/register
//@access public
export const resisterUser = asyncHandler(async (req, res) => {
  const { emailAddress, firstName, lastName, password } = req.body

  const userExists = await User.findOne({ emailAddress })
  
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  
  const user = await User.create({
    firstName,
    lastName,
    emailAddress,
    password,
  })
  
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//@description get user profile
//@route POST /api/users/profile
//@access private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
