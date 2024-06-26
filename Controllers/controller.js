const Player = require('../models/stats');

const getplayerstats = async (req, res) => {
    try {
        // Create a case-insensitive regex query for the name
        const query = {};
        if (req.query.name) {
            query.name = new RegExp(req.query.name, 'i'); // 'i' makes the regex case-insensitive
        }

        // console.log("Query: ", query); // Log the query to debug

        const data = await Player.find(query);

        // const runsData = data.map(player => ({
        //     name: player.name,
        //     runs: {
        //         Test: player.format.Test.runs,
        //         ODI: player.format.ODI.runs,
        //         T20: player.format.T20.runs
        //     }
        // }));

        res.status(200).json({ data });
    } catch (error) {
        console.error("Error: ", error); // Log any errors to debug
        res.status(500).json({ message: error.message });
    }
};

module.exports = getplayerstats;
