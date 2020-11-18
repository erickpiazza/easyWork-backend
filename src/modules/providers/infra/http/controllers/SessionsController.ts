import { Request, Response } from 'express';

import AuthenticateProviderService from '@modules/providers/services/AuthenticateProviderService';
import { container } from 'tsyringe';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateProvider = container.resolve(AuthenticateProviderService);

    const { provider, token } = await authenticateProvider.execute({
      email,
      password,
    });

    return response.json({ provider, token });
  }
}
