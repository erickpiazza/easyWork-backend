import { injectable, inject } from 'tsyringe';
import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProviderRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}
@injectable()
class FindByIdProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute(id: string): Promise<Provider | undefined> {
    const providers = await this.providersRepository.findById(id);

    return providers;
  }
}

export default FindByIdProviderService;
