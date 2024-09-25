import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompilerService } from './compiler/compiler.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, CompilerService]
})
export class AppModule {}
