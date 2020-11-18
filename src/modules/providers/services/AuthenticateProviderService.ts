import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppErrors';

import { injectable, inject } from 'tsyringe';
import Provider from '../infra/typeorm/entities/Provider';
import IProviderRepository from '../repositories/IProviderRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  provider: Provider;
  token: string;
}
@injectable()
class AuthenticateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProviderRepository,
  ) {}

  public async execute({ email, password }: Request): Promise<Response> {
    const provider = await this.providersRepository.findByEmail(email);

    if (!provider) {
      throw new AppError('incorrect email/password combination.', 401);
    }
    const passwordMatched = await compare(password, provider.password);

    if (!passwordMatched) {
      throw new AppError('incorrect email/password combination.', 401);
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: provider.id,
      expiresIn,
    });

    return { provider, token };
  }
}

export default AuthenticateProviderService;
