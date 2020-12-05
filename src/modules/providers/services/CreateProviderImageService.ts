import { injectable, inject } from 'tsyringe';
import ProviderImagens from '../infra/typeorm/entities/ProviderImagens';
import IProviderImagesRepository from '../repositories/IProviderImagesRepository';

interface Request {
  user_id: string;
  providerImageFileName: string;
}
@injectable()
class CreateProviderImageService {
  constructor(
    @inject('ProviderImagesRepository')
    private providerImageRepository: IProviderImagesRepository,
  ) {}

  public async execute({
    user_id,
    providerImageFileName,
  }: Request): Promise<ProviderImagens> {
    const providerImage = await this.providerImageRepository.create({
      provider_id: user_id,
      imageUrl: providerImageFileName,
    });

    return providerImage;
  }
}

export default CreateProviderImageService;
