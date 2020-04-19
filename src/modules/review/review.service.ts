import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService } from 'warthog';

import { Review } from './review.model';

@Service('ReviewService')
export class ReviewService extends BaseService<Review> {
	constructor(
		@InjectRepository(Review) protected readonly repository: Repository<Review>
	) {
		super(Review, repository);
	}
}
