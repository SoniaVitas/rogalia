function News() {
    var news = [
        [
            "Ссылки на рецепты и вики",
            "28.01.2015",
            "Теперь поиск по рецептам работает на любом языке.",
            "Ссылки на рецепты (shift+click по имени рецепта в списке) теперь выводятся как кликабельные ссылки.",
            "Ссылку на рецепт можно написать прямо в чате: <code>${recipe:PATTERN}</code>, " +
                "где PATTERN — шаблон для поиска предмета. " +
                "Предмет выберется только при полном совпадении имени предмета и шаблона. " +
                "В противном случае будет запущен поиск по шаблону.",
            "Примеры:",
            "<textarea style='height:80px'>${recipe:Iron axe}\n" +
                "${recipe: Железный топор}\n" +
                "${recipe:axe}\n" +
                "${recipe:топор}<textarea>",
        ],
        [
            "Смена пароля",
            "27.01.2015",
            "Чтобы сменить пароль в чате введите <code>*set-password PASSWORD PASSWORD</code>",
            "Где PASSWORD = новый пароль.",
        ],
        [
            "Обновлен перевод и оптимизирована загрузка ресурсов",
            "25.01.2015",
            "Переведены названия почти всех предметов и действий на них," +
                " а так же часть сообщений от сервера. Огромное спасибо товарищу Руту!",
            "Теперь большинство ресурсов загружается по требованию, " +
                "что должно сильно ускорить загрузку игры.",
        ],
        [
            "Костер, щиты, декор и пони",
            "24.01.2015",
            "Обновлен костер. Теперь в него можно докидывать топливо и заново разжигать.",
            "Добавлены щиты и различные элементы декора: статуи, картины и настенные украшения.",
            "Старые лошади переименованы в пони. Вместо них добавлены новые.",
        ],
        [
            "Слава",
            "11.01.2015",
            "Слава обнулена",
            "Теперь слава дается за убийство игроков отличной от вашей фракции, при условии что разница уровней между вами не более 10.",
        ],
        [
            "Фракции и квесты",
            "11.01.2015",
            "Добавлена возможность выбирать фракцию. " +
            "После этого можно будет выполнять ежедневный квест дающий очки статуса. " +
            "Набрав определенное количество очков, вы получаете новый ранг. " +
            "В дальнейшем члены лидирующей фракции будут получать различные бонусы.",
        ],
        [
            "Жареная рыба и рыбалка",
            "09.01.2015",
            "Обновлена механика рыбалки.",
            "Добавлено жареное рыбное филе.",
            "Добавлено новое знамя.",
        ],
        [
            "Рыбалка!",
            "08.01.2015",
            "Добавлена рыбалка.",
            "Сбор с деревьев теперь зависи от выживания.",
        ],
        [
            "Восприятие и мудрость",
            "05.01.2015",
            "Добавлены два новых атрибута: восприятие и мудрость, и два соответствующих витамина.",
            "Помимо этого изменены связи между витаминами и атрибутами.",
            "Также пересмотрены привязки навыков к атрибутам. Скажем, фермерство теперь зависит от восприятия, а кулинария от мудрости.",
            "Увеличин прирост количества витаминов при повышении качества еды.",
            "Почти вся сырая еда больше не дает никаких витаминов.",
            "Повышение навыка больше не вызывает понижение связанного. Вместо этого на повышение навыка теперь требуется больше витаминов, пропорционально уровню связанного навыка."
        ],
        [
            "Баланс",
            "04.01.2015",
            "Уменьшен эффект замедления от переедания жажды до 45%. Таким образом персонаж может двигаться, хотя и очень медленно, при наличии обоих эффектов.",
            "Постройка респауна стала еще легче",
        ],
        [
            "Автокрафт и автоперемещение",
            "03.01.2015",
            "Добавлена кнопка перемещения всего содержимого контейнера.",
            "Добавлена кнопка запускающая автоматический крафт, пока не кончатся ресурсы.",
        ],
        [
            "Лук, стены и знамена",
            "03.01.2015",
            "Добавлены:",
            [
                "Лук репчатый и зеленый",
                "Знамена",
                "Новые книжки",
            ],
            "Библиотека при имперской канцелярии открыта для всех желающих на рыночной площади."
        ],
        [
            "Обновление предметов",
            "02.01.2015",
            "Добавлены:",
            [
                "плетеный забор",
                "книжный шкаф",
            ],
            "Обновлены рецепты некоторых предметов.",
            "На бумаге теперь можно писать.",
        ],
        [
            "Плуг и каменные стены",
            "30.12.2014",
            "Добавлены:",
            [
                "плуг",
                "новые каменные стены в ассортименте",
                "поленница",
                "настройка разрешающая выделять себя",
            ],
        ],
        [
            "Новогодний ивент",
            "29.12.2014",
            "Дед Мороз и снегурка выдают подарки на рыночной площади в обмен на этомы.",
            "Нафарми елку — создай праздничное настроение :3",
        ],
        [
            "Можно копать землю",
            "25.12.2014",
            "Лопатой можно копать землю получая соответствующий предмет. " +
                "Затем полученной землей можно засыпать вспаханную землю и неглубокую воду.",
            "Также копание теперь можно ставить в очередь используя шифт+пробел+клик.",
        ],
        [
            "Новости",
            "25.12.2014",
            "Добавлены внутреигровые новости.",
            "Так же читайте новости в нашей <a href=http://vk.com/rogalik_mmo target=_blank>группе вк</a>.",
        ],
    ];

    var lsKey = "news.viewed";
    var viewed = localStorage.getItem(lsKey) || news.length;
    var list = document.createElement("ul");

    function makeList(items) {
        var list = document.createElement("ul");
        items.forEach(function(html) {
            var item = document.createElement("li");
            item.innerHTML = html;
            list.appendChild(item);
        })
        return list;
    }

    this.show = function() {
        localStorage.setItem(lsKey, news.length);
        news.forEach(function(record, i) {
            var title = record.shift();
            var date = record.shift();

            var item = document.createElement("li");
            if (i < news.length - viewed)
                item.classList.add("unread");

            var time = document.createElement("time");
            time.textContent = date;
            item.appendChild(time);

            var summary = document.createElement("div");
            summary.className = "summary";
            summary.textContent = title;
            item.appendChild(summary);


            var details = document.createElement("div");
            details.className = "details";
            record.forEach(function(row) {
                if (Array.isArray(row)) {
                    details.appendChild(makeList(row));
                } else {
                    var p = document.createElement("p");
                    p.innerHTML = row;
                    details.appendChild(p);
                }

            });
            item.appendChild(details);

            list.appendChild(item);
        })
        this.panel.hooks.show = null;
    }.bind(this)

    this.panel = new Panel("news", "Good news, everyone!", [list]);
    if (this.panel.visible)
        this.show()
    else
        this.panel.hooks.show = this.show;

    if (viewed < news.length)
        this.panel.show();
}
