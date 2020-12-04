import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ProvidersController from '../controllers/ProviderController';
import ProviderAvatarController from '../controllers/ProviderAvatarController';
import ProviderCoverController from '../controllers/ProviderCoverController';
import ProviderImageController from '../controllers/ProviderImageController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const providersRouter = Router();
const upload = multer(uploadConfig);

const providersController = new ProvidersController();
const providerAvatarController = new ProviderAvatarController();
const providerCoverController = new ProviderCoverController();
const providerImageController = new ProviderImageController();

providersRouter.post('/', providersController.create);

providersRouter.get('/', ensureAuthenticated, providersController.get);
providersRouter.get(
  '/provider-id/:id',
  ensureAuthenticated,
  providersController.getById,
);

providersRouter.post(
  '/imagens',
  ensureAuthenticated,
  upload.array('images'),
  providerImageController.create,
);

providersRouter.get(
  '/imagens',
  ensureAuthenticated,
  providerImageController.findAllByUserLoged,
);

providersRouter.get(
  '/imagens/:id',
  ensureAuthenticated,
  providerImageController.findAllByid,
);

providersRouter.put(
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
