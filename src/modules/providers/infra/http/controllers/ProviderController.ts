import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProviderService from '@modules/providers/services/CreateProviderService';
import UpdateProfileProviderService from '@modules/providers/services/UpdateProfileProviderService';

export default class ProvidersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createProvider = container.resolve(CreateProviderService);

    const user = await createProvider.execute({ name, email, password });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const updateProfileProviderService = container.resolve(
      UpdateProfileProviderService,
    );

    const provider = await updateProfileProviderService.execute(
      request.user.id,
      data,
    );

    return response.json(provider);
  }
}
