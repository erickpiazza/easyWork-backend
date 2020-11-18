import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProviderService from '@modules/providers/services/CreateProviderService';

export default class ProvidersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createProvider = container.resolve(CreateProviderService);

    const user = await createProvider.execute({ name, email, password });
    // delete user.password;
    return response.json(user);
  }
}
