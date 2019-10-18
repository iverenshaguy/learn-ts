import { Request, Response } from 'express';
import { get, controller, use } from './decorators';
import { requireAuth } from '../middlewares/requireAuth';

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div> You are logged in</div>
        <a href="/auth/logout">Logout</a>
      `);
    } else {
      res.send(`
        <div> You are not logged in</div>
        <a href="/auth/login">Login</a>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  };
}
