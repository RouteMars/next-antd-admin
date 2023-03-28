# Admin

---
(작성일자 - 2023.03.28)

### 주요 기능

- [Next.JS](https://nextjs.org/) (React 웹 프레임워크)
- [Ant Design](https://ant.design/) (디자인)
- [Redux-Toolkit](https://redux-toolkit.js.org/) (상태관리)

### 프로젝트 구조

```text
├── locales (i18n)
│   ├── en
│   └── ko
├── public
├── src
│   ├── api
│   ├── component
│   ├── constant
│   ├── hook
│   ├── layout
│   ├── pages
│   ├── redux
│   ├── template
│   ├── type
│   └── util
├── .env.*
├── i18n.json
├── next.config.ts
└── package.json
```

### 코드 스타일

- eslint + prettier 사용
    - 프로젝트 내에 적용되어 있는 스타일 가이드로 진행
    - 개별로 사용중인 IDE 에 적용하여 작업 진행
        - IntelliJ - [ESLint](https://www.jetbrains.com/help/idea/eslint.html), [Prettier](https://www.jetbrains.com/help/idea/prettier.html)
        - VSCode - [ESLint](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting), [Prettier](https://www.alphr.com/use-prettier-vs-code/)

### 프로젝트 실행

- Development
  ```text
  yarn dev
  ```
- Product
  ```text
  yarn build
  yarn start
  ```

### Versions

- Node : v18.4.0
- Yarn : 1.22.19
