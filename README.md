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

Сервер запустился на порту 3000...

## Сборка в Docker

#### Создаем image

`docker build -t sass .`

#### Создаем и запускаем контейнер

`docker run -d -p 3000:3000 --rm --name sass sass`

#### Остановить контейнер

`docker stop sass`

#### Удалить image

`docker rmi sass`
