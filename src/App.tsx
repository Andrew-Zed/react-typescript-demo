import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div className="App">
      <div>
        <Greet name="Magneto" messageCount={10} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Oscar goes to Dicaprio</Heading>
        </Oscar>
        <Greet name="Andrew" isLoggedIn={false} />
      </div>

      <div className="button">
        <Button
          handleClick={(event, id) => {
            console.log('Button clicked', event, id);
          }}
        />
        <Input value='' handleChange={(event) => console.log(event)} />
      </div>
      <Container styles={{ border: '1px solid black', padding: '1rem' }}/>
    </div>
  );
}

export default App;
