import { Router } from 'express';

import ProvidersController from '../controllers/ProviderController';

const providersRouter = Router();

const providersController = new ProvidersController();

providersRouter.post('/', providersController.create);

export default providersRouter;
