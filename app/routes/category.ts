import Route from '@ember/routing/route';
import { ApplicationRouteModel } from 'minecraft-build-reference/routes/application';
import BuildModel from 'minecraft-build-reference/models/build';

export interface CategoryRouteModel {
  category: string;
  builds: BuildModel[];
  subcategories: string[];
}

export default class CategoryRoute extends Route {
  model({ category_id }: { category_id: string }) {
    let applicationModel: ApplicationRouteModel = this.modelFor('application') as ApplicationRouteModel;
    let builds = applicationModel.builds.filterBy('category', category_id);
    return {
      category: category_id,
      builds,
      subcategories: builds.mapBy('subcategory')
    };
  }
}
