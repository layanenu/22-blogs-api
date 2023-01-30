const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');
const postRouter = require('./post.router');

module.exports = {
  userRouter,
  loginRouter,
  categoriesRouter,
  postRouter,
};