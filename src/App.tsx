import Button from "./components/ui/Button";

const App = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Button variant="primary" size="sm">
        Angular
      </Button>
      <Button variant="secondary" size="md">
        React
      </Button>
      <Button className="bg-amber-400" size="lg">
        Vue
      </Button>
    </main>
  );
};

export default App;
