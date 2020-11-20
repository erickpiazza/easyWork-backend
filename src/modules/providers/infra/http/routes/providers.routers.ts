import { Router } from 'express';

import ProvidersController from '../controllers/ProviderController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const providersRouter = Router();

const providersController = new ProvidersController();

providersRouter.post('/', providersController.create);

providersRouter.patch(
  '/profile',
  ensureAuthenticated,
  providersController.update,
);

export default providersRouter;
