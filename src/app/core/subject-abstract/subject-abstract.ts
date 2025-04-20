import { Observable } from "rxjs";
import { ResSubjects } from "../interfaces/subjects";
 
export abstract class SubjectAbstract {
    abstract getAllSubjects(): Observable<ResSubjects>
 }