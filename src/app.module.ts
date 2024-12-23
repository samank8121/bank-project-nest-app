import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AccountModule,
    CommonModule,
    AuthModule,
  ],
})
export class AppModule {}
