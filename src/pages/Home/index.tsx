import { zodResolver } from '@hookform/resolvers/zod';
import { HandPalm, Play } from 'phosphor-react';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { CyclesContext } from '../../contexts/CyclesContext';
import { CountDown } from './CountDown';
import { NewCycleForm } from './NewCycleForm';
import * as S from './styles';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export const Home = () => {
  const { activeCycle, createNewCycle, interrupCurrentCycle} = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <S.StopButton onClick={interrupCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </S.StopButton>
        ) : (
          <S.StartButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Iniciar
          </S.StartButton>
        )}
      </form>
    </S.HomeContainer>
  );
};
