import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <p>
        1. ELEGÍ TU COMIDA. Más de 50 gustos.
      </p>
      <p>
        2. HACÉ TU PEDIDO. Es rápido y fácil! Podés pagar online o en la entrega.
      </p>
      <p>
        3. RECIBÍ TU COMIDA. Entregamos el pedido en tu puerta o retirás por el local.
      </p>
    </section>
  );
};

export default MealsSummary;
