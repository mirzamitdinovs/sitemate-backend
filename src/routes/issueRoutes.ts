import { Router } from 'express';
import {
	createIssue,
	getIssues,
	updateIssue,
	deleteIssue,
} from '../controllers/issueController';

const router = Router();

router.post('/issues', createIssue);
router.get('/issues', getIssues);
router.put('/issues/:id', updateIssue);
router.delete('/issues/:id', deleteIssue);

export default router;
