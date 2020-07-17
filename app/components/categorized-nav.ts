import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface CategorizedNavArgs {}

export default class CategorizedNavComponent extends Component<CategorizedNavArgs> {
  @tracked isOpen = false;

  @action open() {
    this.isOpen = !this.isOpen;
  }
}
