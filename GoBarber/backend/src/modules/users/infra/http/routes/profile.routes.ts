import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticaded from '../middleware/ensureAuthenticated';

const profileRouter = Router();
const profilecontroller = new ProfileController();

profileRouter.use(ensureAuthenticaded);

profileRouter.get('/', profilecontroller.show);
profileRouter.put('/', profilecontroller.update);

export default profileRouter;
