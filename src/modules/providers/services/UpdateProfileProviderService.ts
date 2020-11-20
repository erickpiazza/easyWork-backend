import AppError from '@shared/errors/AppErrors';
import { injectable, inject } from 'tsyringe';
import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProviderRepository';

interface Profile {
  name: string;
  about: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  uf: string;
  zipcode: string;
  longitude: number;
  latitude: number;
}

@injectable()
class UpdateProfileProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute(
    provider_id: string,
    profile: Profile,
  ): Promise<Provider | undefined> {
    const provider = await this.providersRepository.findById(provider_id);

    if (!provider) {
      throw new AppError(
        'Apenas provdores autenticados podem alterar o perfil',
        401,
      );
    }

    provider.name = profile.name;
    provider.about = profile.about;
    provider.phone = profile.phone;
    provider.street = profile.street;
    provider.city = profile.city;
    provider.zipcode = profile.zipcode;
    provider.uf = profile.uf;
    provider.state = profile.state;
    provider.latitude = profile.latitude;
    provider.longitude = profile.longitude;

    await this.providersRepository.save(provider);

    return provider;
  }
}

export default UpdateProfileProviderService;
