module.exports = {
    remainingDays(job) {
        //calculo do tempo restante
        const remainingDaysInitial = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDaysInitial)
        const dueDate = createdDate.setDate(dueDay)

        const timeDiffInMs = dueDate - Date.now()

        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
    
}