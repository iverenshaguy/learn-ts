import { MetadataKeys } from '../enums';

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: any, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  }
}
