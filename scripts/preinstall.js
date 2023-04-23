if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.log(
    "\n\x1b[31m[Package Manager Error]\x1b[0m" +
      "\x1b[33m This project requires `pnpm` to install dependencies!\x1b[0m"
  )
  console.log(
    "\x1b[31m[包管理器错误]\x1b[0m" +
      "\x1b[33m 本项目只能使用 `pnpm` 管理依赖！\x1b[0m\n"
  )
  process.exit(1)
}
