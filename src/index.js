import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <App />,
  document.getElementById('root')
);



/**
 * React 第一个实例
 */
// function Hello(props) {
//   return <h1>Hello World!</h1>;
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));



/**
 * React 元素渲染
 */
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);



/**
 * React JSX
 */
// var arr = [
//   <h1>菜鸟教程</h1>,
//   <h2>学的不仅是技术，更是梦想！</h2>,
// ];
// ReactDOM.render(
//   <div>{arr}</div>,
//   document.getElementById('root')
// );



/**
 * React Component 组件
 */
// function HelloMessage(props) {
//   return <h1>Hello {props.name}!</h1>;
// }
// const element = <HelloMessage name="Runoob"/>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// 复合组件
// // 函数定义组件
// function Name(props) {
//   return <h1>网站名称：{props.name}</h1>;
// }
// function Url(props) {
//   return <h1>网站地址：{props.url}</h1>;
// }
// //  ES6 class 定义组件
// class Nickname extends React.Component {
//   render() {
//     return <h1>网站小名：{this.props.nickname}</h1>;
//   }
// }
// function App2() {
//   return (
//   <div>
//       <Name name="菜鸟教程" />
//       <Url url="http://www.runoob.com" />
//       <Nickname nickname="Runoob" />
//   </div>
//   );
// }
// ReactDOM.render(
//    <App2 />,
//   document.getElementById('root')
// );



/**
 * React State 状态
 */
// function FormattedDate(props) {
//   return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
// }
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
 
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
 
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
 
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
 
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }
// function App3() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }
// ReactDOM.render(<App3 />, document.getElementById('root'));



/**
 * React Props
 */
// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.name}</h1>
//     );
//   }
// }
// // 通过组件类的 defaultProps 属性为 props 设置默认值
// HelloMessage.defaultProps = {
//   name: 'Runoob'
// };
// const element = <HelloMessage/>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// Props 验证
// 如果类型不符控制台会抛出警告
// var title = "菜鸟教程";
// var title = 123;
// class MyTitle extends React.Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.title}</h1>
//     );
//   }
// }
// MyTitle.propTypes = {
//   title: PropTypes.string
// };
// ReactDOM.render(
//     <MyTitle title={title} />,
//     document.getElementById('root')
// );



/**
 * React 事件处理
 */
// 超链接
// function ActionLink() {
//   function handleClick(e) {
//     // 阻止链接默认打开一个新页面
//     e.preventDefault();
//     console.log('链接被点击');
//   }
 
//   return (
//     <a href="#" onClick={handleClick}>
//       点我
//     </a>
//   );
// }
// ReactDOM.render(
//   <ActionLink />,
//   document.getElementById('root')
// )

// 事件处理器 bind绑定的方法
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
 
//     // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
//     this.handleClick = this.handleClick.bind(this);
//   }
 
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
 
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// 箭头函数 属性初始化器语法
// class LoggingButton extends React.Component {
//   // 这个语法确保了 `this` 绑定在  handleClick 中
//   // 这里只是一个测试
//   handleClick = () => {
//     console.log('this is:', this);
//   }
 
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }
// ReactDOM.render(
//   <LoggingButton />,
//   document.getElementById('root')
// );

// 在回调函数中使用 箭头函数
// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }
 
//   render() {
//     //  这个语法确保了 `this` 绑定在  handleClick 中
//     return (
//       <button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </button>
//     );
//   }
// }
// ReactDOM.render(
//   <LoggingButton />,
//   document.getElementById('root')
// );

// 向事件处理程序传递参数
// class Popper extends React.Component{
//   constructor(){
//       super();
//       this.state = {name:'Hello world!'};
//   }
  
//   preventPop(name, e){    //事件对象e要放在最后
//       e.preventDefault();
//       alert(name);
//   }
  
//   render(){
//       return (
//           <div>
//               <p>hello</p>
//               {/* 通过 bind() 方法传递参数。 */}
//               <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
//           </div>
//       );
//   }
// }
// ReactDOM.render(
//   <Popper />,
//   document.getElementById('root')
// )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
