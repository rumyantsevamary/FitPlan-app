/**
 * Типы упражнений.
 * POWER - Силовые.
 * CARDIO - Кардио.
 */
export enum ETrainingType {
  POWER = 'POWER',
  CARDIO = 'CARDIO'
}
/**
 * Модель данных Упражнения.
 * @prop {string} id ID.
 * @prop {string} name Наименованиею
 * @prop {ETrainingType} type Тип упражнения.
 * @prop {string[]} muscules Задействованные группы мышц.
 * @prop {string} equipment Оборудование.
 * @prop {string} description Описание.
 */
export interface ITraining {
  id: string;
  name: string;
  type: ETrainingType;
  muscules: string[];
  equipment: string;
  description: string;
}
