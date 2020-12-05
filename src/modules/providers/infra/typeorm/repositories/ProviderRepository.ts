import { getRepository, Repository } from 'typeorm';

import IProvidersRepository from '@modules/providers/repositories/IProviderRepository';
import ICreateProviderDTO from '@modules/providers/dtos/ICreateProviderDTO';

import Provider from '../entities/Provider';

class ProvidersRepository implements IProvidersRepository {
  private ormRepository: Repository<Provider>;

  constructor() {
    this.ormRepository = getRepository(Provider);
  }

  public async findById(id: string): Promise<Provider | undefined> {
    const provider = await this.ormRepository.findOne(id);

    return provider;
  }

  public async findByEmail(email: string): Promise<Provider | undefined> {
    const provider = await this.ormRepository.findOne({ where: { email } });

    return provider;
  }

  public async create(providerData: ICreateProviderDTO): Promise<Provider> {
    const appointment = this.ormRepository.create(providerData);

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async save(provider: Provider): Promise<Provider> {
    return this.ormRepository.save(provider);
  }

  public async findByDate(date: Date): Promise<Provider | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async find(): Promise<Provider[] | undefined> {
    const findAppointment = await this.ormRepository.find();

    return findAppointment;
  }
}

export default ProvidersRepository;
