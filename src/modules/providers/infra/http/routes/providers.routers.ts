import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ProvidersController from '../controllers/ProviderController';
import ProviderAvatarController from '../controllers/ProviderAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const providersRouter = Router();
const upload = multer(uploadConfig);

const providersController = new ProvidersController();
const providerAvatarController = new ProviderAvatarController();

providersRouter.post('/', providersController.create);

providersRouter.patch(
  '/profile',
  ensureAuthenticated,
  providersController.update,
);
providersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  providerAvatarController.update,
);

export default providersRouter;
