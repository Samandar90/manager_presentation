# Kamilovs' Clinic — Strategy Presentation

Статический premium-сайт презентации стратегии развития клиники. Работает без сборки — только HTML, CSS и JavaScript.

**Live:** [https://samandar90.github.io/manager_presentation/](https://samandar90.github.io/manager_presentation/)

## Структура

```
index.html      — разметка всех секций
style.css       — стили и анимации
script.js       — навигация, scroll, reveal, фильтры
assets/
  icons/        — favicon
  images/       — OG preview
```

## Локальный просмотр

Откройте `index.html` в браузере или используйте простой сервер:

```bash
# Python
python -m http.server 8080
```

## GitHub Pages

1. Репозиторий: [Samandar90/manager_presentation](https://github.com/Samandar90/manager_presentation)
2. **Settings → Pages** → Source: ветка **`gh-pages`**, папка **`/ (root)`**
3. Загрузите файлы в ветку `gh-pages` (через Git или push)

Файлы в корне ветки `gh-pages` должны содержать: `index.html`, `style.css`, `script.js`, `assets/`, `.nojekyll`.

## Секции

Hero · Обзор · Команда · Отделы · Реклама · Блогеры · Операции · Финансы · 30 дней · IT · Открытие · Итог

## License

Private — Kamilovs' Clinic internal presentation.
