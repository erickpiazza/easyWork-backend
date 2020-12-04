import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProviderService from '@modules/providers/services/CreateProviderService';
import UpdateProfileProviderService from '@modules/providers/services/UpdateProfileProviderService';
import { classToClass } from 'class-transformer';
import FindProviderService from '@modules/providers/services/FindProviderServider';
import FindByIdProviderService from '@modules/providers/services/FindByIdProviderServider';

export default class ProvidersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createProvider = container.resolve(CreateProviderService);

    const provider = await createProvider.execute({ name, email, password });

    return response.json(classToClass(provider));
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

    return response.json(classToClass(provider));
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const findProvider = container.resolve(FindProviderService);

    const provider = await findProvider.execute();

    return response.json(classToClass(provider));
  }

  public async getById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const findByIdProvider = container.resolve(FindByIdProviderService);

    const provider = await findByIdProvider.execute(id);

    return response.json(classToClass(provider));
  }
}
