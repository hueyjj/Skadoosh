import { INC_COUNTER, DEC_COUNTER } from "../constants/CounterActions";

export const increment = () => ({ 
  type: INC_COUNTER,
});

export const decrement = () => ({ 
  type: DEC_COUNTER,
});
