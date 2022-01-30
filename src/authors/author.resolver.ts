import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from './models/author.model';

@Resolver((of) => Author)
export class AuthorsResolver {
  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return {
      id,
      firstName: 'テスト',
      lastName: '太郎',
      posts: this.posts,
    };
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return [
      {
        id: 1,
        title: 'テスト',
        votes: 14,
      },
    ];
  }
}
