import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService } from 'warthog';

import { CollectionItem } from './collection-item.model';

@Service('CollectionItemService')
export class CollectionItemService extends BaseService<CollectionItem> {
  constructor(
    @InjectRepository(CollectionItem)
    protected readonly repository: Repository<CollectionItem>
  ) {
    super(CollectionItem, repository);
  }

  async getWithItemDetails() {}
}
