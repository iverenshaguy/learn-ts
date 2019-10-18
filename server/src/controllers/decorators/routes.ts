import { Methods, MetadataKeys } from '../enums';
import { RouteHandlerInterface } from '../../../types';

function routeBinder(method: Methods) {
  return function(path: string) {
    return function(target: any, key: any, desc: RouteHandlerInterface) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    }
  }
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
