import { Router } from 'express';

import usersRoutes from '@modules/users/infra/http/routes/users.routers';
import userSessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import providersRouters from '@modules/providers/infra/http/routes/providers.routers';
import providerSessionsRoutes from '@modules/providers/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/user-sessions', userSessionsRoutes);
routes.use('/providers', providersRouters);
routes.use('/provider-sessions', providerSessionsRoutes);

export default routes;
