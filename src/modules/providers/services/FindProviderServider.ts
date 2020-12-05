import { injectable, inject } from 'tsyringe';
import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProviderRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}
@injectable()
class FindProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute(): Promise<Provider[] | undefined> {
    const providers = await this.providersRepository.find();

    return providers;
  }
}

export default FindProviderService;
