import Switch from '@mui/material/Switch';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div>
      <Switch {...label} 
        onChange={
          () => setChecked(!checked)
        } 
        checked={checked} 
      />
      <Switch {...label} 
        onChange={
          () => setChecked(!checked)
        } 
        checked={checked} 
      />
      <Switch {...label} 
        onChange={
          () => setChecked(!checked)
        } 
        checked={checked} 
      />
      <Switch {...label} 
        onChange={
          () => setChecked(!checked)
        } 
        checked={checked} 
      />
    </div>
  );
}

export default App;
