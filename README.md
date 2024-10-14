При локальной разработке лучше не коммитить файлы из `src/generated`, т.к. они комитятся отдельно командой `npm run commit-api-update`.

## Публикация пакета

1. Перейти в `master`
2. Запустить `npm run create-new-version`
3. Запушить коммит
4. Дождаться прохождения CI

Основной flow:

## Ошибка при генерации Error: Duplicate schema names detected

Ошибка возникает, если Orval сгенерировал два одинаковых типа.
Например, из Entity.schema_payload и EntitySchema.payload будет сгенерирован тип EntitySchemaPayload.
Нужно найти конфликт и попросить backend переименовать поле в схеме.
