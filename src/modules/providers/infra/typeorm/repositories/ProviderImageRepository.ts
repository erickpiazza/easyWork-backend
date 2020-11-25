import { getRepository, Repository } from 'typeorm';

import IProviderImagesRepository from '@modules/providers/repositories/IProviderImagesRepository';

import ICreateProviderImageDTO from '@modules/providers/dtos/ICreateProviderImageDTO';
import ProviderImagens from '../entities/ProviderImagens';

class ProviderImageRepository implements IProviderImagesRepository {
  private ormRepository: Repository<ProviderImagens>;

  constructor() {
    this.ormRepository = getRepository(ProviderImagens);
  }

  public async findAllById(id: string): Promise<ProviderImagens[] | undefined> {
    const provider = await this.ormRepository.find({ where:{provider_id : id}});
    console.log('provider',provider)

    return provider;
  }

  public async create(
    providerImageData: ICreateProviderImageDTO,
  ): Promise<ProviderImagens> {
    const providerImage = this.ormRepository.create(providerImageData);

    await this.ormRepository.save(providerImage);

    return providerImage;
  }

  public async save(providerImage: ProviderImagens): Promise<ProviderImagens> {
    return this.ormRepository.save(providerImage);
  }
}

export default ProviderImageRepository;
