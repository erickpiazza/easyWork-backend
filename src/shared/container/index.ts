import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import ProvidersRepository from '@modules/providers/infra/typeorm/repositories/ProviderRepository';
import IProvidersRepository from '@modules/providers/repositories/IProviderRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IProvidersRepository>(
  'ProvidersRepository',
  ProvidersRepository,
);
