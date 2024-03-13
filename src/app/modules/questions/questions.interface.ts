export interface IQuestions {
    _id: string
    question: string
    questionType: string
    chartType: string
    questionIndex: number
    survey: string
    questionText: string[]
    islibraryQuestion: boolean
    isHidden: boolean
    excludedCharts?: any[]
    comments?: any[]
    createdAt: string
    updatedAt: string
    analysis?: string
    imgList?: string[]
    otherOptions?: string[]
  }
  