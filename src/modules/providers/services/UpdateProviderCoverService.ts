import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppErrors';
import { injectable, inject } from 'tsyringe';
import Provider from '../infra/typeorm/entities/Provider';
import IProviderRepository from '../repositories/IProviderRepository';

interface Request {
  user_id: string;
  coverFileName: string;
}
@injectable()
class UpdateProviderCoverService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProviderRepository,
  ) {}

  public async execute({ user_id, coverFileName }: Request): Promise<Provider> {
    const provider = await this.providersRepository.findById(user_id);

    if (!provider) {
      throw new AppError(
        'Apenas usuários autenticados podem alterar o avatar.',
        401,
      );
    }
    if (provider.cover) {
      const providerCoverFilePath = path.join(
        uploadConfig.directory,
        provider.cover,
      );
      const providerCoverFileExists = await fs.promises.stat(
        providerCoverFilePath,
      );
      if (providerCoverFileExists) {
        await fs.promises.unlink(providerCoverFilePath);
      }
    }
    provider.cover = coverFileName;
    await this.providersRepository.save(provider);

    return provider;
  }
}

export default UpdateProviderCoverService;
