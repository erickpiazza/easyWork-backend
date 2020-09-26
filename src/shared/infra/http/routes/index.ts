import { Router } from 'express';

import usersRoutes from '@modules/users/infra/http/routes/users.routers';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
