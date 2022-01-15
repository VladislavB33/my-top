import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {

   @Post('create')
   async create(@Body() dto: Omit<ReviewModel, 'id'>){

   }
   
   @Delete(':id')
   async delete(@Param('id') id: string){

   }

   @Get('byProduct/:productID')
   async getByProduct(@Param('productID') productID: string){
      
   }
}
