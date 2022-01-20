<template>
  <div class="rt-container">
    <div class="app-content rt-col-12">
      <div class="app-title baza-title">Использование типографики</div>
      <div class="baza-desc" style="max-width:800px">
Динамические, меняющиеся в зависимости от разрешения экрана стили текста используются только для контента — заголовков, подзаголовков, текстовых блоков.

В базовых компонентах ui kit внутри элементов типографика остается неизменной и не зависит от разрешения экрана. Кнопки, поля ввода и другие подобные элементы имеют оптимальный для всех разрешений размер.
      </div>
      <div class="app-title baza-title">Типографская сетка для лендингов и страниц сайта rt.ru</div>
      <div class="app-body">
        <div class="baza-table__wrap">
          <table class="baza-table">
            <thead><tr><th>Описание и CSS-класс</th><th>Предпросмотр (меняй размер окна)</th></tr></thead>

            <tr class="baza-table__caption"><td colspan="2">Заголовки</td></tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Заголовок первого уровня</h4>
                <div class="class-name">.font-h1</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h1">H1 - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr class="baza-table__row-clean">
              <td colspan="2">Может быть использован на странице только один раз для самого главного сообщения.</td>
            </tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Заголовок второго уровня</h4>
                <div class="class-name">.font-h2</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h2">H2 - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Заголовок третьего уровня</h4>
                <div class="class-name">.font-h3</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h3">H3 - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Заголовок четвертого уровня</h4>
                <div class="class-name">.font-h4</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h4">H4 - <span class="bpname"></span></div>
              </td>
            </tr>

            <tr class="baza-table__caption"><td colspan="2">Параграф L</td></tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Подзаголовок большой</h4>
                <div class="class-name">.font-h-l</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h-l">Headline L - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Текст большой</h4>
                <div class="class-name">.font-t-l</div>
                <p>&nbsp;&nbsp;font-weight normal</p>
              </td>
              <td>
                <div class="font-t-l">Text L - <span class="bpname"></span></div>
              </td>
            </tr>

            <tr class="baza-table__caption"><td colspan="2">Параграф M</td></tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Подзаголовок стандартный</h4>
                <div class="class-name">.font-h-m</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h-m">Headline M - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Текст стандартный</h4>
                <div class="class-name">.font-t-m</div>
                <p>&nbsp;&nbsp;font-weight normal</p>
              </td>
              <td>
                <div class="font-t-m">Text M - <span class="bpname"></span></div>
              </td>
            </tr>

            <tr class="baza-table__caption"><td colspan="2">Параграф S</td></tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Подзаголовок маленький</h4>
                <div class="class-name">.font-h-s</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h-s">Headline S - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Текст маленький</h4>
                <div class="class-name">.font-t-s</div>
                <p>&nbsp;&nbsp;font-weight normal</p>
              </td>
              <td>
                <div class="font-t-s">Text S - <span class="bpname"></span></div>
              </td>
            </tr>

            <tr class="baza-table__caption"><td colspan="2">Параграф XS</td></tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Подзаголовок супер-маленький</h4>
                <div class="class-name">.font-h-xs</div>
                <p>&nbsp;&nbsp;font-weight <b>bold</b></p>
              </td>
              <td>
                <div class="font-h-xs">Headline XS - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="baza-table__row-title">Текст супер-маленький</h4>
                <div class="class-name">.font-t-xs</div>
                <p>&nbsp;&nbsp;font-weight normal</p>
              </td>
              <td>
                <div class="font-t-xs">Text XS - <span class="bpname"></span></div>
              </td>
            </tr>

            <tr class="baza-table__caption"><td colspan="2">Подпись</td></tr>
            <tr>
              <td>
                <div class="class-name">.font-lb</div>
                <p>&nbsp;&nbsp;font-weight normal</p>
              </td>
              <td>
                <div class="font-lb">Label - <span class="bpname"></span></div>
              </td>
            </tr>
            <tr class="baza-table__row-clean">
              <td colspan="2">В макетах встречается как Text S</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
baseColor = #19417A
bg = #F3F3F4

.baza-title
  color baseColor
  font-size 32px
  font-weight 500
  line-height 34px

.baza-desc
  color baseColor
  font-size 16px
  line-height 28px
  white-space pre-wrap

.baza-table
  color baseColor
  tr + tr
    td
      border-top 1px solid rgba(16, 24, 40, .1)
  th
    font-size 16px
    line-height 28px
    padding-bottom 16px
  td
    font-size 14px
    line-height 24px
    padding-top 28px
    padding-bottom 28px
  th,
  td
    padding-left 20px
    padding-right 20px
  &__caption
    background bg
    td
      border-top none !important
      font-size 24px
      line-height 40px
      padding-top 24px
      padding-bottom 24px
  &__row
    &-title
      font-size 16px
      font-weight 500
      line-height 28px
    &-clean
      display block
      margin-top -20px
      td
        border-top none !important
        padding-top 0
  @media (max-width: 767px)
    margin-left -20px
    margin-right -20px

.bpname
  display inline-block
  @media (max-width: 767px)
    &:before
      content 'Mob'
  @media (min-width: 768px) and (max-width: 1024px)
    &:before
      content 'Tab'
  @media (min-width: 1025px) and (max-width: 1279px)
    &:before
      content 'WebS'
  @media (min-width: 1280px)
    &:before
      content 'Web'
</style>
