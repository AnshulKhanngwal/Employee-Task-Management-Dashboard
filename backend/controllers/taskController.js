const taskService = require("../services/taskService");
const paginationService = require("../services/paginationService");

const fetchTasks = (req, res) => {
    const {limit, offset, id} = req.query;
    try{
        if(id){
            const task = taskService.getTask(id);
            return res.status(200).json({
                        "status": true,
                        "data": task
                    })
        }
        const tasks = taskService.filterTasks(req.query);
        const data = paginationService.paginateData(tasks, limit, offset);
        return res.status(200).json({
                            "status": true,
                            "data": data,
                            "count": tasks.length
                        })
    }catch(error){
        console.log("Error in fetching data", error);
        return res.status(500).json({
                        "status": false,
                        "message": "Failed to fetch tasks"
                    })
    }
}

module.exports = {
    fetchTasks
}
