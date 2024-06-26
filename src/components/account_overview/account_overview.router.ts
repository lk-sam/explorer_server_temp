// account_overview.router.ts
import { Router } from 'express';

import getAccountOverview from './account_overview.controller';

const router: Router = Router();

router.get('/account/accountOverview/:address', getAccountOverview);

router.get('/contract/contractOverview/:address', getAccountOverview);

export default router;
