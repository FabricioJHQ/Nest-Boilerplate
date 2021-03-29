import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostShema } from './post.model';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'post', // Collection
      schema: PostShema,
    }], 'post'), // Database
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
