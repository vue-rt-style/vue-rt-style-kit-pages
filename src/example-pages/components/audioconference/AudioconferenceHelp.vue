<template>
    <div class="conference ac-help">
        <div class="color-block--white sp-t-0-4 sp-b-1 conference-header">
            <div class="rt-container">
                <div class="rt-col d-flex">
                    <rt-logo :show-text="true" height="44px" width="26px" top-fill-color="b2c-slate"/>
                </div>
            </div>
        </div>
        <div class="rt-container">
            <div class="rt-col sp-t-4"/>
            <div class="rt-col">
                <div class="row">
                    <div class="rt-col-4 color-block--white pos-rel">
                        <div class="pseudo-bg"/>
                        <div class="ac-help__title-block sp-t-3 sp-b-2" ref="navigation">
                            <h2 class="rt-font-h2 sp-b-1">Разделы</h2>
                            <a href="#description" class="rt-font-paragraph">Описание услуги Аудиоконференция</a>
                            <rt-annotation hash='open' :scroll-timeout='1000' label="Авторизация">
                                <template slot="content">
                                    <a href="#auth">Как зайти в систему аудиоконференций</a>
                                </template>
                            </rt-annotation>
                            <rt-annotation hash='open' :scroll-timeout='1000' label="Создание и настройки конференции">
                                <template slot="content">
                                    <ul class="outer-list">
                                        <li class="outer-list__item">
                                            <rt-annotation hash='open' :scroll-timeout='1000' label="Создание конференции">
                                                <template slot="content">
                                                    <ul class="inner-list">
                                                        <li class="inner-list__item"><a href="#params">Параметры конференции</a></li>
                                                        <li class="inner-list__item"><a href="#leader">Конференция с Лидером</a></li>
                                                        <li class="inner-list__item"><a href="#noPin">Конференция без PIN-кода</a></li>
                                                        <li class="inner-list__item"><a href="#presentation">Конференция с презентацией</a></li>
                                                        <li class="inner-list__item"><a href="#closedList">Закрытый список участников</a></li>
                                                        <li class="inner-list__item"><a href="#audioRecord">Запись аудиоконференции</a></li>
                                                    </ul>
                                                </template>
                                            </rt-annotation>
                                        </li>
                                        <li class="outer-list__item"><a href="#browseCreated">Просмотр созданной конференции</a></li>
                                        <li class="outer-list__item"><a href="#invitation">Приглашение участникам/лидеру</a></li>
                                    </ul>
                                </template>
                            </rt-annotation>
                            <rt-annotation hash='open' :scroll-timeout='1000' label="Список конференций">
                                <template slot="content">
                                    <a href="#myList">Список Мои конференции</a>
                                </template>
                            </rt-annotation>
                            <rt-annotation hash='open' :scroll-timeout='1000' label="Управление конференцией">
                                <template slot="content">
                                    <ul class="outer-list">
                                        <li class="outer-list__item">
                                            <a href="#manage">Управление активной конференцией</a>
                                        </li>
                                        <li class="outer-list__item">
                                            <a href="#manageWindow">Окно управления конференцией</a>
                                        </li>
                                        <li class="outer-list__item">
                                            <a href="#manageFunctions">Функции управления конференцией</a>
                                        </li>
                                    </ul>
                                </template>
                            </rt-annotation>
                            <rt-annotation hash='open' :scroll-timeout='1000' label="Архив конференций">
                                <template slot="content">
                                    <a href="#archive">Просмотр состоявшихся конференций</a>
                                </template>
                            </rt-annotation>
                            <rt-annotation hash='open' :scroll-timeout='1000' label="Адресная книга">
                                <template slot="content">
                                    <a href="#phonebook">Добавить новый контакт</a>
                                </template>
                            </rt-annotation>
                            <rt-annotation hash='open' :scroll-timeout='1000' label="Настройки">
                                <template slot="content">
                                    <ul class="outer-list">
                                        <li class="outer-list__item">
                                            <a href="#systemTime">Что такое время системы?</a>
                                        </li>
                                        <li class="outer-list__item">
                                            <a href="#localTime">Местное время</a>
                                        </li>
                                        <li class="outer-list__item">
                                            <a href="#commonTime">Единое время</a>
                                        </li>
                                        <li class="outer-list__item">
                                            <a href="#chosenLocation">Избранные города</a>
                                        </li>
                                        <li class="outer-list__item">
                                            <a href="#passChange">Смена пароля</a>
                                        </li>
                                    </ul>
                                </template>
                            </rt-annotation>
                        </div>
                    </div>
                    <div class="rt-col-1"/>
                    <div class="rt-col-7">
                        <div class="ac-help__content-block" ref="content">
                            <section class="ac-help__section sp-t-3">
                                <a name="description"/>
                                <h2 class="rt-font-h2 sp-b-1">Описание услуги Аудиоконференция</h2>
                                <p class="rt-font-paragraph">Аудиоконференция — удобный и современный способ проведения
                                    переговоров и совещаний. Услуга позволяет в любое удобное время легко организовать
                                    конференц-звонок для нескольких участников при помощи обычных телефонных соединений.</p>
                                <p class="rt-font-paragraph">Доступ к конференции возможен с фиксированного или мобильного
                                    телефона. Максимальное количество участников сеанса может достигать 128 человек.</p>
                                <p class="rt-font-paragraph">Вы можете самостоятельно бронировать аудиоконференции и
                                    управлять ими с помощью специального интерфейса управления услугой в режиме реального
                                    времени.</p>
                            </section>
                            <section class="ac-help__section">
                                <a name="auth"/>
                                <h2 class="rt-font-h2 sp-b-1">Авторизация</h2>
                                <h3 class="rt-font-h3 sp-b-1">Как зайти в систему аудиоконференций?</h3>
                                <p class="rt-font-paragraph">Для входа в систему аудиоконференций необходимо перейти в
                                    раздел Управление услугой на странице услуги Аудиоконференция на сайте
                                    <a href="" class="color-purple">www.rt.ru</a> или перейти непосредственно по ссылке на
                                    портал <a href="" class="color-purple">http://audioconference.rt.ru</a> и использовать
                                    логин и пароль.</p>
                                <p class="rt-font-paragraph">Обратите внимание, ваш логин — это номер телефона в системе
                                    аудиоконференций, состоящий из 10 цифр (например, 8001001122).</p>
                                <p class="rt-font-paragraph">Поставьте галочку рядом с <span class="rt-font-bold">Запомнить</span>,
                                    если вы хотите, чтобы система запомнила вас и больше не спрашивала логин/пароль на
                                    вашем компьютере.</p>
                                <p class="rt-font-paragraph">Нажмите кнопку <span class="rt-font-bold">Войти</span>.</p>
                            </section>
                            <section class="ac-help__section">
                                <h2 class="rt-font-h2 sp-b-1">Создание и настройки конференции</h2>
                                <h3 class="rt-font-h3 sp-b-1">Создание конференции</h3>
                                <p class="rt-font-paragraph">Для того, чтобы организовать конференцию, необходимо нажать кнопку
                                    <span class="rt-font-bold">Создать новую конференцию</span>.
                                </p>
                                <a name="params"/>
                                <h4 class="rt-font-paragraph rt-font-bold sp-t-2 sp-b-1">Параметры конференции</h4>
                                <p class="rt-font-paragraph">Теперь необходимо заполнить все поля, чтобы забронировать вашу
                                    конференцию:</p>
                                <ul class="rt-ordered-list sp-t-1">
                                    <li class="rt-ordered-list__item">Выберите <span class="rt-font-bold">Дату начала
                                        конференции</span> (можно выбрать с помощью календаря или в поле ввести цифры).</li>
                                    <li class="rt-ordered-list__item">Укажите <span class="rt-font-bold">Время начала
                                        конференции</span>. Обратите внимание на подсказку: время начала конференции
                                        устанавливается по тому времени, которое  у вас указано во времени системы. Именно
                                        по этому времени начнется ваша конференция.</li>
                                    <li class="rt-ordered-list__item">Укажите <span class="rt-font-bold">Длительность
                                        конференции</span>, которую вы планируете. Максимальная длительность — 12 часов.
                                        Обратите внимание, в ходе конференции есть возможность добавлять время конференции.</li>
                                    <li class="rt-ordered-list__item">Укажите <span class="rt-font-bold">Количество
                                        участников</span>, которые будут участвовать  в конференции. Минимальное количество
                                        участников — 3 человека. Максимальное количество участников — 128 человек.
                                        Обратите внимание, во время конференции вы не сможете увеличить количество участников.</li>
                                    <li class="rt-ordered-list__item">Укажите <span class="rt-font-bold">Тему конференции</span>.</li>
                                    <li class="rt-ordered-list__item">Укажите <span class="rt-font-bold">Фамилию Имя
                                        Отчество</span> ответственного за организацию конференции.</li>
                                </ul>
                                <a name="leader"/>
                                <h4 class="rt-font-paragraph rt-font-bold sp-t-2 sp-b-1">Конференция с Лидером</h4>
                                <p class="rt-font-paragraph">Конференция с Лидером позволяет начинать конференцию
                                    только в тот момент, когда к конференции подключается Лидер (вводит PIN-код Лидера
                                    конференции). В случае, если Лидер еще не подключился к конференции, остальные
                                    пользователи, позвонившие по телефонному номеру конференции, являются подключенными,
                                    но находятся в ожидании подключения Лидера, и у них отсутствует возможность разговора
                                    между участниками.</p>
                                <p class="rt-font-paragraph">Если вы хотите сделать конференцию с Лидером, то поставьте
                                    галочку рядом со строкой <span class="rt-font-bold">Конференция с лидером</span>.
                                    Укажите в поле <span class="rt-font-bold">PIN</span> лидера PIN-код (произвольные 4
                                    цифры), который вы в дальнейшем будете набирать на вашем телефоне для подключения к
                                    конференции.</p>
                                <p class="rt-font-paragraph">В случае, если конференция с Лидером не выбрана, то
                                    конференция начнется сразу, как только к ней подключатся хотя бы 2 пользователя.</p>
                                <p class="rt-font-paragraph">В случае, если при создании конференции вы выбрали
                                    <span class="rt-font-bold">Конференция с лидером</span> и
                                    <span class="rt-font-bold">Конференция с презентацией</span>, то PIN-код лидера и
                                    PIN-код модератора презентации будет единым.</p>
                                <a name="noPin"/>
                                <h4 class="rt-font-paragraph rt-font-bold sp-t-2 sp-b-1">Конференция без PIN-кода</h4>
                                <p class="rt-font-paragraph">При создании новой конференции всегда и автоматически
                                    присуждается PIN-код конференции. Таким образом, к вашей конференции смогут
                                    подключиться только те пользователи, которые знают этот PIN-код.</p>
                                <p class="rt-font-paragraph">В случае, если вы отметите галочкой Конференция без PIN-кода,
                                    то к вашей конференции сможет подключиться любой человек, который позвонит на
                                    телефонный номер конференции.</p>
                                <a name="presentation"/>
                                <h4 class="rt-font-paragraph rt-font-bold sp-t-2 sp-b-1">Конференция с презентацией</h4>
                                <p class="rt-font-paragraph">В режиме <span class="rt-font-bold">Конференция с презентацией</span>
                                    вы можете демонстрировать участникам различные документы. Если вы хотите создать
                                    конференцию с презентацией, то поставьте галочку рядом со строкой Конференция с презентацией.</p>
                                <p class="rt-font-paragraph">Укажите в поле PIN модератора презентации PIN-код
                                    (произвольные 4 цифры), который в дальнейшем вы будете использовать для входа
                                    модератора в режим презентации. Для входа участников в режим презентации будет
                                    создана специальная ссылка, которую вы сможете выслать всем участникам.</p>
                                <p class="rt-font-paragraph">В случае, если при создании конференции вы выбрали
                                    <span class="rt-font-bold">Конференция с лидером</span> и
                                    <span class="rt-font-bold">Конференция с презентацией</span>, то PIN-код лидера и
                                    PIN-код модератора презентации будет единым.</p>
                                <a name="closedList"/>
                                <h4 class="rt-font-paragraph rt-font-bold sp-t-2 sp-b-1">Закрытый список участников</h4>
                                <p class="rt-font-paragraph">Вы можете ограничить доступ к вашей конференции, если создадите
                                    свой Закрытый список участников для вашей конференции:</p>
                                <ul class="rt-ordered-list sp-t-1">
                                    <li class="rt-ordered-list__item">Отметьте галочкой
                                        <span class="rt-font-bold">Закрытый список</span> конференции.</li>
                                    <li class="rt-ordered-list__item">В появившемся блоке вам необходимо добавить участника
                                        вручную, указав телефонный номер участника и его имя, либо добавить участника из
                                        вашей адресной книги.</li>
                                </ul>
                                <h4 class="rt-font-paragraph rt-font-bold sp-t-2 sp-b-1">Добавление в Список участников:</h4>
                                <ul class="rt-ordered-list sp-t-1">
                                    <li class="rt-ordered-list__item">В поле <span class="rt-font-bold">Добавление
                                        участника</span> начните вбивать ФИО участника. Если этот контакт уже существует
                                        в <span class="rt-font-bold">Адресной книге</span>, то он будет предложен вам
                                        автоматически в выпадающем списке. <span class="rt-font-bold">Внимание</span>:
                                        проверьте телефонный номер контакта. Помните, что только по этому телефонному
                                        номеру участник будет допущен к конференции.</li>
                                    <li class="rt-ordered-list__item">Если контакта нет в <span class="rt-font-bold">Адресной
                                        книге</span>, то необходимо заполнить поля <span class="rt-font-bold">Имя
                                        участника</span> и <span class="rt-font-bold">Контактный телефон</span> и нажать
                                        кнопку <span class="rt-font-bold">Добавить</span>. Контактные данные участника
                                        отобразятся в <span class="rt-font-bold">Списке участников</span>.</li>
                                    <li class="rt-ordered-list__item">При необходимости вы можете отключить звук у всех
                                        контактов, нажав кнопку <span class="rt-font-bold">Отключить всем звук</span>.
                                        Вернуть звук можно в правой части <span class="rt-font-bold">Списка участников</span>,
                                        нажав на иконку <span class="rt-font-bold">Микрофон</span>.</li>
                                    <li class="rt-ordered-list__item">При необходимости вы можете отключить звук у всех
                                        контактов, нажав кнопку <span class="rt-font-bold">Отключить всем звук</span>. В
                                        поле справа вы сможете просмотреть участников <span class="rt-font-bold">Закрытого
                                            списка</span> вашей конференции, и отключить/включить микрофоны участникам.
                                        Включить микрофон также можно будет во время конференции через панель управления
                                        активной конференцией.</li>
                                    <li class="rt-ordered-list__item">Удалить контакт можно в
                                        <span class="rt-font-bold">Списке участников</span>, нажав на
                                        иконку <span class="rt-font-bold">Удалить</span>.</li>
                                </ul>
                                <a name="audioRecord"/>
                                <h4 class="rt-font-paragraph rt-font-bold sp-t-2 sp-b-1">Запись аудиоконференции</h4>
                                    <p class="rt-font-paragraph">В режиме <span class="rt-font-bold">Запись
                                        аудиоконференции</span> будет осуществляться запись сеанса аудиоконференционной
                                        связи для последующего прослушивания или скачивания. Если вы хотите осуществлять
                                        запись конференции, поставьте галочку рядом со строкой
                                        <span class="rt-font-bold">Запись аудиоконференции</span>.</p>
                                    <p class="rt-font-paragraph">Запись начнется автоматически, когда к конференции
                                        присоединится хотя бы два участника. (Если к конференции присоединится только
                                        один участник, запись осуществляться не будет).</p>
                                    <p class="rt-font-paragraph">Запись автоматически остановится, когда к конференции
                                        будет присоединен один участник или все участники отсоединятся.</p>
                                <a name="browseCreated"/>
                                <h3 class="rt-font-h3 rt-font-bold sp-t-3 sp-b-1">Просмотр созданной конференции</h3>
                                <p class="rt-font-paragraph">Если при создании конференции вы указали все данные верно,
                                    то после нажатия на кнопку <span class="rt-font-bold">Создать конференцию</span>
                                    появится окно <span class="rt-font-bold">Просмотра созданной аудиоконференции</span>.</p>
                                <p class="rt-font-paragraph">Здесь вы еще раз сможете проверить все указанные вами данные.
                                    Кроме этого, вы можете сразу узнать, сколько времени будет в других городах в момент
                                    начала вашей конференции. Для этого добавьте избранные города в
                                    <span class="rt-font-bold">Просмотре конференции</span> или в
                                    <span class="rt-font-bold">Настройках</span>.</p>
                                <p class="rt-font-paragraph">В случае, если какие-то данные вам необходимо исправить,
                                    перейдите по ссылке <span class="rt-font-bold">Редактировать</span>. Вы можете удалить
                                    конференцию, перейдя по ссылке <span class="rt-font-bold">Удалить</span>.</p>
                                <a name="invitation"/>
                                <h3 class="rt-font-h3 rt-font-bold sp-t-3 sp-b-1">Приглашение участникам/лидеру</h3>
                                <p class="rt-font-paragraph">После создания конференции вы можете сформировать и отправить
                                    приглашения участникам. Для этого в окне <span class="rt-font-bold">Просмотра созданной
                                        конференции</span> нажмите на кнопку <span class="rt-font-bold">Выслать приглашения
                                        участникам</span>. В открывшемся окне вы увидите текст приглашения — вы можете его
                                    редактировать.</p>
                                <p class="rt-font-paragraph">Далее выберите, каким способом вы хотите отправить приглашение:
                                    воспользоваться вашим почтовым клиентом или создать приглашение средствами календаря Outlook.</p>
                                <p class="rt-font-paragraph">В случае, если при создании конференции вы выбрали конференцию
                                    с Лидером, то в окне Приглашения у вас будет 2 вкладки: для участников и для Лидера.
                                    Отличие приглашений только в том, что в приглашении для Лидера указан PIN-код Лидера,
                                    необходимый для начала конференции.</p>
                            </section>
                            <section class="ac-help__section">
                                <a name="myList"/>
                                <h2 class="rt-font-h2 sp-b-1">Список конференций</h2>
                                <h3 class="rt-font-h3 sp-b-1">Список Мои конференции</h3>
                                <p class="rt-font-paragraph">На вкладке <span class="rt-font-bold">Мои конференции</span>
                                    отображаются запланированные и активные конференции.</p>
                                <p class="rt-font-paragraph">Активные конференции уже начались и все еще продолжаются.
                                    Они всегда находятся вверху и подсвечиваются голубой рамкой.</p>
                                <p class="rt-font-paragraph">Запланированные конференции вы можете редактировать и удалять.
                                    Для этого поставьте галочку рядом со строкой конференции и выберите необходимое действие:
                                    <span class="rt-font-bold">Редактировать</span> или <span class="rt-font-bold">Удалить</span>.</p>
                            </section>
                            <section class="ac-help__section">
                                <h2 class="rt-font-h2 sp-b-1">Управление конференцией</h2>
                                <a name="manage"/>
                                <h3 class="rt-font-h3 sp-b-1">Управление активной конференцией</h3>
                                <p class="rt-font-paragraph">Все активные конференции отображаются вверху списка и
                                    подсвечиваются голубой рамкой. В списке конференций вы можете отслеживать
                                    продолжительность, оставшееся время конференции, количество заявленных участников и
                                    количество подключившихся.</p>
                                <p class="rt-font-paragraph">Кроме этого, из списка конференций вы можете добавить время
                                    конференции, нажав на кнопку <span class="rt-font-bold">+10 мин</span>.</p>
                                <p class="rt-font-paragraph">Для расширенного управления конференцией необходимо нажать на
                                    кнопку <span class="rt-font-bold">Управление</span> и перейти к окну управления.</p>
                                <a name="manageWindow"/>
                                <h3 class="rt-font-h3 rt-font-bold sp-t-3 sp-b-1">Окно управления конференцией</h3>
                                <p class="rt-font-paragraph">В окне управления конференцией вам доступна следующая информация:</p>
                                <ul class="rt-ordered-list sp-t-1">
                                    <li class="rt-ordered-list__item">Тема и ответственное лицо конференции</li>
                                    <li class="rt-ordered-list__item">PIN-код конференции</li>
                                    <li class="rt-ordered-list__item">PIN-код лидера (если выбрана конференция с Лидером)</li>
                                    <li class="rt-ordered-list__item">Количество запланированных участников и количество
                                        подключившихся</li>
                                    <li class="rt-ordered-list__item">Список телефонных номеров подключившихся к
                                        конференции участников</li>
                                    <li class="rt-ordered-list__item">Статус: подключившийся участник может слушать и
                                        говорить или только слушать</li>
                                </ul>
                                <a name="manageFunctions"/>
                                <h3 class="rt-font-h3 rt-font-bold sp-t-3 sp-b-1">Функции управления конференцией</h3>
                                <p class="rt-font-paragraph">При присоединении к конференции у каждого участника
                                    показывается номер телефона. В этой же строке, в поле Имя, комментарий вы можете
                                    указать имя участника или любой другой комментарий.</p>
                                <p class="rt-font-paragraph">После того, как вы указали Имя, вы можете добавить данный
                                    контакт (имя, комментарий и номер телефона) в вашу <span class="rt-font-bold">Адресную
                                        книгу</span>, для этого нажмите кнопку <span class="rt-font-bold">Добавить в
                                        адресную книгу</span>.</p>
                                <p class="rt-font-paragraph">Кроме этого, вы можете отключить/включить микрофон у
                                    участника или отключить его от конференции. Вы можете отключить/включить микрофоны
                                    сразу всем участникам, воспользовавшись кнопками Включить/отключить всем микрофоны
                                    из нижнего ряда.</p>
                                <p class="rt-font-paragraph">При нажатии кнопки <span class="rt-font-bold">Отключить всех
                                    участников</span> вы отсоедините всех участников от конференции.</p>
                                <p class="rt-font-paragraph">Если во время конференции вам необходимо увеличить продолжительность
                                    конференции, воспользуйтесь кнопкой <span class="rt-font-bold">+10 мин</span>.</p>
                                <p class="rt-font-paragraph">Вы можете отслеживать оставшееся время до конца конференции.</p>
                            </section>
                            <section class="ac-help__section">
                                <h2 class="rt-font-h2 sp-b-1">Архив конференций</h2>
                                <a name="archive"/>
                                <h3 class="rt-font-h3 sp-b-1">Просмотр состоявшихся конференций</h3>
                                <p class="rt-font-paragraph">Для просмотра состоявшихся конференций необходимо перейти во
                                    вкладку <span class="rt-font-bold">Архив конференций</span>. В данном разделе вы можете
                                    просмотреть все состоявшиеся конференции за определенный период и сформировать отчет.
                                    Выберите интересующий вас период и нажмите кнопку <span class="rt-font-bold">Сформировать
                                        отчет</span>.</p>
                                <p class="rt-font-paragraph">Вы можете просмотреть следующую информацию:</p>
                                <ul class="rt-ordered-list sp-t-1">
                                    <li class="rt-ordered-list__item">Дата и время начала состоявшейся конференции</li>
                                    <li class="rt-ordered-list__item">Запланированная длительность конференции</li>
                                    <li class="rt-ordered-list__item">Ответственный за конференцию</li>
                                    <li class="rt-ordered-list__item">Тема конференции</li>
                                    <li class="rt-ordered-list__item">Символ, означающий, что данная аудиоконференция
                                        содержит файл(ы) записи, доступные для прослушивания и скачивания</li>
                                    <li class="rt-ordered-list__item">Суммарное время всех выбранных вами конференций</li>
                                </ul>
                                <p class="rt-font-paragraph sp-t-1">При нажатии на строку с конференцией развернется
                                    подробная информация  о состоявшейся конференции. На закладке
                                    <span class="rt-font-bold">Статистика конференции</span> отображается информация:
                                    количество участников, их телефонные номера  и трафик времени каждого из участников,
                                    общее суммарное время, проведенное в аудиоконференции.</p>
                                <p class="rt-font-paragraph">На закладке <span class="rt-font-bold">Запись конференции</span>
                                    отображается аудиофайл/перечень аудиофайлов с указанием:</p>
                                <ul class="rt-ordered-list sp-t-1">
                                    <li class="rt-ordered-list__item">Имя аудиозаписи</li>
                                    <li class="rt-ordered-list__item">Длительность (минут, секунд)</li>
                                    <li class="rt-ordered-list__item">Кнопка для выгрузки файла с указанием формата и размера файла</li>
                                    <li class="rt-ordered-list__item">По умолчанию отображается проигрыватель для прослушивания первого аудиофайла из перечня</li>
                                </ul>
                                <p class="rt-font-paragraph">Закладка <span class="rt-font-bold">Запись конференции</span>
                                    отображается только для аудиоконференций, которые содержат файл(ы) записи. Пользователь
                                    может прослушать аудиофайл(ы) непосредственно на портале, а также скачать аудиофайл(ы)
                                    к себе на компьютер.</p>
                                <p class="rt-font-paragraph">Для скачивания аудиофайла:</p>
                                <ul class="rt-ordered-list sp-t-1">
                                    <li class="rt-ordered-list__item">В браузерах Google Chrome, Opera, Mozilla Firefox,
                                        Microsoft Internet Explorer версии 10 и 11, необходимо кликнуть на Загрузить левой
                                        кнопкой мыши (ЛКМ)</li>
                                    <li class="rt-ordered-list__item">В браузерах Microsoft Internet Explorer версии 8 и 9
                                        необходимо кликнуть на <span class="rt-font-bold">Загрузить</span> правой кнопкой
                                        мыши (ПКМ) и выбрать <span class="rt-font-bold">Сохранить объект как</span></li>
                                </ul>
                                <p class="rt-font-paragraph sp-t-1">Все состоявшиеся конференции можно отсортировывать
                                    по необходимому вам признаку. Кроме этого, нужный вам отчет можно экспортировать в
                                    Exсel или распечатать.</p>
                            </section>
                            <section class="ac-help__section">
                                <h2 class="rt-font-h2 sp-b-1">Адресная книга</h2>
                                <a name="phonebook"/>
                                <h3 class="rt-font-h3 sp-b-1">Просмотр Адресной книги</h3>
                                <p class="rt-font-paragraph">Для просмотра Адресной книги необходимо перейти во вкладку
                                    <span class="rt-font-bold">Адресная книга</span>. Здесь вы можете просмотреть ранее
                                    добавленные контакты или добавить новые.</p>
                                <p class="rt-font-paragraph">Добавленные контакты вы можете редактировать или удалять,
                                    для этого найдите нужный вам контакт (через поиск по контактам или по первой букве
                                    имени контакта в алфавите) и справа от контакта нажмите на
                                    <span class="rt-font-bold">Редактировать</span> или
                                    <span class="rt-font-bold">Удалить</span>.</p>
                                <h3 class="rt-font-h3 sp-t-3 sp-b-1">Добавить новый контакт</h3>
                                <p class="rt-font-paragraph">Для создания нового контакта нажмите на кнопку
                                    <span class="rt-font-bold">Добавить новый контакт</span>. Заполните поля
                                    <span class="rt-font-bold">Имя, Фамилия</span> и <span class="rt-font-bold">Номер
                                        телефона</span> и нажмите кнопку <span class="rt-font-bold">Добавить в список</span>.</p>
                            </section>
                            <section class="ac-help__section">
                                <h2 class="rt-font-h2 sp-b-1">Настройки</h2>
                                <a name="systemTime"/>
                                <h3 class="rt-font-h3 sp-b-1">Что такое время системы?</h3>
                                <p class="rt-font-paragraph">Время системы — это время, которое вы привяжете к вашей учетной
                                    записи. По времени системы будут бронироваться и начинаться ваши конференции.</p>
                                <a name="localTime"/>
                                <h3 class="rt-font-h3 sp-t-3 sp-b-1">Местное время</h3>
                                <p class="rt-font-paragraph">При входе система автоматически определит ваше местоположение
                                    и переведет часы на местное (для вас) время. При этом, например: если два сотрудника
                                    организации пользуются системой под одним логином в Москве  и Владивостоке, то
                                    каждый для себя видит свое местное время.</p>
                                <a name="commonTime"/>
                                <h3 class="rt-font-h3 sp-t-3 sp-b-1">Единое время</h3>
                                <p class="rt-font-paragraph">Единое время необходимо устанавливать вручную. Вне зависимости
                                    от вашего местонахождения время системы будет настроено по единому для всех времени,
                                    например, по Московскому (GMT +4:00).</p>
                                <a name="chosenLocation"/>
                                <h3 class="rt-font-h3 sp-t-3 sp-b-1">Избранные города</h3>
                                <p class="rt-font-paragraph">Вы можете добавить 5 избранных городов, время которых будет
                                    отображаться в интерфейсе системы. Это необходимо для того, чтобы вы знали, по какому
                                    времени начнется ваша запланированная конференция в этих городах.</p>
                                <p class="rt-font-paragraph">Для добавления города нажмите на кнопку
                                    <span class="rt-font-bold">Добавить</span>, выберите из списка страну, затем город.
                                    Нажмите кнопку <span class="rt-font-bold">Добавить город</span>.</p>
                                <a name="passChange"/>
                                <h3 class="rt-font-h3 sp-t-3 sp-b-1">Смена пароля</h3>
                                <p class="rt-font-paragraph">Для смены пароля перейдите во вкладку
                                    <span class="rt-font-bold">Сменить пароль</span>. Укажите свой старый пароль, затем
                                    новый два раза. Нажмите на кнопу Сменить пароль.</p>
                                <p class="rt-font-paragraph">При следующей авторизации вход в систему под вашим логином
                                    осуществится по новому паролю.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const componentsList = {};
    export default {
        name: "AudioConferenceHelp",
        components: {
            componentsList
        },
        data() {
            return {
                links: {},
                linksTarget: {}
            }
        },
        mounted() {
            this.links = this.$refs.navigation.querySelectorAll('a');
            this.linksTarget = this.$refs.content.querySelectorAll('a');
            this.links.forEach(item => {
                item.addEventListener('click', this.smoothScroll);
            });
            document.querySelector('.pseudo-bg').style.left = 0 - document.querySelector('.pseudo-bg').getBoundingClientRect().left + 'px';
        },
        created() {},
        methods: {
            smoothScroll($event) {
                $event.preventDefault();
                $event.stopPropagation();
                let currentPosition = this.$refs.content.scrollTop;
                let targetPosition;
                this.linksTarget.forEach(item => {
                    if(item.name == $event.target.hash.slice(1)) {
                        targetPosition = item.offsetTop;
                    }
                });
                console.log(targetPosition)
                if (currentPosition < (targetPosition - 1) || currentPosition > (targetPosition + 1)) {
                    if (currentPosition < targetPosition) {
                        let int = setInterval(() => {
                            if (currentPosition > (targetPosition - 10)) currentPosition += 1;
                            else if (currentPosition > (targetPosition - 100)) currentPosition += 7;
                            else if (currentPosition > (targetPosition - 1000)) currentPosition += 49;
                            else if (currentPosition > (targetPosition - 10000)) currentPosition += 343;
                            this.$refs.content.scrollTo(0, currentPosition);
                            if (currentPosition >= targetPosition) {
                                setTimeout(() => {
                                    clearInterval(int)
                                }, 7)
                            }
                        }, 15);
                    } else {
                        let int = setInterval(() => {
                            if (currentPosition < (targetPosition + 10)) currentPosition -= 1;
                            else if (currentPosition < (targetPosition + 100)) currentPosition -= 7;
                            else if (currentPosition < (targetPosition + 1000)) currentPosition -= 49;
                            else if (currentPosition < (targetPosition + 10000)) currentPosition -= 343;
                            this.$refs.content.scrollTo(0, currentPosition);
                            if (currentPosition <= targetPosition) {
                                setTimeout(() => {
                                    clearInterval(int)
                                }, 7)
                            }
                        }, 15);
                    }
                }
            }
        }
    };
</script>