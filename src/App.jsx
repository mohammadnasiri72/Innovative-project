import { Link } from "react-router-dom";





function App() {

  return (
    <>
      <h1>پروژهای خلاقانه ساخته شده با ری اکت : </h1>
      <Link className='text-blue-600' to="/bobsponge">1- پروژه خلاقانه باب اسفنجی</Link>
      <br />
      <Link className='text-blue-600' to="/showMenu">2- پروژه خلاقانه نمایش منو</Link>
      <br />
      <Link className='text-blue-600' to="/themeColor">2- پروژه خلاقانه تم رنگی</Link>

    </>
  );
}

export default App;
