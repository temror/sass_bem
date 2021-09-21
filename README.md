# Сайт подстаканника

Демонстрационный сайт 

## Использованные технологии:
sass, bem, webpack, docker, node.js, express

## Запуск

### Dev

#### webpack-dev-server
`npm run server`

#### dev mode
`npm run dev`

### Prod

#### Собираем webpack и запускаем сервер
`npm run build`

`npm start`

## Сборка в Docker

#### Создаем image

`docker buils -t sass .`

#### Создаем и запускаем контейнер

`docker run -d -p 3000:3000 --rm --name sass sass`
