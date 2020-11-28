import ProviderImage from '../infra/typeorm/entities/ProviderImagens';
import ICreateProviderImageDTO from '../dtos/ICreateProviderImageDTO';

export default interface IProviderImageRepository {
  findAllById(id: string): Promise<ProviderImage[] | undefined>;
  create(data: ICreateProviderImageDTO): Promise<ProviderImage>;
  save(providerImage: ProviderImage): Promise<ProviderImage>;
}
