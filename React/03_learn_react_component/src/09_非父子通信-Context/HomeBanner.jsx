import ThemeContext from "./context/theme-context";

function HomeBanner () {
  return (
    // 函数式组件中使用Context共享数据
    <ThemeContext.Consumer>
      {
        value => {
          return (
            <h2>Banner theme:{ value.color}</h2>
          )
        }
      }
    </ThemeContext.Consumer>
  )
}

export default HomeBanner