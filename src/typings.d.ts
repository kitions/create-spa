declare module "*.css";
declare module "*.less";
declare const config: any;
declare const REACT_APP_ENV: "dev" | "testbuild" | "prod" | false; // 是否需要代理，dev和 false是不需要代理
declare const UMI_ENV: "dev" | "testbuild" | "prod"; // 区分环境配置
