export enum TopLevelCategory{
   Laptops,
   Smartphones,
   Game_Consoles,
   Others

}

export class TopPageModel {
   firstLevelCategory: TopLevelCategory;
   secondCategory: string;
   title: string;
   category: string;
   advantages: {
      title: string;
      description: string;
   }[];
   seoText: string;
   tagsTitle: string;
   tags: string[];

}
