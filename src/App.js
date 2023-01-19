import Header from "./Component/Header";
import Login from "./Component/Login";
import Logo from "./Component/Logo";


const initKakao = () => {
  const jsKey = "470691419cbac6fe76de0f7d0600a3bf";
  const Kakao = window.Kakao;
  if (Kakao && !Kakao.isInitialized()) {
    Kakao.init(jsKey);
    console.log(Kakao.isInitialized());
  }
};


initKakao();

function App() {
  return (
    <div className='page'>
      <Header />
      <Login />
      <Logo />
    </div>
  );
}
export default App;