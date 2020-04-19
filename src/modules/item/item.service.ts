import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService } from 'warthog';

import { Item } from './item.model';

@Service('ItemService')
export class ItemService extends BaseService<Item> {
	constructor(@InjectRepository(Item) protected readonly repository: Repository<Item>) {
		super(Item, repository);
	}
}
