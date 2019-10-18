import { Response, NextFunction } from 'express';
import { RequestWithBody } from '../../types';

export function requireAuth(req: RequestWithBody, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
};
