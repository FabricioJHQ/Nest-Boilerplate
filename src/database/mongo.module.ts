import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      connectionName: 'auth', // Database name
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_AUTH_URI'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      connectionName: 'post', // Database name
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_POSTS_URI'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {}
