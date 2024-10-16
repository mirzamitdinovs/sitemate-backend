import { Request, Response } from 'express';
import prisma from '../prisma/client';

export const createIssue = async (req: Request, res: Response) => {
	const { title, description } = req.body;
	try {
		const issue = await prisma.issue.create({
			data: { title, description },
		});
		res.status(201).json(issue);
	} catch (error) {
		res.status(500).json({ error: 'Could not create issue' });
	}
};

export const getIssues = async (req: Request, res: Response) => {
	try {
		const issues = await prisma.issue.findMany();
		res.json(issues);
	} catch (error) {
		res.status(500).json({ error: 'Could not fetch issues' });
	}
};

export const updateIssue = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, description } = req.body;
	try {
		const updatedIssue = await prisma.issue.update({
			where: { id: parseInt(id) },
			data: { title, description },
		});
		res.json(updatedIssue);
	} catch (error) {
		res.status(500).json({ error: 'Could not update issue' });
	}
};

export const deleteIssue = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await prisma.issue.delete({
			where: { id: parseInt(id) },
		});
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: 'Could not delete issue' });
	}
};
