import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateProviderAvatarService from '@modules/providers/services/UpdateProviderAvatarService';
import { classToClass } from 'class-transformer';

export default class ProviderAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateProviderAvatarService = container.resolve(
      UpdateProviderAvatarService,
    );
    const provider = await updateProviderAvatarService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    return response.json(classToClass(provider));
  }
}
