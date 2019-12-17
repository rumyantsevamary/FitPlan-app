/**
 * Типы упражнений.
 * POWER - Силовые.
 * CARDIO - Кардио.
 */
export enum EExerciseType {
  POWER = 'POWER',
  CARDIO = 'CARDIO'
}
/**
 * Модель данных Упражнения.
 * @prop {string} id ID.
 * @prop {string} name Наименованиею
 * @prop {EExerciseType} type Тип упражнения.
 * @prop {string[]} muscules Задействованные группы мышц.
 * @prop {string} equipment Оборудование.
 * @prop {string} description Описание.
 */
export interface IExercise {
  id: string;
  name: string;
  type: EExerciseType;
  muscules: string[];
  equipment: string;
  description: string;
}
