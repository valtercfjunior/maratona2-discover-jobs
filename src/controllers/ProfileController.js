const Profile = require('../model/Profile')


module.exports = {
    async index(req, res) {
        return res.render("profile", {profile: await Profile.get()})
    },

   async update(req, res){

        const data = req.body

        const weekPerYear = 52; //samanas por ano
        const weekPerMonth = (weekPerYear - data["vacation-per-year"]) / 12; //semanas por ano (tirando as férias)
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"] //total de horas na semana
        const monthlyTotalHours = weekTotalHours * weekPerMonth
        const valueHour = data["monthly-budget"] / monthlyTotalHours


        const profile = await Profile.get()

        await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": valueHour

        })

        return res.redirect('/profile')
    }
}