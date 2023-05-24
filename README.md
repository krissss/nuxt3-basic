# Nuxt 3 Template

[官方文档](https://nuxt.com/docs/getting-started/introduction)

[中文文档](https://nuxt.com.cn/docs/getting-started/introduction)

features:

- eslint
- stylelint
- prettier
- husky
- lint-staged
- sass

## 开发

先安装 pnpm: 未安装的通过 `npm install -g pnpm` 安装

```bash
# 安装依赖
pnpm install

# dev
pnpm dev
```

## 常用命令

- 新建页面：`npx nuxi add page xx/yy`
- 新建组件：`npx nuxi add component Xxx/Yyy`
- 其他命令参考：[文档](https://nuxt.com/docs/api/commands/add)

## docker

- docker build -t [name] --build-arg APP_ENV=[env] .
- docker push [name]

docker-compose.yml 例子

```yml
version: '3.7'

services:
  web:
    image: xxx/xx
    container_name: web
    restart: always
    ports:
      - '{对外的端口}:3000'
```
