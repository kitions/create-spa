# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)

> ps： node版本需14以上

## 启动项目

```bash
nvm use
pnpm
pnpm start   默认开启代理
```
> 可通过.env文件修改 端口号
> REACT_APP_ENV 区分是否需要本地代理，dev 是需要代理的。其他环境不需要代理 UMI_ENV 区分环境，根据环境取配置文件


### ⚠️注意

config.dev.prod.ts 线上配置 <br>
config.dev.testbuild.ts 测试配置

## 开启eslint

脚手架已内置一些eslint规则 [点击查看](https://github.com/umijs/umi/blob/master/packages/lint/src/config/eslint/rules/recommended.ts)

## 插件

[插件](https://umijs.org/docs/api/plugin-api)


