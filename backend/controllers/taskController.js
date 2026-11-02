const taskService = require("../services/taskService");

const fetchTasks = (req, res) => {
    try{
        const tasks = taskService.filterTasks(req.query);
        res.status(200).json({
            "status": true,
            "data": tasks,
            "count": tasks.length
        })
    }catch(error){
        console.log("Error in fetching data", error);
        res.status(500).json({
            "status": false,
            "message": "Failed to fetch tasks"
        })
    }
}

module.exports = {
    fetchTasks
}
