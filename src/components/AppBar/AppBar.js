import { useDispatch } from 'react-redux';

import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Button } from 'components/Button/Button';

import css from './AppBar.module.css';
import { deleteAllCompleted } from "redux/tasksSlice";

export const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Delete completed</h2>
        <Button onClick={() => dispatch(deleteAllCompleted())}>
          Delete completed
        </Button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
