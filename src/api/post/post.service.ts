import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDTO } from './post.dto';
import { IPost } from './post.interface';

@Injectable()
export class PostService {
  constructor(@InjectModel('post') private readonly postModel: Model<IPost>) { }

  public async getPosts(): Promise<IPost[]> {
    return await this.postModel.find();
  }
  public async getPost(id: string): Promise<IPost> {
    return await this.postModel.findById(id);
  }
  public async createPost(DTO: PostDTO): Promise<IPost> {
    return await new this.postModel(DTO).save();
  }
  public async updatePost(id: string, DTO: PostDTO): Promise<IPost> {
    return await this.postModel.findByIdAndUpdate(id, DTO, { new: true });
  }
  public async deletePost(id: string): Promise<IPost> {
    return await this.postModel.findByIdAndDelete(id);
  }
}
