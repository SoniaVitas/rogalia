/* global Quest */

"use strict";

Quest.quests =  {
    "tutorial-start": {
        name: "Начало обучения",
        voice: true,
        desc: [
            "Здравствуй, поселенец.",
            "Всякий, кто прибывает в эти земли, сначала попадает сюда, в мою Академию. Здесь я обучу тебя основам выживания.",
            // "Если ты решишь уйти сейчас, дело твое, но помни, что ты лишишься всех преимуществ ученика, и выжить тебе будет очень сложно.",
        ],
        final: "Отлично, приступим. Запоминай: <i>до 10 уровня на тебя не нападут дикие животные, а при смерти ты останешься со своей сумкой.</i>",
    },
    "craft-1": {
        name: "Сбор ресурсов" ,
        voice: true,
        desc: "Для выживания в этих диких землях тебе необходимы инструменты, а чтобы их создать, нужны ресурсы. Собери четыре камня, два сучка и веточку.",
        tip: "По дереву: <rmb>Сорвать сук</rmb> и <rmb>Сорвать ветку</rmb>.<br>Собрать камни с земли <lmb></lmb>.",
    },
    "craft-1-2": {
        name: "Делаем рукоятку для ножа" ,
        voice: true,
        desc: "Теперь сделай из суков палки, а из веток - прутики. Из них сделаем рукоятку для ножа.",
        tip: "<rmb>Сломать</rmb> по суку даст палку, а из ветки выйдет прутик.",
    },
    "craft-2": {
        voice: true,
        name: "Делаем лезвие для ножа" ,
        desc: "У ножа должно быть острое лезвие, попробуй сделать его из острых камней.",
        tip: "<lmb></lmb> по иконке острого камня.<br>Перенесите камни в рецепт и нажмите \"Создать\".",
    },
    "craft-2-1": {
        voice: true,
        name: "Делаем нож" ,
        desc: "Отлично, все необходимое собрано. Осталось сделать сам нож.",
        tip: "Для того чтобы не переносить каждый ингридиент, кликните по кнопке <hl>\"Авто\"</hl>, а затем <hl>\"Создать\"</hl>",
    },
    "craft-3": {
        voice: true,
        name: "Делаем оружие" ,
        desc: "Ок, теперь будем крафтить острую палку — твое первое оружие. Оно тебе понадобится позже.",
    },
    "stat-1": {
        voice: true,
        name: "Жажда" ,
        desc: "Теперь я научу тебя, как добывать еду и воду.<br>Сорви кору с дерева и сделай кружку, затем наполни ее водой из источника. Не волнуйся, вода здесь чистая.",
        tip: "Встаньте в воду и <rmb>Заполнить</rmb>.<br><rmb>Пить</rmb> по кружке увеличит вашу выносливость.",
    },
    "stat-2": {
        voice: true,
        name: "Голод" ,
        desc: "Самое время добыть еды и поесть. Нарви яблок с дерева.<br> Будь внимателен, <i>не переедай, иначе еда не принесет тебе витаминов, и ты станешь очень медленным</i>.<br>Если ты вдруг переел, туалет тут рядом, воспользуйся им.",
    },
    "fight": {
        voice: true,
        name: "Бой и боевые комбинации" ,
        desc: "Вот ты и готов к своему первому бою.<br><hl>Возьми в руку острую палку и ударь манекен.</hl>",
        tip: "Удара выполняется в сторону указателя мыши.<br>Кнопки и хоткеи боевых умений находятся на нижней панели.",
    },
    "finish": {
        voice: true,
        name: "Конец обучения" ,
        desc: "Ну вот я и обучил тебя основам выживания в этих землях.",
        final: "Пора отправляться в город.",
    },
    "tp-return-home": {
        name: "Возвращение домой" ,
        desc: "Тебя интересуют порталы? Что ж, ты можешь ими воспользоваться, а я тебе расскажу о способах перемещения по миру.<br> Пока ты находишься на поверхности мира, на тебя действиет защита Синода. Благодаря ей ты сможешь быстро вернуться на свой репаун или городской респаун, если нет своего. Попробуй.",
        "tip": "<rmb>Вернуться домой</rmb> по аватарке в левом верхнем углу.",
    },
    "tp-respawn": {
        name: "Респаун",
        desc: "Городские респауны связанны с твоим респауном и наоборот.<br> Ты можешь перемещаться через респаун, но главная его задача - это возрождать тебя после смерти. Когда ты построишь свой респаун, ты заметишь, что твой респаун отличается от остальных.",
        tip: "<lmb></lmb> по ближайшему респауну."
    },
    "tp-scrolls": {
        name: "Свитки телепортации",
        desc: "Мудрые алхимики давно используют свитки телепортации для перемещения даже из самых опасных уголков мира. Они очень тебе пригодгятся на нижних уровнях подземелий.<br> Я тебе дам парочку, но ты сам их можешь создать или купить у торговцев.",
    },
    "faction-daily-1": {
        name: "Помощь фракции (ежедневный)" ,
        desc: "Повысить статус внутри фракции",
    },
    "garland-daily": {
        name: "Гирлянда (ежедневный)" ,
        desc: "Помоги деду морозу сделать гирлянду",
    },
    "chrismas-flags-daily": {
        name: "Флажки (ежедневный)" ,
        desc: "Помоги Деду Морозу сделать бумажные флажки",
    },
    "chrismas-decoration-daily-1": {
        name: "Бумажные украшения (ежедневный)" ,
        desc: "Помоги Снегурочке сделать бумажные украшения",
    },
    "chrismas-decoration-daily-2": {
        name: "Стеклянные украшения (ежедневный)" ,
        desc: "Помоги Снегурочке сделать стеклянные украшения",
    },
    "buy-small-indulgence": {
        name: "Малая индульгенция",
        customReward: "+100 кармы",
        desc: [
            "Ты всегда можешь исповедаться. Истинное покаяние, несомненно, поможет направить душу на путь истинный.",
            "Задача церкви поддерживать баланс добра и зла. Если хочешь остаться под крылом церкви, я знаю как тебе помочь.",
            "Тяжесть греха бывает столь велика, что становится непосильна для одной души. Но даже сбившиеся с пути заслуживают второго шанса. Мы работаем с подобными случаями, но ритуал не из простых."
        ],
    },
    "buy-average-indulgence": {
        name: "Средняя индульгенция",
        customReward: "+1000 кармы",
        desc: [
            "Ты всегда можешь исповедаться. Истинное покаяние, несомненно, поможет направить душу на путь истинный.",
            "Задача церкви поддерживать баланс добра и зла. Если хочешь остаться под крылом церкви, я знаю как тебе помочь.",
            "Тяжесть греха бывает столь велика, что становится непосильна для одной души. Но даже сбившиеся с пути заслуживают второго шанса. Мы работаем с подобными случаями, но ритуал не из простых."
        ]

    },
    "buy-big-indulgence": {
        name: "Великая индульгенция",
        customReward: "+10000 кармы",
        desc: [
            "Ты всегда можешь исповедаться. Истинное покаяние, несомненно, поможет направить душу на путь истинный.",
            "Задача церкви поддерживать баланс добра и зла. Если хочешь остаться под крылом церкви, я знаю как тебе помочь.",
            "Тяжесть греха бывает столь велика, что становится непосильна для одной души. Но даже сбившиеся с пути заслуживают второго шанса. Мы работаем с подобными случаями, но ритуал не из простых."
        ]
    }
};
