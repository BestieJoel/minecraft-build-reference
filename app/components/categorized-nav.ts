import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface CategorizedNavArgs {}

export default class CategorizedNavComponent extends Component<CategorizedNavArgs> {
  @tracked isOpen = false;
  @tracked selectedCategory: any = null;

  @action open() {
    this.isOpen = !this.isOpen;
  }

  @action selectCategory(category: any) {
    console.log('selectCategory', category);
    this.selectedCategory = this.selectedCategory === category
      ? null
      : category;
  }
}
