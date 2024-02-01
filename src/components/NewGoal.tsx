import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null); //HTMLInputElement se importa desde React para que despues no arroje error cuando se llama al valor
    const summary = useRef<HTMLInputElement>(null);
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); //para prevenir comportamiento por defecto del navegador que envia una request a HTTP

        const enteredGoal = goal.current!.value; //el ! es para decirle que sabemos que no será nulo
        if (enteredGoal == "") {
            alert("Por favor completa el campo nombre.");
            return false;
        }
        const enteredSummary = summary.current!.value; //el ! es para decirle que sabemos que no será nulo
        
        event.currentTarget.reset()

        onAddGoal (enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Nombre</label>
                <input id='goal' type='text' ref={goal}  />
            </p>
            <p>
                <label htmlFor='summary'>Comentario:</label>
                <input id='summary' type='text' ref={summary} required />
            </p>
            <p>
                <button>Agregar</button>
            </p>
        </form>
    )
}