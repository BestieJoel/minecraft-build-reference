import Route from '@ember/routing/route';

import { CategorySubcategoryRouteModel } from 'minecraft-build-reference/routes/category/subcategory';

export default class CategorySubcategoryBuildRoute extends Route {
  model({ build_slug }: { build_slug: string }) {
    let subcategoryModel: CategorySubcategoryRouteModel = this.modelFor('category.subcategory') as CategorySubcategoryRouteModel;
    return {
      category: subcategoryModel.category,
      subcategory: subcategoryModel.subcategory,
      build: subcategoryModel.builds.findBy('slug', build_slug)
    };
  }
}
