const TelegramBot = require('node-telegram-bot-api');

const token = '8909155643:AAGgwa_nsbZWfUBxAqIr0PKvRu0PoBlnBSY';

const bot = new TelegramBot(token, { polling: true });

console.log('Bot funcionando 🚀');

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(
        msg.chat.id,
        `
🔥 Vem Me Conhecer Melhor E Bater Gostoso Pra Mim 🔥

Formas De Me Conhecer 👇
        `,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '💎 30 Fotos - R$10',
                            callback_data: 'basic'
                        }
                    ],
                    [
                        {
                            text: '🔥 70 Fotos e 10 Videos - R$25',
                            callback_data: 'premium'
                        }
                    ],
                    [
                        {
                            text: '👑 200 Fotos e 50 Videos - R$50',
                            callback_data: 'vip'
                        }
                    ]
                ]
            }
        }
    );

});

bot.on('callback_query', (query) => {

    const chatId = query.message.chat.id;

if (query.data === 'basic') {

    bot.sendMessage(chatId, `
💎 30 Fotos

✅ Acesso básico
✅ Conteúdo exclusivo

💰 Valor: R$10

PIX:
https://mpago.la/11sHtA9
    `);

}

    if (query.data === 'premium') {

        bot.sendMessage(chatId, `
🔥 70 Fotos e 10 Videos

✅ Tudo do básico
✅ Conteúdo premium
✅ Extras exclusivos

PIX:
https://mpago.la/2F8Bbh7
        `);

    }

    if (query.data === 'vip') {

        bot.sendMessage(chatId, `
👑 200 Fotos e 50 Videos

✅ Acesso completo
✅ Conteúdo total
✅ VIP exclusivo

PIX:
https://mpago.la/153c3iF
        `);

    }

});