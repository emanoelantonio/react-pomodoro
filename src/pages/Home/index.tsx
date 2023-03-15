import { Play } from 'phosphor-react';
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartButton, TaskInput } from './styles';

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" list='task-suggestions' placeholder='Dê um nome para o seu projeto'/>

          <datalist id='task-suggestions'>
            <option value="Aula de JS"/>
            <option value="Aula de React"/>
            <option value="Trabalhar no Projeto..."/>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartButton type="submit">
          <Play size={24}/>
          Iniciar
        </StartButton>
      </form>
    </HomeContainer>
  );
};