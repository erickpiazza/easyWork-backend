import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppErrors';
import { injectable, inject } from 'tsyringe';
import Provider from '../infra/typeorm/entities/Provider';
import IProviderRepository from '../repositories/IProviderRepository';

interface Request {
  user_id: string;
  avatarFileName: string;
}
@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProviderRepository,
  ) {}

  public async execute({
    user_id,
    avatarFileName,
  }: Request): Promise<Provider> {
    const provider = await this.providersRepository.findById(user_id);

    if (!provider) {
      throw new AppError(
        'Apenas usuários autenticados podem alterar o avatar.',
        401,
      );
    }
    if (provider.avatar) {
      const providerAvatarFilePath = path.join(
        uploadConfig.directory,
        provider.avatar,
      );
      const userAvatarFileExists = await fs.promises.stat(
        providerAvatarFilePath,
      );
      if (userAvatarFileExists) {
        await fs.promises.unlink(providerAvatarFilePath);
      }
    }
    provider.avatar = avatarFileName;
    await this.providersRepository.save(provider);

    return provider;
  }
}

export default UpdateUserAvatarService;
