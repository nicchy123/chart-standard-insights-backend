export interface IAnswer {
    _id: string
    submissionId: number
    questionIndex: number
    answer: string
    other: boolean
    otherField: string
    survey: string
  }