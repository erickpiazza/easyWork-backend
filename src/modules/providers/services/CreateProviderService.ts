import { hash } from 'bcryptjs';
import AppError from '@shared/errors/AppErrors';
import { injectable, inject } from 'tsyringe';
import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProviderRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}
@injectable()
class CreateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute({ name, email, password }: Request): Promise<Provider> {
    const checkUserExists = await this.providersRepository.findByEmail(email);
    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.providersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateProviderService;
