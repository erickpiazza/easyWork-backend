import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ProvidersController from '../controllers/ProviderController';
import ProviderAvatarController from '../controllers/ProviderAvatarController';
import ProviderCoverController from '../controllers/ProviderCoverController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const providersRouter = Router();
const upload = multer(uploadConfig);

const providersController = new ProvidersController();
const providerAvatarController = new ProviderAvatarController();
const providerCoverController = new ProviderCoverController();

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

providersRouter.patch(
  '/cover',
  ensureAuthenticated,
  upload.single('cover'),
  providerCoverController.update,
);

export default providersRouter;
