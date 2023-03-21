import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import { Play } from 'phosphor-react';
import * as S from './styles';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
});

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

export const Home = () => {

  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data:NewCycleFormData) {
    console.log(data);
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <S.HomeContainer>

      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            type="text"
            id="task"
            list='task-suggestions'
            placeholder='Dê um nome para o seu projeto'
            {...register('task')}
          />

          <datalist id='task-suggestions'>
            <option value="Aula de JS"/>
            <option value="Aula de React"/>
            <option value="Trabalhar no Projeto..."/>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder='00'
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', {valueAsNumber: true})}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountDownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountDownContainer>

        <S.StartButton disabled={isSubmitDisabled} type="submit">
          <Play size={24}/>
          Iniciar
        </S.StartButton>
      </form>
    </S.HomeContainer>
  );
};
