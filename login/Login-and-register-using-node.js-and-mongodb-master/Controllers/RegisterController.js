const Fields = require('./../Models/registerModel');
const catchAsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError'); // Make sure to import this

exports.registerUser = catchAsync(async (req, res, next) => {
    const { email, password, passwordConfirm } = req.body;

    // Check if the user already exists
    const existingUser = await Fields.findOne({ email });

    if (existingUser) {
        return next(new appError('User already exists. Please log in.', 400));
    }

    const newUser = await Fields.create({
        email,
        password,
        passwordConfirm
    });

    res.status(201).json({
        status: 'success',
        message: 'Registration successful',
        user: newUser
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new appError('Please provide email and password', 400));
    }

    const user = await Fields.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new appError('Invalid email or password', 401));
    }

    res.status(200).json({
        status: 'success',
        message: 'Logged in successfully',
        user
    });
});
