const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.TOKEN);
		const userId = decodedToken.userId;
		const isVolunteer = decodedToken.isVolunteer
		req.auth = {userId};
		if (req.body.userId && req.body.userId !== userId) {
			throw "Invalid user ID";
		} else {
			req.auth = {userId: userId, isVolunteer:isVolunteer}
			next();
		}
	} catch {
		res.status(401).json({
			error: new Error("Invalid request!"),
		});
	}
};
