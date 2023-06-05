import { Router } from 'express';
import rootRouter from './rootRouter';
import userRouter from './userRouter';
import projectRouter from './projectRouter';
import commentRouter from './commentRouter';
import bookmarkRouter from './bookmarkRouter';
import stackRouter from './stackRouter';

const router = Router();

router.use('/v1', rootRouter);

router.use('/v1/users', userRouter);

router.use('/v1/projects', projectRouter);

router.use('/v1/comments', commentRouter);

router.use('/v1/bookmarks', bookmarkRouter);

router.use('/v1/stacks', stackRouter);

export default router;
