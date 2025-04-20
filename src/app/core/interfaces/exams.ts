export interface Exams {
    _id: string
    title: string
    duration: number
    subject: string
    numberOfQuestions: number
    active: boolean
    createdAt: string
}

export interface AllExamsRes {
    message: string
    metadata: Metadata
    exams: Exams[]
}

export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
}

export interface ResExams {
    exams: Exams[]
}




