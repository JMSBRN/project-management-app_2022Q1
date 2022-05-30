# project-management-app
https://project-menagement-app-team-task-react-q1-2022.netlify.app/

# Points

## Welcome route - max 7 балов
- ✔️  На приветственной странице должны отображаться общие сведения о команде, проекте, курсе. 1 балл
- ❌  В верхнем правом углу должны быть доступны 2 кнопки Sign In и Sign Up. 1 балл
- [&check;] При наличии неистёкшего токена, заменить кнопки Sign In и Sign Up на кнопку "Go to Ma Page". 2 балла
- [&check;] При истечении срока жизни токена - пользователь автоматически должен быть пенаправлен на "Welcome page". 2 балла
- [&check;] Нажатие на кнопку Sign In / Sign Up автоматически перенаправляет нас на роут с формой длSign In / Sign Up. 1 балл
- [&check;] ign In / Sign Up - max 8 балов
- [&check;]  Кнопки для Sign In / Sign Up / Sign Out есть везде где они предусмотрены 2 балл
- [&check;]  Поля форм должны быть реализованы в соответствии с api backend приложения. Должна бы реализована валидация. 4 - [] баллов
- [&check;] При успешном логине пользователь должен быть перенаправлен на "Main route" 1 балл
- [&check;] Если пользователь залогинен, то при попытке пройти на эти роуты он должен быть пенаправлен на Main route. 1 баллов.
### Итого: 7/7
 ## Main route max 8 балов
- [&check;]  Функционал создания борды 2 балла
- [&check;] Отображает борды списком. 1 балл
- [&check;] Борды отображаются с маленьким превью из доступной информации (title, description, et. По клику на элемент - - [] переходим на board item (Board route). Также должна прутствовать кнопка для удаления борды. 1 балл
- [&check;] При попытке удаления борды мы должны получить Confirmation modal в котором должны подтвердить серёзность наших намерений. Confirmation modal должен быть универсальным компонентом (одним на всё приложение). 1 балл
- [&check;] Реализован функционал редактирования профиля пользователя. 3 балла.
### Итого: 8/8
## Board route max 26 балов
- [&check;] Должны присутствовать кнопки для создания колонки. 1 балл
- [&check;] Если к борде привязана хотябы одна колонка - отображаем / делаем доступной также и кнопку создания таски. 1 балл
- [&check;] Для создания колонки / таска используются формы, отображаемые в модальных окнах. 3 балла
- [&check;] При переполнении количеством тасок колонки - скролл внутри колонки. 2 балл
- [&check;] Страница на данном роуте не должна иметь вертикального скролла. 1 балл
- [&check;] С помощью drag-n-drop мы можем менять колонки местами. 3 балла
- [&check;] С помощью drag-n-drop мы можем менять очерёдность тасок в рамках колонки. 3 балла
- [&check;]  С помощью drag-n-drop мы можем менять принадлежность таски к колонке. 5 балл
- [&check;] Реализован функционал просмотра, и редактирования всего содержимого таски. 3 балла
- [&check;] Реализовать возможность удалить таск. Кнопка delete task должна быть расположена в удобном для пользователя месте.
- [&check;] При нажатии: confirmation modal -> удаление. 1 балл
- [&check;] Вверху колонки должен быть Title. При нажатии на него он из текста должен превращаться в input, справа от которого  будут кнопки Submit и Cancel. После ввода текста в input и нажатия submit - Title колонки должен поменяться. 2 балла
- [&check;]  На колонке должна присутствовать кнопка delete. По нажатию - Confirmation modal - при апруве - удаление. 1 балл
- Итого: 26/26
## Общие требования max 11 балов
 - [&check;] Ошибки со стороны BE - (Not found, unhandled rejection, etc) должны отображаться пользователю в user-friendly формате (toast, pop-up или что-то подобное, на ваше усмотрение). 5 балла
 - [&check;] Локализация 2 балла
 - [&check;] Backend задеплоен 1 балл
 sticky-Header 1 балл
 ## Доп. функционал (соразмерный глобальному поиску) 2 балла
 ### Штрафы
 - Присутствие дефолтной реактовской favicon - 1 балл
 - Присутствие ошибок и ворнингов в консоли - 2 балла
 - Наличие в консоли результатов выполнения console.log - 2 балла
 - Наличие @ts-ignore или any (search через github по репозиторию) - 1 балл за каждый случай
 - коммиты после дедлайна - 20 балло
## Доп. функционал
- [&check;] Доп. функционал (соразмерный глобальному поиску) 2 балла
### Итого: 2/2
<hr>
  Общй итог : 100/100 ??
<hr>
