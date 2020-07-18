import Route from '@ember/routing/route';
import BuildModel from 'minecraft-build-reference/models/build';
import { titleize } from 'minecraft-build-reference/helpers/titleize';

// TODO move
type NavSchema = NavCategory[];
interface NavCategory {
  label: string;
  value: string;
  subcategories: NavSubcategory[]
};
interface NavSubcategory {
  label: string;
  value: string;
  builds: LabelValue[]
}

export interface ApplicationRouteModel {
  builds: BuildModel[];
  nav: NavSchema;
}

export default class ApplicationRoute extends Route {
  model() {
    let builds = window.data.map(n => this.store.createRecord('build', n));
    return {
      builds,
      nav: this.generateNavSchema(builds)
    }
  }

  generateNavSchema(builds: BuildModel[]): NavSchema {
    let preferedCategoryOrder = [
      'early-game',
      'mid-game',
      'late-game',
      'mechanics'
    ];

    let categories: string[] = builds.mapBy('category').uniq();

    return categories
      .map((category: string) => ({
        label: titleize([category]),
        value: category,
        subcategories: builds
          .filterBy('category', category)
          .mapBy('subcategory')
          .map((subcategory: string) => ({
            label: titleize([subcategory]),
            value: subcategory,
            builds: builds
              .filterBy('category', category)
              .filterBy('subcategory', subcategory)
              .map(build => ({
                label: build.name,
                value: build.slug
              }))
              .sortBy('value')
          }))
          .sortBy('value')
      }))
      .sort((a,b) => {
        if (preferedCategoryOrder.indexOf(a.value) > preferedCategoryOrder.indexOf(b.value)) return 1;
        else return -1;
      });
  }
}
