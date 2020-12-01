import { Request, Response, Express } from 'express';
import { container } from 'tsyringe';
import CreateProviderImageService from '@modules/providers/services/CreateProviderImageService';
import FindAllProviderImageByProviderIdService from '@modules/providers/services/FindAllProviderImageByProviderIdService';
import { classToClass } from 'class-transformer';

export default class ProviderImageController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createProviderImageService = container.resolve(
      CreateProviderImageService,
    );

    (request.files as Express.Multer.File[]).map(async item => {
      await createProviderImageService.execute({
        user_id: request.user.id,
        providerImageFileName: item.filename,
      });
    });

    return response.json({ ok: true });
  }

  public async findAllByid(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const getProviderImageService = container.resolve(
      FindAllProviderImageByProviderIdService,
    );

    const providerImages = await getProviderImageService.execute({
      user_id: request.user.id,
    });

    return response.json(classToClass(providerImages));
  }
}
