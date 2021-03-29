import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { PostDTO } from './post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post('/post')
  private async createPosts(@Res() res: any, @Body() DTO: PostDTO) {
    const product = await this.postService.createPost(DTO);
    return res.status(HttpStatus.OK).json(product);
  }

  @Get('/post')
  private async getPosts(@Res() res: any) {
    const products = await this.postService.getPosts();
    return res.status(HttpStatus.OK).json(products);
  }
}
