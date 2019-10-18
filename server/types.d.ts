import { Request, RequestHandler } from 'express';

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined; }
}

export interface RouteHandlerInterface extends PropertyDescriptor {
  value?: RequestHandler;
}
