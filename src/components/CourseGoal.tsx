// import { type ReactNode } from 'react';

// interface CourseGoalProps {
//     title: string;
//     children: ReactNode; //le asignamos el tipo ReactNode ya que es un tipo JSX
// };

//Una alternativa es: PropsWithChildren ya incluye children
//con el typo ReactNode, solo falta definir el tipo de title

import { type PropsWithChildren } from 'react';
type CourseGoalProps = PropsWithChildren<{ 
    title: string;
    onDelete: (id: number) => void;
    id: number;
}>;

export default function CourseGoal({
    title, 
    children,
    onDelete,
    id
}: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)} >Eliminar</button>            
        </article>
    )
}

//Otra opcion de hacer lo mismo de arriba es: no es mejor ni peor 

// import {type FC, type PropsWithChildren } from 'react';
// type CourseGoalProps = PropsWithChildren<{ title: string}>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children}) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>            
//         </article>
//     );
// };

// export default CourseGoal;