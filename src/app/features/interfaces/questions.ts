export interface QuestionAllRes {
    message: string
    questions: AllQuestion[]
}

export interface QuestionRes {
    questions: Question[]
}

export interface AllQuestion {
    answers: Answer[]
    type: string
    _id: string
    question: string
    correct: string
    subject: Subject
    exam: Exam
    createdAt: string
}
export interface Question {
    answers: Answer[]
    _id: string
    question: string
    correct: string
}

export interface Answer {
    answer: string
    key: string
}

export interface Subject {
    _id: string
    name: string
    icon: string
    createdAt: string
}

export interface Exam {
    _id: string
    title: string
    duration: number
    subject: string
    numberOfQuestions: number
    active: boolean
    createdAt: string
}

export interface wrongAnswer {
    answer:string,
    correctAnswer:string,
    fullQuestion: Question
    // {'answer':answer, 'correctAnswer':correctAnswer , 'fullQuestion': this.questionArray[this.indexOfArray]}
}