function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
const TestPage = () => {
  return (
    <div>
      <h1>Тест</h1>
      <p>форма</p>
	  <MyButton />
    </div>
  );
};

export default TestPage;