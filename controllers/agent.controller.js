const agentService = require("../services/agent.service");

exports.chat = async (req, res) => {
    try {
        const { message } = req.body;

        const response = await agentService.chat(message);

        res.json({
            success: true,
            response
        });

    } catch (err) {

        res.status(500).json({
            success:false,
            message:err.message
        });

    }
};  