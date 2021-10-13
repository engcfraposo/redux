import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from './store';
import { getCeps } from './store/ducks/ceps/actions';
import { switchA, switchB, switchC, switchD } from './store/ducks/switchs/actions';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state: ApplicationState) => state.switchs
  )

  const { local, loading } = useSelector(
    (state: ApplicationState) => state.ceps
  )
  
  const onChange = (key: string) => {
    switch (key) {
      case "A":
        dispatch(switchA())
        break;
      case "B":
        dispatch(switchB())
        break;
      case "C":
        dispatch(switchC())
        break;
      case "D":
        dispatch(switchD())
        break;
      default:
        break;
    }
  }

  useEffect(()=>{
    dispatch(getCeps("a"))
  },[])

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
      <div>
        {!loading && <p>{local?.cep}</p>}
      </div>
    </div>
  );
}

export default App;
