import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
//import TOKEN from './token.js'
const bot = new Telegraf(process.env.TELEGRAM_BOT)
bot.use(async (ctx, next) => {
	console.time(`Processing update ${ctx.update.update_id}`)
	await next() // runs next middleware
	// runs after next middleware finishes
	console.timeEnd(`Processing update ${ctx.update.update_id}`)
})

bot.on(message('text'), ctx => ctx.reply('Hello World'))
bot.launch()

/*
var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
*/
