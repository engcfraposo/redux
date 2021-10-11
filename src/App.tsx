import Switch from '@mui/material/Switch';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

interface IChecked  {
  A: boolean,
  B: boolean,
  C: boolean,
  D: boolean,
}

function App() {
  const [checked, setChecked] = useState<IChecked>({
    A: false,
    B: false,
    C: false,
    D: false
  })

  const onChange = (key: string) => {
    switch (key) {
      case "A":
        setChecked(
          {...checked, A: !checked.A}
        )
        break;
        case "B":
          setChecked(
            {...checked, B: !checked.B}
          )
        break;
        case "C":
          setChecked(
            {...checked, C: !checked.C}
          )
        break;
        case "D":
          setChecked(
            {...checked, D: !checked.D}
          )
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <Switch {...label} 
        onChange={() => onChange("A")} 
        checked={checked.A} 
      />
      <Switch {...label} 
        onChange={() => onChange("B")} 
        checked={checked.B} 
      />
      <Switch {...label} 
        onChange={() => onChange("C")} 
        checked={checked.C} 
      />
      <Switch {...label} 
       onChange={() => onChange("D")} 
       checked={checked.D} 
      />
    </div>
  );
}

export default App;
