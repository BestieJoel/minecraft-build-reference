import DS from 'ember-data';
import { titleize } from 'minecraft-build-reference/helpers/titleize';

const { Model, attr } = DS;

export default class BuildModel extends Model {
  @attr() path!: string;
  @attr() content!: BuildContent;

  get pathSplit() {
    return this.path.split('/');
  }

  get category() {
    return this.pathSplit[0];
  }

  get subcategory() {
    return this.pathSplit[1];
  }

  get slug() {
    return this.pathSplit[2];
  }

  get name() {
    return titleize([this.slug]);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'build': BuildModel;
  }
}
