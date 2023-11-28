import { constants } from '@monorepo-demo/common';

export function App() {
  const companyName: string = constants.COMPANY_NAME;

  return (
    <div>
      <h1>
        <span> Hello there, </span>
        Welcome {companyName} 👋
      </h1>
    </div>
  );
}

export default App;
