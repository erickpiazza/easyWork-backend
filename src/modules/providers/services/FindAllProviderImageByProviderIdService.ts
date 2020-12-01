import { injectable, inject } from 'tsyringe';
import ProviderImagens from '../infra/typeorm/entities/ProviderImagens';
import IProviderImagesRepository from '../repositories/IProviderImagesRepository';

interface Request {
  user_id: string;
}
@injectable()
class FindAllProviderImageByProviderIdService {
  constructor(
    @inject('ProviderImagesRepository')
    private providerImageRepository: IProviderImagesRepository,
  ) {}

  public async execute({
    user_id,
  }: Request): Promise<ProviderImagens[] | undefined> {
    const providerImage = await this.providerImageRepository.findAllById(
      user_id,
    );

    return providerImage;
  }
}

export default FindAllProviderImageByProviderIdService;
