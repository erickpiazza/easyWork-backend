import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppErrors';

import { injectable, inject } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}
@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('incorrect email/password combination.', 401);
    }
    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('incorrect email/password combination.', 401);
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
