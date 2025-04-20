import { Observable } from "rxjs";
import { QuestionRes } from "../interfaces/questions";

export abstract class QuestionsAbstract {
    abstract getQuestions (id:string):Observable<QuestionRes>
}