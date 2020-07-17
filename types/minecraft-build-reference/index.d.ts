import Ember from 'ember';

declare global {
  // prototype/window extensions
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  interface Window {
    data: Build[]
  }

  // Types
  type BuildSize = [number, number, number];
  type Edition = 'java' | 'bedrock';

  // General Interfaces
  interface LabelValue {
    label: string;
    value: any;
  }

  // Build Interfaces
  interface Build {
    id: string;
    path: string;
    content: BuildContent;
  }

  interface BuildContent {
    title: string;
    editions: Edition[];
    versions: string[];
    size: BuildSize;
    materials: LabelValue[];
  }
}

export {};
