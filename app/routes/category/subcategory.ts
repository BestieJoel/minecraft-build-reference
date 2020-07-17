import Route from '@ember/routing/route';
import { CategoryRouteModel } from 'minecraft-build-reference/routes/category';
import BuildModel from 'minecraft-build-reference/models/build';

export interface CategorySubcategoryRouteModel {
  category: string;
  subcategory: string;
  builds: BuildModel[];
}

export default class CategorySubcategoryRoute extends Route {
  model({ subcategory_id }: { subcategory_id: string }) {
    let categoryModel: CategoryRouteModel = this.modelFor('category') as CategoryRouteModel;
    return {
      category: categoryModel.category,
      subcategory: subcategory_id,
      builds: categoryModel.builds.filterBy('subcategory', subcategory_id)
    };
  }
}
