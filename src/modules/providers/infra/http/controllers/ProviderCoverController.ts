import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateProviderCoverService from '@modules/providers/services/UpdateProviderCoverService';

export default class ProviderCoverController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateProviderCoverService = container.resolve(
      UpdateProviderCoverService,
    );
    const provider = await updateProviderCoverService.execute({
      user_id: request.user.id,
      coverFileName: request.file.filename,
    });

    // delete user.password;

    return response.json(provider);
  }
}
