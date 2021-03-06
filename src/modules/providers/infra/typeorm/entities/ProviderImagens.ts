import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Provider from '@modules/providers/infra/typeorm/entities/Provider';

import { Expose } from 'class-transformer';

@Entity('providerImages')
class ProviderImagens {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => Provider)
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @Column()
  imageUrl: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @Expose({ name: 'image_url' })
  getImageUrl(): string {
    return `${process.env.APP_API_URL}/files/${this.imageUrl}`;
  }
}

export default ProviderImagens;
