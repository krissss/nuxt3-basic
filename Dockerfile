# build 用的临时镜像
FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /app
# 安装依赖
COPY .npmrc package.json pnpm-lock.yaml ./
RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts
# 复制项目代码
COPY . /app
# build with env
ARG APP_ENV=development
RUN npx nuxi build --dotenv .env.$APP_ENV

# 最终镜像
FROM node:18-alpine

WORKDIR /app
# 从临时镜像中获取输出
COPY --from=BUILD_IMAGE /app/.output ./.output
# 端口
EXPOSE 3000
# 启动服务
CMD ["node", ".output/server/index.mjs"]
