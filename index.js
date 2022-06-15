import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const holiday = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

app.get("/holidays", (req, res) => {
    res.send(holiday);
});

app.get("/is-today-holiday", (req, res) => {
    const hoje = new Date();
    const isHoliday = holiday.find(holiday => holiday.date === hoje.toLocaleDateString());
    if(isHoliday){
        res.send(`Sim, hoje é ${isHoliday.name}`)
    } else {
        res.send("Não, hoje não é feriado")
    }
});

app.get("/holidays/:month", (req,res) => {
    const userMonth = req.params.month;
    const monthHolidays = holiday.filter((holiday) => {
        const allMonths = holiday.date.split("/");
        if(allMonths[0] === userMonth){
            return holiday
        }
    })
    res.send(monthHolidays)
})

app.listen(5000);