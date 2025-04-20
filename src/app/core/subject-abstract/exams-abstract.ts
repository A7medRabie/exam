import { Observable } from "rxjs";
import { ResExams } from "../interfaces/exams";
 
export abstract class ExamsAbstract {
    abstract getAllExamsOnSubject(id:string): Observable<ResExams>
}